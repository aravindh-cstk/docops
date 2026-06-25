---
title: "Create stack"
description: POST /stacks
url: developers/apis/content-management-api/requests/create-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Create stack

**POST** `/stacks`

The Create stack call creates a new stack in your Contentstack account.

In the 'Body' section, provide the schema of the stack in JSON format.

**Note**: At any given point of time, an organization can create only one stack per minute.

## Headers

- **authtoken** (required)
  Default: `Your_Authtoken`
- **organization_uid** (required)
  Enter the uid of your organization.
  Default: `Your_Organization_uid`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
  "stack": {
    "name": "My New Stack",
    "description": "My new test stack",
    "master_locale": "en-us"
  }
}
```

## Sample Response

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

