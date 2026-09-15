---
title: "Goals API"
description: "Programmatically manage goals and track conversion progress."
url: /lytics/goals-api
uid: blt145a30ce21d0d148
---

# Goals API

## Goals API

Programmatically manage goals and track conversion progress.

## Overview

The Goals API allows you to programmatically manage goals and query their conversion assessment data. Goals represent measurable marketing objectives that you want to drive users toward, composed of stages and experiences.

For an overview of the Goals feature and UI-based management, see [Goals](/docs/lytics/goals).

## API Reference

### List Goals

```
GET /v2/goals
```

Returns all goals for the account.

### Get a Goal

```
GET /v2/goals/{id}
```

Returns details of a specific goal, including its stages, experiences, and conversion criteria.

### Create a Goal

```
POST /v2/goals
```

Creates a new goal.

### Update a Goal

```
PUT /v2/goals/{id}
```

Updates an existing goal's configuration.

### Delete a Goal

```
DELETE /v2/goals/{id}
```

Deletes a goal and its associated stage configurations. This does not delete the underlying experiences or audiences.

### Assess Goal Progress

```
GET /v2/goals/{id}/current
```

Returns the current conversion assessment for a goal, including:

-   Number of users in each stage
-   Conversion rates between stages
-   Overall goal completion metrics

This endpoint provides a real-time snapshot of how users are progressing through the goal's stages.
