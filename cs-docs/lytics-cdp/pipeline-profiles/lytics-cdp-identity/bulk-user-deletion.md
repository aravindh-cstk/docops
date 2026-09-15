---
title: "Bulk User Deletion"
description: "Delete large lists of user profiles for GDPR and CCPA compliance using the bulk identity deletion endpoint."
url: /lytics/bulk-user-deletion
uid: blt49f418253231b5a6
---

# Bulk User Deletion

## Bulk User Deletion

Delete large lists of user profiles for GDPR and CCPA compliance using the bulk identity deletion endpoint.

## Overview

Lytics provides a bulk identity deletion endpoint for removing large lists of user profiles in a single workflow. It is the right tool whenever you need to fulfill privacy requests at scale. That includes processing a batch of GDPR right-to-erasure or CCPA deletion requests, honoring a suppression list handed off from a consent management platform, or clearing profiles as part of a data retention policy.

This guide is written for the data engineers and privacy teams who build and operate those deletion workflows. It explains why the bulk endpoint is the correct choice for batch work, why the single-value endpoint can return 404 errors partway through a large job, and how to structure your requests so a run completes cleanly and stays auditable from start to finish.

**Note:** Deleting a single profile on demand? You can do that from the UI (see [Compliance](/docs/lytics/compliance)) or with the single-value API endpoint described in [Identity Deletion](/docs/lytics/identity-deletion). This guide focuses on batch deletion.

## The two delete endpoints

Lytics exposes two endpoints for deleting user profiles. They behave differently, and choosing the right one is the single most important decision in a deletion workflow.

### Single-value delete

```
DELETE /v2/identity/{table}/{key}/{value}
```

This endpoint resolves the full profile at the time of the request and then queues it for deletion. If the profile cannot be fully resolved (for example it is partially deleted or otherwise in an inconsistent state), it returns 404. It is best suited to one-off, on-demand deletions.

### Bulk delete

```
DELETE /v2/identity/queue/bulk/{table}/{field}
```

This endpoint queues deletion requests **without** resolving each profile at request time. Profiles in any state, including partially deleted or inconsistent ones, are accepted into the queue and processed asynchronously. You will not get 404 errors for profiles the single-value endpoint cannot resolve.

This is the correct endpoint for any batch deletion workflow.

## Why single-value deletes return 404

Because the single-value endpoint resolves a profile before queuing it, it returns 404 when that resolution fails. In a large job, even a small percentage of unresolvable profiles will cause failures partway through. Resolution typically fails for one of three reasons.

**Complex or inconsistent profiles.** Some profiles cannot be fully resolved at request time, such as those with an unusually large or tangled identity graph. These can fail to resolve and return 404.

**Partially deleted profiles.** If a deletion was already submitted and is still processing, a new delete request for the same identifier may not find a resolvable profile and returns 404.

**Events re-ingested after deletion.** If new events for a previously deleted user arrive (for example from a delayed data pipeline or a historical backfill), partial profile data can be recreated and return 404 on single-value delete. Events from before the deletion remain suppressed from exports, and activity that arrives after the deletion is treated as a new profile.

In every case the fix is the same: use the bulk endpoint, which does not resolve the profile at request time.

## Identifying profiles in an unhealthy state

Profiles that fail to resolve cleanly on the single-value endpoint are typically flagged in profile data with one or more health fields. These flags are set during profile processing when the profile exceeds a structural limit or cannot be fully assembled. They are useful both as a diagnostic signal and as a way to find candidates for cleanup.

| Field | Meaning |
| --- | --- |
| \_profile\_processing\_failure | The profile failed to process during its most recent processing attempt. |
| \_broken\_profile\_broke\_max\_size | The profile exceeded the maximum allowed total size. |
| \_broken\_profile\_broke\_max\_fragment\_size | A fragment of the profile exceeded the maximum allowed fragment size. |
| \_broken\_profile\_max\_neighbors | The profile's identity graph has more connected identifiers than the limit allows. |
| \_broken\_profile\_nested\_count | The profile has more nested values than the limit allows. |
| \_dropped\_events\_too\_large | One or more events for this profile were dropped because they exceeded the maximum event size. |

**Warning:** These are internal (hidden) profile fields. They are not surfaced in the standard audience-builder field picker, so you cannot select them from the dropdown when building a segment visually. To query against them, write the segment as a query (see below).

### Finding unhealthy profiles with a query

Because these fields are not exposed in the visual builder, the reliable way to find unhealthy profiles is an ad-hoc segment scan that references the fields directly in a query. Use EXISTS rather than an equality check: the fields have mixed types (some are booleans, one is an integer, one is a string), and a flag being _present_ on the profile is what marks it as unhealthy.

```
curl -X POST \
  'https://api.lytics.io/api/segment/scan?table=user&limit=100' \
  -H 'Authorization: $LIOKEY' \
  -H 'Content-Type: text/plain' \
  --data-binary "FILTER OR ( EXISTS '_profile_processing_failure', EXISTS '_broken_profile_broke_max_size', EXISTS '_broken_profile_broke_max_fragment_size', EXISTS '_broken_profile_max_neighbors', EXISTS '_broken_profile_nested_count', EXISTS '_dropped_events_too_large' ) FROM user"
```

The response contains a total count, a data array of matching profiles, and a \_next token. Page through the results by passing the \_next value back as the start parameter on the following request until \_next is empty. From each returned profile, collect the identifier you intend to delete by (for example email), then feed that list into the bulk deletion workflow below.

**Note:** If you want a reusable audience instead of a one-off scan, save the same FILTER ... FROM user statement as a segment through the segment API. The query references the hidden fields the same way; only the visual builder's field picker omits them.

A profile in this state is not recoverable through normal ingest. Submitting it to the bulk endpoint is the intended cleanup path and is safe: the profile data is already in an inconsistent state, so deletion does not lose recoverable history.

## Building a bulk deletion workflow

### Send identifiers in the JSON body

The bulk endpoint accepts application/json. Put the table and field in the URL path, and send the identifiers as a JSON object with a values array in the request body.

Sending identifiers in the body rather than the URL avoids URL length limits and keeps user identifiers out of URL-based request logs, which is better practice for handling personally identifiable information (PII).

```
curl -X DELETE \
  'https://api.lytics.io/v2/identity/queue/bulk/user/email' \
  -H 'Authorization: $LIOKEY' \
  -H 'Content-Type: application/json' \
  -d '{"values": ["user1@example.com", "user2@example.com", "user3@example.com"]}'
```

A single request body can hold many thousands of identifiers. For very large jobs, split the work across multiple requests so responses stay manageable and one failed request does not hold up the whole run.

**Warning:** The body must be a JSON object with a values key. A bare array such as \["user1@example.com"\] does not parse and returns 400.

### Parse the response and store request IDs

The bulk endpoint returns 202 with a JSON object containing two maps:

```
{
  "data": {
    "successes": {
      "user1@example.com": "req-abc123",
      "user2@example.com": "req-def456"
    },
    "errors": {
      "bad-value": "reason the value was not queued"
    }
  }
}
```

-   **successes** maps each accepted identifier to a unique request\_id. Store these for status tracking.
-   **errors** maps each identifier that was not queued to the reason it failed, usually a malformed value or one that does not match the specified field. Log and review these.

**Warning:** A 202 status means the request was accepted, not that every identifier was queued. Always parse the response body. Any identifier that appears in the errors map was not queued for deletion. Treating 202 as success without inspecting the body will hide partial or total failures.

**Note:** Resubmitting an identifier you already sent is safe. It comes back in successes with the original request\_id and does not create a duplicate deletion.

### Remove invalid values before submitting

Exported user lists often contain values like null, 0, NaN, and empty strings from upstream data quality issues. These do not match real profiles and will appear in the errors map. Filter them out before building your request.

Identifiers exported from CSV, spreadsheet, or BI tooling may also carry trailing whitespace, trailing quote characters, byte-order-mark (BOM) characters, or other invisible formatting artifacts. Lytics does not sanitize path parameters or JSON values server-side, so a single stray character causes the identifier to miss its target and land in the errors map. Trim whitespace, strip surrounding quotes, and remove non-identifier punctuation as part of the same normalization step that filters invalid values.

### Send one field type per request

The bulk endpoint is scoped to a single table and field. If you have multiple identifier types to delete (for example email addresses and member IDs), submit separate requests:

## Request 1: delete by email

DELETE /v2/identity/queue/bulk/user/email

## Request 2: delete by member ID

DELETE /v2/identity/queue/bulk/user/member\_id

## Track deletion progress

Deletion is asynchronous. A queued request does not mean the data is gone yet. Use the status endpoints to confirm progress:

## Status of a specific request

GET /v2/identity/deletestatus/{request\_id}

## All deletion requests for your account

GET /v2/identity/deletestatus/list

## Overview of all requests by state

GET /v2/identity/deletestatus/overview

The status response includes a state and a completed flag. A request moves through these states as its data is removed from each storage layer:

| State | Meaning |
| --- | --- |
| initial | The request has been accepted. |
| primary | The first round of data removal is underway. |
| archive | Primary data is cleared; archived copies are being cleared. |
| secondary | Archived copies are cleared; the final removal pass is underway. |
| done | All data has been removed. This is the final state. |

> 🚧
> 
> Do not consider a deletion complete until completed is true (state done). Reaching secondary is not the end. A final removal pass still follows it. Full removal can take hours to days depending on the volume of data associated with the profile.

A deleted user's historical events are excluded from exports immediately, even while physical removal is still in progress.

## Required API permissions

The API token must have **Entity: Delete** permission. A read-only token returns a permission-denied error. Verify your token's permissions in your Lytics account settings before running bulk deletions.

## When the bulk endpoint returns errors

If identifiers you expect to be valid appear in the errors map, work through these checks before contacting support:

1.  **Confirm the URL path.** The {table} and {field} segments must match a table and field that exist in your account schema. A typo in the field name causes every value in the request to miss its target.
2.  **Confirm the field matches the identifier type.** Email addresses submitted against a member-ID field will not resolve, and vice versa. Submit a separate request per field type.
3.  **Inspect the raw bytes of a failing identifier.** Log one failing value at the byte level (for example with a repr() call or a hex dump) to confirm no invisible characters, trailing punctuation, or formatting artifacts were introduced by upstream tooling.
4.  **Check token permissions.** A token missing **Entity: Delete** can produce permission errors that surface per value rather than as a top-level response error.
5.  **Capture the response body and a request timestamp.** If the issue still cannot be reproduced, share both with Lytics support so the request can be traced server-side.

## Deleting already-deleted or partial profiles

If an identifier returns 404 on single-value delete but you still need it removed, submit it to the bulk queue. The deletion system processes whatever data remains. Submitting a delete for a profile that is already partially or fully cleaned up is safe. It will be a no-op, or it will appear in successes with a request\_id.

## Quick reference

| Scenario | Recommended action |
| --- | --- |
| Deleting a list of users for GDPR | Use the bulk endpoint with identifiers in the JSON body |
| Getting 404s from the single-value endpoint | Switch to the bulk endpoint, which accepts identifiers in any state |
| Sending thousands of identifiers | One body holds many thousands; split very large jobs into a few requests |
| Checking if a deletion is complete | Poll GET /v2/identity/deletestatus/{request\_id} until completed is true |
| Resubmitting an identifier you already sent | Safe; returns the original request\_id, no duplicate |
| Mixing emails and member IDs | Submit as separate bulk requests, one field type per request |

**Note:** For compliance workflows driven by OneTrust or a similar consent management platform, see [Managing Consumer Data Subject Requests with OneTrust](/docs/lytics/managing-consumer-data-subject-requests-with-onetrust).
