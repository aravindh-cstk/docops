---
title: "Update OAuth redirect URL and permission scopes of an app"
description: PUT /apps/{app_uid}/oauth
url: developers/apis/apps-api/requests/update-oauth-redirect-url-and-permission-scopes-of-an-app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Update OAuth redirect URL and permission scopes of an app


**Method:** `PUT`  
**Endpoint:** `/apps/{app_uid}/oauth`

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your management token. |

| organization_uid | your_organization_uid | The UID of the organization. |

| app_uid |  | The UID of the app to be updated. |

**Response (200):**

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
