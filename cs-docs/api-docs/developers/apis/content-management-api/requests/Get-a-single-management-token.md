---
title: "Get a single management token"
description: GET /stacks/management_tokens/{token_uid}
url: developers/apis/content-management-api/requests/get-a-single-management-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-29
---

# Get a single management token


**Method:** `GET`  
**Endpoint:** `/stacks/management_tokens/{token_uid}`

The Get a single management token request returns the details of a specific management token generated in a stack and not the actual management token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| token_uid | blt4c10d48233884473 | Enter the UID of the management token of which you want to retrieve the details of. |

**Response (200):**

```json
{
    "token":{
        "name":"Test Token",
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true,
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy"
                ]
            }
        ],
        "uid":"bltda613c24d4e12c28",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:32:12.239Z",
        "updated_at":"2020-11-12T09:32:12.239Z",
        "description":"This is a sample management token."
    }
}
```
