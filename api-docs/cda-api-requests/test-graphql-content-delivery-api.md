---
title: "TEST- GraphQL Content Delivery API"
description: GraphQL is a flexible, customized API query language. Contentstack's Content Delivery API gives you the power to query for exactly what you need—in one request.
url: /test-graphql-content-delivery-api
product: Contentstack
doc_type: api-request
created_at: 2025-08-03T00:00:00.000Z
updated_at: 2025-08-03T00:00:00.000Z
---

# TEST- GraphQL Content Delivery API

## Overview

GraphQL Content Delivery API is a flexible alternative to REST APIs that lets you fetch exactly what you need in a single request. This is a test entry to verify Phase 1 workflow functionality.

**API Endpoint**: `https://graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}`

**Method**: `GET` or `POST`

## Authentication

GraphQL API requests require:
- Stack API key (in URL)
- Environment (as query parameter)
- Delivery token (in `access_token` header)

## Example Request

```
GET https://graphql.contentstack.com/stacks/YOUR_STACK_KEY?environment=production&query={all_blog{items{title}}}
```

Headers:
```
access_token: YOUR_DELIVERY_TOKEN
```

## Response

```json
{
  "data": {
    "all_blog": {
      "items": [
        {
          "title": "First Blog Post"
        }
      ]
    }
  }
}
```

This is a test entry created to verify the Phase 1 workflow for API Docs stack. The entry should be created as [DRAFT] when this PR is opened.
