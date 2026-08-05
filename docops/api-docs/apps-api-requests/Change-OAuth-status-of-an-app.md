---
title: "Change OAuth status of an app"
description: /apps/{app_uid}/oauth/enable
url: /change-oauth-status-of-an-app
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.797Z
updated_at: 2023-01-05T14:09:01.797Z
---

# Change OAuth status of an app

<p>The <strong>Change OAuth status of an app</strong> request is used to either enable or disable OAuth of an app.</p>
<p><strong>ACL: </strong></p><ul><li>Organization Admins</li><li>Organization Owners</li><li>Stack Owners</li><li>Stack Admins</li></ul>

**API Endpoint**: `/apps/{app_uid}/oauth/enable`

**Method**: `PATCH`

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

