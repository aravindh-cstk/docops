---
title: "AI Schema Suggestions"
description: "Use AI to automatically generate field definitions and mappings from your incoming data."
url: /lytics/ai-schema-suggestions
---

# AI Schema Suggestions

## AI Schema Suggestions

Use AI to automatically generate field definitions and mappings from your incoming data.

## Overview

When ingesting data from new sources, defining field types, merge operations, and stream mappings can be time-consuming. Lytics provides an AI-powered schema suggestion feature that analyzes sample data and recommends appropriate field definitions and mappings.

The schema suggestion system can:

-   Analyze JSON or CSV sample data from your event streams
-   Recommend field types (string, number, boolean, date, etc.)
-   Identify which fields are likely identifiers or PII
-   Suggest appropriate merge operations for each field
-   Generate stream mapping expressions

## How It Works

1.  **Data Analysis**: You provide sample records from a stream (or the system pulls them automatically from the event catalog).
2.  **AI Processing**: The sample data is sent to an LLM (Google Vertex AI or OpenAI) that analyzes field names, values, and patterns.
3.  **Suggestion Generation**: The AI returns structured suggestions for each field, including type, merge operation, PII classification, and mapping expressions.
4.  **Review & Apply**: You review the suggestions and apply the ones that fit your schema design.

## API Reference

### Generate Suggestions from Sample Data

```
POST /v2/ai/schema/suggest
```

Analyzes sample records and returns field and mapping suggestions.

#### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| engine | string | vertex | AI engine to use: vertex or openai |
| stream | string | default | Stream name for the suggestions |
| table | string | user | Target table name |
| format | string | json | Format of the sample data: json or csv |
| prompts | string\\\[\] |  | Additional custom instructions for the AI |
| temperature | float | 1.05 | Controls randomness of AI output |

#### Request Body

Provide sample records as raw JSON array or CSV data.

```
[
  {
    "email": "user@example.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "signup_date": "2024-01-15T10:30:00Z",
    "purchase_count": 5,
    "total_spend": 249.99
  }
]
```

#### Response

Returns a map of field names to their suggested definitions and mappings:

```
{
  "email": {
    "fields": [
      {
        "field": "email",
        "is_identifier": true,
        "is_pii": true,
        "shortdesc": "User email address",
        "type": "string",
        "mergeop": "setadd",
        "managed_by": "ai"
      }
    ],
    "mappings": [
      {
        "field": "email",
        "stream": "default",
        "expr": "email",
        "guard_expr": "",
        "managed_by": "ai"
      }
    ]
  },
  "purchase_count": {
    "fields": [
      {
        "field": "purchase_count",
        "is_identifier": false,
        "is_pii": false,
        "shortdesc": "Total number of purchases",
        "type": "int",
        "mergeop": "valuect",
        "managed_by": "ai"
      }
    ],
    "mappings": [
      {
        "field": "purchase_count",
        "stream": "default",
        "expr": "purchase_count",
        "managed_by": "ai"
      }
    ]
  }
}
```

### Retrieve Pre-computed Suggestions for a Stream

```
GET /v2/ai/stream/{stream}
```

Returns previously generated field suggestions for a specific stream, if available.

### Generate Suggestions for a Specific Field

```
GET /v2/ai/stream/{stream}/{key}
```

Generates suggestions for a single field within a stream.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| values | string\\\[\] | Sample values for the field. If omitted, values are fetched from the event catalog. |

#### Response

Returns field and mapping suggestions for the specified key, using the same structure as the full suggestion response.

## Suggestion Fields

Each field suggestion includes:

| Property | Description |
| --- | --- |
| field | Recommended field name in the schema |
| is\_identifier | Whether the field should be used as an identity key |
| is\_pii | Whether the field contains personally identifiable information |
| shortdesc | Human-readable description of the field |
| type | Recommended data type (string, int, float, boolean, date, etc.) |
| mergeop | Recommended merge operation (setadd, valuect, max, min, etc.) |
| managed\_by | Set to ai indicating the suggestion was AI-generated |

Each mapping suggestion includes:

| Property | Description |
| --- | --- |
| field | Target field in the schema |
| stream | Source stream name |
| expr | Mapping expression to extract the value |
| guard\_expr | Optional conditional expression for the mapping |
