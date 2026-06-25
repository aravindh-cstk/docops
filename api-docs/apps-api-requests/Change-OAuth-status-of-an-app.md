---
title: "Change OAuth status of an app"
description: PATCH /apps/{app_uid}/oauth/enable
url: apps-api-requests/app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Change OAuth status of an app

**PATCH** `/apps/{app_uid}/oauth/enable`

The **Change OAuth status of an app** request is used to either enable or disable OAuth of an app.

**ACL:**

- Organization Admins
- Organization Owners
- Stack Owners
- Stack Admins

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

