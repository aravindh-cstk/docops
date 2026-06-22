---
title: "Change OAuth status of an app"
description: PATCH /apps/{app_uid}/oauth/enable
url: developers/apis/apps-api/requests/change-oauth-status-of-an-app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Change OAuth status of an app


**Method:** `PATCH`  
**Endpoint:** `/apps/{app_uid}/oauth/enable`

The **Change OAuth status of an app** request is used to either enable or disable OAuth of an app.

**ACL:**

- Organization Admins
- Organization Owners
- Stack Owners
- Stack Admins

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
        "app_uid": {app_uid},
        "client_id":{client_id},
        "client_secret": {client_secret},
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
