---
title: "Test V3 Sandbox Sync - Get User Information"
url: /test-v3-sandbox-sync
product: Contentstack
doc_type: api-request
audience: developers
version: "1.0"
---

# Test V3 Sandbox Sync - Get User Information

This test validates that the new V3-compatible management token works correctly with the sandbox-first workflow.

## Endpoint

`GET /users/{user_id}`

## Description

Retrieves information about a specific user from the Contentstack API.

## Request Parameters

- **user_id** (required, path parameter)
  - Type: string
  - Description: The unique identifier of the user to retrieve
  - Example: `user_123456`

## Request Headers

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

## Request Example

```bash
curl -X GET https://api.contentstack.io/v3/users/user_123456 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Response Example

```json
{
  "user": {
    "uid": "user_123456",
    "email": "user@example.com",
    "name": "John Doe",
    "first_name": "John",
    "last_name": "Doe",
    "company": "Acme Corp",
    "created_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-08-04T15:45:00Z"
  }
}
```

## Success Criteria

✅ V3 Management Token successfully authenticates with Sandbox CMS
✅ File syncs to Sandbox within 1-2 minutes of main merge
✅ Content appears as DRAFT entry
✅ All fields preserved correctly

## Testing Notes

- This file was created to test the new V3-compatible management token
- Verifies that the sandbox-first workflow is functioning correctly
- Confirms that Git → Sandbox sync works end-to-end

---

_Test created on 2026-08-04 for V3 token validation_
