---
title: "Get a single management token"
description: /stacks/management_tokens/{token_uid}
url: /get-a-single-management-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.127Z
updated_at: 2023-05-29T06:09:09.912Z
---

# Get a single management token

<p>The <span data-type='inlineCode'>Get a single management token</span> request returns the details of a specific management token generated in a stack and not the actual management token.</p>

**API Endpoint**: `/stacks/management_tokens/{token_uid}`

**Method**: `GET`

## URL Parameters

- **token_uid** (required)
  <p></p>
<p>Enter the UID of the management token of which you want to retrieve the details of.</p>
<p></p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

