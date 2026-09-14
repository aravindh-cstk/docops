---
title: "Identity Deletion"
description: "Delete individual or bulk user profiles for privacy compliance and data management."
url: /lytics/identity-deletion
---

# Identity Deletion

## Identity Deletion

Delete individual or bulk user profiles for privacy compliance and data management.

## Overview

Lytics provides APIs for deleting user profiles and their associated identity data. This is essential for handling privacy requests (such as GDPR right-to-erasure) and managing your data lifecycle.

Profile deletion removes the profile data and its identity graph connections. Deletion is permanent and cannot be undone.

## Single Profile Deletion

To delete a single user profile, identify them by a field name and value:

```
DELETE /v2/identity/{table}/{field}/{value}
```

#### Path Parameters

| Parameter | Description |
| --- | --- |
| table | The table name (typically user) |
| field | The identity field name (e.g., email, user\_id) |
| value | The field value identifying the profile to delete |

#### Example

## Delete a user by email

DELETE /v2/identity/user/email/user@example.com

## Bulk Deletion

For processing multiple deletion requests (e.g., batch privacy requests), Lytics supports bulk identity deletion.

```
POST /v2/identity/delete
```

Submit a batch of identities to delete. The operation runs asynchronously and returns a request ID for tracking.

## Tracking Deletion Status

Monitor the progress of deletion requests:

```
GET /v2/identity/delete/status
```

Returns the status of recent deletion operations, including:

-   Request ID
-   Number of profiles requested for deletion
-   Number of profiles successfully deleted
-   Current status (pending, in\\\_progress, completed, failed)

### Get Status for a Specific Request

```
GET /v2/identity/delete/status/{requestId}
```

Returns the status of a specific deletion request.

## Important Considerations

-   Deletion is **permanent** and cannot be reversed.
-   The live profile is removed from the profile graph database and search index. The deletion is also recorded in a suppression ledger so that the person's historical events are immediately excluded from all subsequent data reads (exports, audience syncs, analytics replays). Physical removal of archived event data runs as a background process bounded by your account's archival data retention limit.
-   If new data arrives for the same identity keys after a deletion — whether from a third-party integration or because the person re-engages directly — Lytics will create a new profile. Events from before the deletion timestamp remain suppressed; only events from after the deletion form the new relationship. Consider blocking data collection for the identity if you need to prevent re-creation.
-   Deletion removes the profile and all associated identity fragments from the identity graph.
-   Deletion operations may not be instantaneous for large profiles with complex identity graphs.

**Note:** For compliance workflows involving OneTrust or similar consent management platforms, see the [OneTrust integration](/docs/lytics/managing-consumer-data-subject-requests-with-onetrust).
