---
title: Bundle1 Test API Endpoint
description: Test API endpoint for Bundle 1 demo verifying Git to Sandbox sync with content type mapping and field synchronization across all environments.
url: /developer-hub/bundle1-test-api-endpoint
doc_type: api-request
audience:
  - developers
version: 1.0
last_updated: 2026-08-10
---

# Bundle1 Test API Endpoint

**GET** `/bundle1/test-endpoint`

This API endpoint test verifies the complete Git → Sandbox sync workflow for Bundle 1 testing (TC-042, TC-001, TC-006, TC-010, TC-011, TC-019).

## Overview

- Tests YAML frontmatter parsing with arrays and complex fields
- Verifies content type mapping (api-request → api_requests)
- Confirms field synchronization (title, url, body)
- Validates environment variable handling

## URL Parameters

- **test_id** (required)
  Unique identifier for the test request.
  Default: `bundle1_test_001`

- **include_details** (optional)
  Include detailed test information in response.
  Default: `true`

## Headers

- **api_key** (required)
  Stack API key for authentication.
  Default: `your_stack_api_key`

- **access_token** (optional)
  Environment-specific delivery token.
  Default: `your_access_token`

## Sample Request

```bash
curl -X GET "https://api.example.com/bundle1/test-endpoint?test_id=bundle1_test_001" \
  -H "api_key: your_stack_api_key" \
  -H "access_token: your_access_token"
```

## Sample Response

```json
{
  "status": "success",
  "data": {
    "test_id": "bundle1_test_001",
    "message": "Bundle 1 API test endpoint",
    "timestamp": "2026-08-10T10:00:00Z",
    "environment": "sandbox"
  }
}
```

## Error Handling

- **400 Bad Request**: Missing required parameters
- **401 Unauthorized**: Invalid API credentials
- **404 Not Found**: Endpoint or resource not found
- **500 Server Error**: Internal server error

## Use Cases

1. **Initial Creation Test**: Verify entry created in Sandbox (TC-001, TC-042)
2. **Content Type Verification**: Confirm api_requests content type (TC-006)
3. **Field Sync Test**: Validate title, URL, body fields (TC-010, TC-011)
4. **Update Test**: Modify and re-sync to test update logic (TC-003)
