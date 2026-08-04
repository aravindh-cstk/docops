---
title: "Test V3 Credentials - Corrected API Key Validation"
url: /test-v3-credentials-validation
product: Contentstack
doc_type: api-request
audience: developers
version: "1.0"
---

# Test V3 Credentials - Corrected API Key Validation

This test validates that the corrected V3-compatible API key and management token now work correctly with the sandbox-first workflow.

## Endpoint

`GET /v3/stack`

## Description

Retrieves stack information to validate that the V3 management token is correctly authenticated.

## Request Example

```bash
curl -X GET https://api.contentstack.io/v3/stacks \
  -H "Authorization: Bearer YOUR_MANAGEMENT_TOKEN" \
  -H "api_key: YOUR_API_KEY"
```

## Response

```json
{
  "stack": {
    "uid": "bltf92796d1cefd3d4",
    "name": "API Docs Sandbox",
    "api_key": "bltf92796d1cefd3d4",
    "version": "v3",
    "created_at": "2025-01-15T10:30:00Z",
    "updated_at": "2026-08-04T15:45:00Z"
  }
}
```

## Success Criteria

✅ V3 API key is correctly formatted and recognized
✅ Management token successfully authenticates
✅ File syncs to Sandbox within 1-2 minutes of main merge
✅ Content appears as DRAFT entry
✅ All fields preserved correctly

## Testing Notes

- This file was created to verify the corrected V3 API credentials
- User confirmed they updated GitHub secrets with new values
- This is the final validation test before proceeding with full workflow testing

---

_Test created on 2026-08-03 for V3 credential correction validation_
