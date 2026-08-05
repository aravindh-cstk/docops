---
title: "Update OAuth redirect URL and permission scopes of an app"
description: /apps/{app_uid}/oauth
url: /update-oauth-redirect-url-and-permission-scopes-of-an-app
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.743Z
updated_at: 2023-01-05T14:09:02.743Z
---

# Update OAuth redirect URL and permission scopes of an app

**API Endpoint**: `/apps/{app_uid}/oauth`

**Method**: `PUT`

## URL Parameters

- **app_uid** (required)
  <p>The UID of the app to be updated.</p>

## Headers

- **authtoken** (required)
  <p>Enter your management token.</p>
- **organization_uid** (required)
  <p>The UID of the organization.</p>

## Response

```json
{
    "data": {
    "app_uid": "sss"
    "redirect_uri": "http://localhost:5000/callback",
    "app_token_config": {
        "enabled": true,
        "scopes": [
            "user:read",
            "user:write",
            "user.profile:read"
        ]
    },
    "user_token_config": {
        "enabled": true,
        "scopes": [
            "user.profile:read"
        ]
    }
  }
}
```

