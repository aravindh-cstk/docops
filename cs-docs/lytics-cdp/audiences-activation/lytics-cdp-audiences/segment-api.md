---
title: "Segment API"
description: "Programmatically manage audiences using the Segment API."
url: /lytics/segment-api
uid: bltdbf45b8eeede67c8
---

# Segment API

## Segment API

Programmatically manage audiences using the Segment API.

## Overview

The Segment API allows you to programmatically create, update, delete, and query audiences. While most audience management can be done through the Lytics UI, the API is useful for automating audience workflows, integrating with external systems, or building custom tooling.

## Core Operations

### List Segments

```
GET /v2/segment
```

Returns all segments for the account.

### Get a Segment

```
GET /v2/segment/{id}
```

Returns details of a specific segment, including its SegmentQL definition, membership size, and metadata.

### Create a Segment

```
POST /v2/segment
```

Creates a new segment.

#### Request Body

```
{
  "name": "High Value Customers",
  "slug_name": "high_value_customers",
  "is_public": true,
  "table": "user",
  "ast": {
    "// SegmentQL AST definition"
  }
}
```

### Update a Segment

```
PUT /v2/segment/{id}
```

Updates an existing segment's definition, name, or other properties.

### Delete a Segment

```
DELETE /v2/segment/{id}
```

Deletes a segment. This does not delete the underlying user profiles.

## Advanced Operations

### Reevaluate a Segment

```
POST /v2/segment/{id}/reevaluate
```

Triggers a full reevaluation of segment membership. Normally, segment membership is updated in real-time as profile data changes. Use reevaluation when:

-   You've made significant schema changes that affect segment criteria
-   You need to force a full recalculation of membership
-   You suspect membership drift due to processing delays

**Note:** Reevaluation runs asynchronously. For large segments, it may not complete immediately.

### Segment Ancestry

```
GET /v2/segment/{id}/ancestors
```

Returns the lineage of a segment -- the parent segments that this segment depends on or is derived from. This is useful for understanding segment composition when segments reference other segments in their definitions.

### Segment Jobs

```
GET /v2/segment/{id}/jobs
```

Returns the workflow jobs associated with a segment, including active exports and imports.

## Segment Groups

Segment groups allow you to organize audiences into logical folders.

### List Groups

```
GET /v2/segment/group
```

### Create a Group

```
POST /v2/segment/group
```

#### Request Body

```
{
  "name": "Campaign Audiences",
  "description": "Audiences used for Q1 campaigns"
}
```

### Update a Group

```
PUT /v2/segment/group/{id}
```

### Delete a Group

```
DELETE /v2/segment/group/{id}
```

Deleting a group does not delete the segments within it.

## Related

-   [Audiences](/docs/lytics/audiences) - UI-based audience management
-   [Audience Groups](/docs/lytics/audience-groups) - Organizing audiences in the UI
