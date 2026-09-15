---
title: "Schema Advanced Features"
description: "Field analytics, relationship visualization, and expression evaluation."
url: /lytics/schema-advanced
uid: bltca52061a866ced65
---

# Schema Advanced Features

## Schema Advanced Features

Field analytics, relationship visualization, and expression evaluation.

## Overview

Beyond basic field and mapping management, Lytics provides advanced schema capabilities for analyzing field usage, visualizing relationships between fields, and testing schema expressions.

## Field Analytics

### Field Information

```
GET /v2/schema/{table}/fieldinfo
```

Returns detailed metadata about field values, including usage statistics, sample values, and cardinality. This is useful for understanding the distribution and quality of data across your schema fields.

#### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| fields | string |  | Comma-separated list of field names to analyze |
| field | string |  | Single field name (alternative to fields) |
| limit | int | 20 | Maximum number of values to return per field (max 1000) |
| timespan | int |  | Number of days to look back |

#### Response

```
{
  "fields": [
    {
      "name": "email",
      "count": 50000,
      "values": [
        {"value": "user@example.com", "count": 1},
        {"value": "other@example.com", "count": 1}
      ],
      "cardinality": 48500,
      "first_seen": "2023-06-01T00:00:00Z",
      "last_seen": "2024-01-15T10:30:00Z"
    }
  ]
}
```

**Note:** Field information is cached for 5 minutes. Repeated requests within this window return cached results.

### Field Names

```
GET /v2/schema/{table}/fieldnames
```

Returns a list of all field names defined in the specified table. This is a lightweight alternative to fetching the full schema when you only need field names.

## Schema Visualization

### Field Relationship Network

```
GET /v2/schema/{table}/network
```

Returns a graph of relationships between fields in the schema. This network visualization shows how fields are connected through identity resolution, mappings, and data flow.

The response includes nodes (fields) and edges (relationships) that can be rendered as a network graph. Results are cached for performance.

## Expression Evaluation

### Evaluate Schema Expression

```
POST /v2/schema/{table}/evaluate
```

Tests a schema expression against the current schema. Use this to validate mapping expressions, filter conditions, or LQL queries before applying them to your schema.

This is useful for:

-   Verifying that a mapping expression produces the expected output
-   Testing filter conditions before using them in stream routing rules
-   Debugging complex LQL expressions
