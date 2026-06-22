---
title: "Update management token"
description: PUT /stacks/management_tokens/{token_uid}
url: developers/apis/content-management-api/requests/update-management-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Update management token


**Method:** `PUT`  
**Endpoint:** `/stacks/management_tokens/{token_uid}`

The Update management token request lets you update the details of a management token. You can change the name and description of the token; update the stack-level permissions assigned to the token; and change the expiry date of the token (if set).

In the Request Body, you need to pass the updated details of the management token in JSON format.

To specify the updated branch and alias scope for your management token, use the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| token_uid | blt3c33b3833884482 | Enter the UID of the management token that you want to update. |

**Request Body:**

```json
{
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "branches":[
                    "main",
                    "development"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch_alias",
                "branch_aliases":[
                    "deploy"
                ],
                "acl":{
                    "read":true
                }
            }
        ],
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true
    }
}
```

**Response (200):**

```json
{
    "notice":"Management Token updated successfully.",
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
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
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true,
        "uid":"blt4d23e29233884473",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:04:49.561Z",
        "updated_at":"2020-11-12T09:21:02.244Z"
    }
}
```
