---
title: "Get all management tokens"
description: GET /stacks/management_tokens
url: developers/apis/content-management-api/requests/get-all-management-tokens
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-25
---

# Get all management tokens


**Method:** `GET`  
**Endpoint:** `/stacks/management_tokens`

The Get all management tokens request returns the details of all the management tokens generated in a stack and not the actual management tokens.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

**Response (200):**

```json
{
    "tokens":[
        {
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
            "uid":"bltds822f23g4d28hg2",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:32:12.239Z",
            "updated_at":"2020-11-12T09:32:12.239Z",
            "description":"This is a sample management token."
        },
        {
            "name":"Sample Token",
            "expires_on":"2020-11-27",
            "is_email_notification_enabled":true,
            "scope":[
                {
                    "module":"$all",
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
            "uid":"bltcde433gf0967fdac",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:24:57.191Z",
            "updated_at":"2020-11-12T09:24:57.191Z",
            "description":"This is a sample token."
        }
    ]
}
```
