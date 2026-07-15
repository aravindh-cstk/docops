---
title: "Get a single management token"
description: GET /stacks/management_tokens/{token_uid}
url: developer-apis/content-management-api-requests/get-a-single-management-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-29
---

# Get a single management token

**GET** `/stacks/management_tokens/{token_uid}`

The Get a single management token request returns the details of a specific management token generated in a stack and not the actual management token.

## URL Parameters

- **token_uid** (required)
  Enter the UID of the management token of which you want to retrieve the details of.
  Default: `blt4c10d48233884473`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

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

