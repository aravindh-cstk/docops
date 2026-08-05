---
title: "Update management token"
description: /stacks/management_tokens/{token_uid}
url: /update-management-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.436Z
updated_at: 2023-01-05T14:09:10.436Z
---

# Update management token

<p>The <span data-type="inlineCode">Update management token</span> request lets you update the details of a management token. You can change the name and description of the token; update the stack-level permissions assigned to the token; and change the expiry date of the token (if set).</p>
<p>In the Request Body, you need to pass the updated details of the management token in JSON format.</p>
<p>To specify the updated branch and alias scope for your management token, use the following schema in the request body:</p>
<pre>{
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
}</pre>

**API Endpoint**: `/stacks/management_tokens/{token_uid}`

**Method**: `PUT`

## URL Parameters

- **token_uid** (required)
  <p>Enter the UID of the management token that you want to update.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

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

## Response

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

