---
title: "Update OAuth redirect URL and permission scopes of an app"
description: PUT /apps/{app_uid}/oauth
url: apps-api-requests/app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Update OAuth redirect URL and permission scopes of an app

**PUT** `/apps/{app_uid}/oauth`

## URL Parameters

- **app_uid** (required)
  The UID of the app to be updated.

## Headers

- **authtoken** (required)
  Enter your management token.
  Default: `your_authtoken`
- **organization_uid** (required)
  The UID of the organization.
  Default: `your_organization_uid`

## Sample Response

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

