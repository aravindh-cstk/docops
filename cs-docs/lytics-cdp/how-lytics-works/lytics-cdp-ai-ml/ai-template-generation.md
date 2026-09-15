---
title: "AI Template Generation"
description: "Generate data transformation templates from example input and output schemas using AI."
url: /lytics/ai-template-generation
uid: blt6d1722e871acb35e
---

# AI Template Generation

## AI Template Generation

Generate data transformation templates from example input and output schemas using AI.

## Overview

Lytics can generate data transformation templates using AI. Given a desired output schema and sample input data, the system produces working template code in Jsonnet, Handlebars, or JavaScript.

This is particularly useful when building export workflows that require transforming Lytics profile data into a format expected by a destination system.

## API Reference

### Generate a Template

```
POST /v2/ai/template
```

Generates template code that transforms input data into the desired output format.

#### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| type | string | jsonnet | Template language: jsonnet, handlebars, or js1 |

#### Request Body

```
{
  "prompt": "Optional additional instructions for the AI",
  "desired_json": {
    "name": "Full name of the customer",
    "email": "Primary email address",
    "segment_list": "Comma-separated list of audience names"
  },
  "sample_data": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com",
    "segments": ["high_value", "newsletter_subscriber"]
  }
}
```

**Note:** If sample\_data is omitted, Lytics will use a test entity from your schema as the sample input.

#### Response

Returns the generated template as plain text. For example, with type=jsonnet:

```
{
  name: entity.first_name + " " + entity.last_name,
  email: entity.email,
  segment_list: std.join(",", entity.segments),
}
```

## Template Languages

| Language | Parameter | Use Case |
| --- | --- | --- |
| Jsonnet | jsonnet | Default. Best for JSON-to-JSON transformations with logic. |
| Handlebars | handlebars | Good for text/HTML templates with simple interpolation. |
| JavaScript | js1 | Maximum flexibility for complex transformations. |

## Tips

-   Use the prompt field to provide additional context about edge cases or specific formatting requirements.
-   Review and test generated templates before deploying them in production workflows.
-   The AI uses GPT-4o for template generation, which handles complex schema transformations well.
