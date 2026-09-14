---
title: "Orchestration API"
description: "Manage experience groups, prioritization, candidates, and computed segments for campaign orchestration."
url: /lytics/orchestration
---

# Orchestration API

## Orchestration API

Manage experience groups, prioritization, candidates, and computed segments for campaign orchestration.

## Overview

The Orchestration API manages the full lifecycle of marketing experiences -- from campaign structure and audience targeting to candidate generation and delivery prioritization. It builds on the [Decision Engine](/docs/lytics/decision-engine) by providing the CRUD operations and hierarchical organization for experiences, groups, prioritization, and templates.

## Concepts

### Hierarchy

Orchestration uses a hierarchical structure:

```
Campaign (ExperienceGroup, class="campaign")
├── Stage 1 (ExperienceGroup, class="stage")
│   ├── Experience A
│   ├── Experience B
│   └── Experience C
├── Stage 2 (ExperienceGroup, class="stage")
│   └── Experience D
└── Stage 3 (ExperienceGroup, class="stage")
```

-   **Campaigns** are top-level containers that define the overall audience and goal
-   **Stages** are ordered phases within a campaign (e.g., awareness → consideration → conversion)
-   **Experiences** are individual messages or actions delivered to users

### Computed Segments

The orchestration system automatically generates three types of segments for targeting:

| Segment Type | Purpose | Logic |
| --- | --- | --- |
| **Fixed** | Wrapper segment pointing to the primary audience | INCLUDE parent.SegmentId |
| **Target** | Mutually exclusive audience based on hierarchy | Includes parent's fixed segment, excludes sibling conversions |
| **Decision** | Tracks who has received the experience | Auto-populated on delivery |

Target segments ensure mutual exclusivity across stages -- a user who converts in Stage 1 won't be targeted in Stage 2.

### Prioritization

Prioritization records control the ordering of experiences within a group and campaigns at the account level.

-   Each stage/campaign can have a Prioritization record with weighted entries
-   Higher weight = higher priority in the [Decision Engine](/docs/lytics/decision-engine)
-   The special account\_priority slug controls top-level campaign ordering

## API Reference

### Experience Groups

#### Create a Group

```
POST /api/experience/group
```

Creates a new campaign or stage with optional nested experiences.

#### List Groups

```
GET /api/experience/group
```

Returns all top-level groups (campaigns).

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deleted | boolean | Include soft-deleted groups |
| skip\_child\_groups | boolean | Don't load nested stages |
| skip\_child\_experiences | boolean | Don't load experiences (default: true) |

#### Get a Group

```
GET /api/experience/group/{id}
```

Returns a single group with its child stages and experiences.

#### Update a Group

```
PATCH /api/experience/group/{id}
```

Updates group configuration. Child experiences can be detached or reorganized.

#### Delete a Group

```
DELETE /api/experience/group/{id}
```

Soft-deletes a group. Child stages are also soft-deleted; child experiences are detached.

#### Set Campaign Priority

```
POST /api/experience/group/priority
```

Sets the account-level campaign priority ordering.

### Experiences

#### Create an Experience

```
POST /api/experience
```

Creates a new experience within a stage.

#### List Experiences

```
GET /api/experience
```

Returns all experiences.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deleted | boolean | Include soft-deleted experiences |
| provider | string | Filter by provider ID or slug |

#### Get an Experience

```
GET /api/experience/{id}
```

Returns a single experience with its configuration and generated segments.

#### Update an Experience

```
PATCH /api/experience/{id}
```

Updates experience configuration.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| update\_state | boolean | Change published status |
| clean\_override | boolean | Replace detail\\\_override wholesale |

#### Delete an Experience

```
DELETE /api/experience/{id}
```

Soft-deletes an experience and its generated segments.

#### Get Orphan Experiences

```
GET /api/experience/orphan
```

Returns experiences that are not assigned to any group.

### Experience Lifecycle

Experiences follow this lifecycle:

1.  **Draft** -- Created but not yet published
2.  **Published** -- Active and generating candidates for delivery
3.  **Unpublished** -- Paused, no longer served

#### Publishing an Experience

```
PATCH /api/experience/{id}?update_state=true
```

```
{
  "experience": {
    "state": {"status": "published"},
    "dates": {
      "startDate": "2024-01-15T00:00:00Z",
      "endDate": "2024-03-15T00:00:00Z"
    }
  }
}
```

When an experience is published:

-   Target and decision segments are generated/updated
-   Export jobs are created if using external providers
-   Group prioritization is updated
-   The experience becomes available as a candidate

### Candidates

#### List Candidates

```
GET /api/experience/candidate
```

Returns available experience candidates for serving, filtered by vehicle and channel.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| vehicle | string | Filter by delivery vehicle (provider ID or slug) |
| channel | string | Filter by channel |

Candidates include:

-   Metrics from the last 6 hours (conversion rate, impression count, conversion count)
-   Priority levels (campaign, stage, experience)
-   Ancestor IDs (full group hierarchy)
-   Provider-specific attributes

**Note:** Candidate lists are cached for 10 minutes. Published/unpublished status changes may take up to 10 minutes to reflect in candidate responses.

### Prioritization

#### Create a Prioritization

```
POST /api/experience/prioritization
```

Creates a prioritization record defining the ordering of experiences within a group.

#### List Prioritizations

```
GET /api/experience/prioritization
```

Returns all prioritization records.

#### Get a Prioritization

```
GET /api/experience/prioritization/{id}
```

Returns a single prioritization record.

#### Get Account Priority

```
GET /api/experience/prioritization/account_priority
```

Returns the master account-level campaign prioritization.

#### Update a Prioritization

```
PATCH /api/experience/prioritization/{id}
```

Updates priority weights.

#### Delete a Prioritization

```
DELETE /api/experience/prioritization/{id}
```

Deletes a prioritization record.

### Import Experiences

#### List Importable Experiences

```
GET /api/experience/import
```

Lists experiences available to import from an external provider.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| provider\_slug | string | **Required.** Provider to import from |
| auth\_id | string | **Required.** Auth token ID |
| include\_existing | boolean | Include already-imported experiences (default: false) |
| include\_ended | boolean | Include ended campaigns (default: true) |

#### Import Experiences

```
POST /api/experience/import
```

Batch imports experiences from an external provider.

### Templates

#### Create a Template

```
POST /api/experience/template
```

Creates a reusable experience template.

#### List Templates

```
GET /api/experience/template
```

Returns all templates.

#### Get a Template

```
GET /api/experience/template/{id}
```

Returns a single template.

#### Update a Template

```
PATCH /api/experience/template/{id}
```

Updates a template.

#### Delete a Template

```
DELETE /api/experience/template/{id}
```

Deletes a template.

## Experience Vehicle

The vehicle defines how an experience is delivered:

| Field | Description |
| --- | --- |
| providerId / providerSlug | Delivery platform (email, push, web, ads) |
| providerChannel | Sub-type within the provider |
| tactic | Approach: capture\_leads, present\_message, target\_url, recommend\_content, SiteGate |
| aggression | Confidence/aggressiveness level for delivery |
| externalId | ID in the external system (Facebook campaign ID, etc.) |
| detail | Provider-specific configuration |
| detailOverride | Runtime overrides for the detail configuration |
