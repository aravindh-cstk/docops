---
title: "Create stack"
description: /stacks
url: /create-stack
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:07.492Z
updated_at: 2023-01-05T14:09:07.492Z
---

# Create stack

<p>The <span data-type="inlineCode">Create stack</span> call creates a new stack in your Contentstack account.</p>
<p>In the 'Body' section, provide the schema of the stack in JSON format.</p>
<p class="note"><strong>Note</strong>: At any given point of time, an organization can create only one stack per minute.</p>

**API Endpoint**: `/stacks`

**Method**: `POST`

## Headers

- **authtoken** (required)
- **organization_uid** (required)
  <p>Enter the uid of your organization.</p>
- **Content-Type** (required)

## Request Body

```json
{
  "stack": {
    "name": "My New Stack",
    "description": "My new test stack",
    "master_locale": "en-us"
  }
}
```

## Response

```json
{
  "notice": "Stack created successfully.",
  "stack": {
    "created_at": "2014-05-27T09:46:28.488Z",
    "updated_at": "2014-10-21T12:20:00.453Z",
    "uid": "blt123a123b123c",
    "name": "My First Stack",
    "description": "My new test stack",
     "org_uid":"abcdefgh1245",
    "api_key": "abcdefg1234567890",
    "master_locale": "en-us",
    "is_asset_download_public": true,
    "owner_uid": "abcdefg1234567890xyz",
    "user_uids": "[]",
    "collaborators": [
      {
        "uid": "abcd47a42c081522df4fc5ac57",
        "created_at": "2014-05-27T09:46:28.488Z",
        "updated_at": "2014-05-27T09:46:28.488Z",
        "email": "developer@example.com",
        "plan_id": [
          "cms_plan"
        ],
        "org_uid": [
          "pqr63a5e26545f23e63"
        ],
        "roles": [
          {}
        ]
      }
    ],
    "SYS_ACL": {
      "roles": [
        {
          "uid": "abcdefgpqr1234567890xyz",
          "sub_acl": {},
          "invite": true
        }
      ],
      "others": {
        "sub_acl": {
          "delete": false,
          "update": false,
          "read": false,
          "create": false
        },
        "invite": false
      }
    },
    "stack_variables": {
      "description": "My test stack"
    }
  }
}
```

