---
title: "Test API Request Demo"
description: GET /test/demo-endpoint
url: developer-apis/test-api-request-demo
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-08-10
---

# Test API Request Demo

**GET** `/test/demo-endpoint`

This is a test API documentation entry created to verify the Git → Sandbox sync workflow (TC-001). The entry should be created in Sandbox CMS with content type `api_requests`.

## URL Parameters

- **test_param** (optional)
  Test parameter for demo purposes.
  Default: `test_value`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`

## Sample Response

```json
{
  "status": "success",
  "message": "Test API request demo",
  "timestamp": "2026-08-10T10:00:00Z"
}
```

## Verification

This entry demonstrates:
- ✅ YAML frontmatter parsing (title, url, doc_type, arrays)
- ✅ Content type mapping (api-request → api_requests)
- ✅ Field sync (title, url, body)
- ✅ Correct Sandbox environment creation
