---
title: "Data Models API"
description: "Create and manage composite data models that combine data from multiple sources."
url: /lytics/data-models-api
---

# Data Models API

## Data Models API

Create and manage composite data models that combine data from multiple sources.

## Overview

Data Models define composite views of customer data by combining fields from multiple tables or external connections. They are used to create unified datasets for export, analysis, or as input to workflows.

## API Reference

### List Data Models

```
GET /v2/datamodel
```

Returns all data models for the account.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sizes | boolean | Include size information for each model |

#### Response

Returns an array of data model objects with optional health status and size.

### Get a Data Model

```
GET /v2/datamodel/{id}
```

Returns a single data model by ID, including its health status.

#### Response

```
{
  "id": "dm_abc123",
  "name": "Customer 360",
  "slug": "customer-360",
  "type": "cloud_connect",
  "health": {
    "status": "healthy",
    "details": ""
  },
  "created": "2024-01-15T10:30:00Z",
  "updated": "2024-01-20T14:00:00Z"
}
```

### Create a Data Model

```
POST /v2/datamodel
```

Creates a new data model.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| is\_draft | boolean | Create as draft with relaxed validation |

### Update a Data Model

```
PUT /v2/datamodel/{id}
```

Updates an existing data model's configuration.

### Delete a Data Model

```
DELETE /v2/datamodel/{id}
```

Deletes a single data model.

### Bulk Delete Data Models

```
DELETE /v2/datamodel
```

Deletes multiple data models in a single request.

### Get Data Model Size

```
GET /v2/data/datamodel/{id}/size
```

Returns size information for a specific data model.

```
GET /v2/data/datamodel/size
```

Returns size information for all data models.

### Sync a Data Model

```
GET /v2/datamodel/{id}/sync/{state}
```

Triggers a sync of the data model to the specified state.

### Get Data Model Logs

```
GET /v2/datamodel/{id}/logs
```

Returns execution logs for a data model, useful for debugging sync issues.

### Bounce a Data Model

```
POST /v2/datamodel/bounce
```

Restarts a data model job. Use this when a model is stuck or needs to be refreshed.
