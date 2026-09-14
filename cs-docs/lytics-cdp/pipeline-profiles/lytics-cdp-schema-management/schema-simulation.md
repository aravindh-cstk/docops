---
title: "Schema Simulation"
description: "Test schema definitions against sample data to preview how entities will be built."
url: /lytics/schema-simulation
---

# Schema Simulation

## Schema Simulation

Test schema definitions against sample data to preview how entities will be built.

## Overview

The Schema Simulation endpoint lets you test a schema definition against sample data without persisting anything. It shows step-by-step how raw data would be processed through your field mappings, identity resolution, and merge operations to produce entity records. This is useful for validating schema configurations before applying them to production.

## API Reference

### Simulate Entity Analysis

```
POST /v2/simulate-entity-analysis
```

Processes sample data through a provided schema definition and returns step-wise analysis results.

#### Request Body

```
{
  "schema": {
    "fields": [
      {
        "field": "email",
        "type": "string",
        "isIdentifier": true
      },
      {
        "field": "name",
        "type": "string"
      },
      {
        "field": "total_spent",
        "type": "number",
        "mergeOp": "sum"
      }
    ],
    "mappings": [
      {
        "field": "email",
        "stream": "purchases",
        "expr": "email"
      },
      {
        "field": "name",
        "stream": "purchases",
        "expr": "customer_name"
      },
      {
        "field": "total_spent",
        "stream": "purchases",
        "expr": "amount",
        "guard": "amount > 0"
      }
    ],
    "rank": {
      "fields": ["email"]
    }
  },
  "data": [
    {
      "email": "john@example.com",
      "customer_name": "John Doe",
      "amount": 49.99
    },
    {
      "email": "john@example.com",
      "customer_name": "John Doe",
      "amount": 25.00
    }
  ]
}
```

#### Schema Object

| Field | Type | Description |
| --- | --- | --- |
| fields | array | Field definitions (at least one required) |
| fields\[\].field | string | Field name |
| fields\[\].type | string | Data type (string, number, etc.) |
| fields\[\].isIdentifier | boolean | Whether this field is used for identity resolution |
| fields\[\].mergeOp | string | How to merge duplicate values (sum, max, min, etc.) |
| fields\[\].capacity | int | Maximum number of values to store |
| fields\[\].keepDays | int | Retention period in days |
| mappings | array | Mapping definitions (at least one required) |
| mappings\[\].field | string | Target schema field name |
| mappings\[\].stream | string | Source stream name |
| mappings\[\].expr | string | LQL expression for value extraction |
| mappings\[\].guard | string | Optional LQL guard condition |
| rank | object | Identity ranking configuration |
| rank.fields | string\\\[\] | Identity fields in priority order |

#### Data Array

An array of data objects to process. Each object is a key-value map representing a raw event. Data items are processed sequentially, building up entity records across iterations.

#### Response

```
{
  "step_analyses": [
    [
      {
        "refs": {
          "refs": [
            {"key": "email", "value": "john@example.com"}
          ]
        },
        "keys": [
          {"key": "email", "value": "john@example.com"}
        ],
        "ent": {
          "email": "john@example.com",
          "name": "John Doe",
          "total_spent": 49.99
        },
        "entWithTS": {
          "email": "john@example.com",
          "name": "John Doe",
          "total_spent": 49.99
        },
        "details": []
      }
    ],
    [
      {
        "refs": {
          "refs": [
            {"key": "email", "value": "john@example.com"}
          ]
        },
        "keys": [
          {"key": "email", "value": "john@example.com"}
        ],
        "ent": {
          "email": "john@example.com",
          "name": "John Doe",
          "total_spent": 74.99
        },
        "entWithTS": {
          "email": "john@example.com",
          "name": "John Doe",
          "total_spent": 74.99
        },
        "details": []
      }
    ]
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| step\_analyses | array | One entry per input data item |
| step\_analyses\[\]\[\] | array | One analysis object per unique entity identified in that step |
| refs | object | All identity aliases/references for the entity |
| keys | array | Identity key fragments (field name + value pairs) |
| ent | object | The entity as key-value pairs after processing |
| entWithTS | object | The entity with timestamp metadata |
| details | array | Additional analysis details |

#### Error Responses

| Status | Error | Cause |
| --- | --- | --- |
| 400 | Schema must contain at least one field | Empty fields array |
| 400 | Schema must contain at least one mapping | Empty mappings array |
| 400 | Data array cannot be empty | No data objects provided |
| 400 | failed building query | Invalid schema configuration (bad LQL, missing fields) |
| 400 | failed processing data | Data incompatible with schema definition |
| 400 | No analysis results generated | Processing produced no entities |

## Key Behaviors

-   **In-memory processing**: All data is processed in temporary stores. Nothing is persisted to your account.
-   **Sequential processing**: Data items are processed one at a time in order, so later items can merge with entities created by earlier items.
-   **Identity resolution**: The simulation applies the same identity resolution logic as production, using the provided rank configuration.
-   **Merge operations**: Field merge operations (sum, max, min, etc.) are applied when multiple data items resolve to the same entity.
-   **Guard conditions**: Mapping guards are evaluated and data is only mapped when the guard expression is true.

## Use Cases

-   **Validate field mappings**: Confirm that LQL expressions extract the correct values from your data
-   **Test identity resolution**: Verify that records are correctly linked across data items
-   **Preview merge behavior**: See how merge operations combine values from multiple events
-   **Debug guard conditions**: Ensure mapping guards filter data as expected
-   **Schema prototyping**: Experiment with schema designs before committing changes
