---
title: "Assign an alias"
description: PUT /stacks/branch_aliases/{branch_alias_uid}
url: developers/apis/content-management-api/requests/assign-an-alias
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-04-27
---

# Assign an alias


**Method:** `PUT`  
**Endpoint:** `/stacks/branch_aliases/{branch_alias_uid}`

The Assign an alias request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack.

**Note:** Only stack owners, admins, and developers can assign a new alias to a branch. You must only use the authtoken to assign an alias.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch_alias_uid | your_branch_alias_uid | Enter the unique ID of the alias you want to assign or update. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) cal |

**Request Body:**

```json
{
    "branch_alias": {
        "target_branch": "test"
    }
}
```

**Response (200):**

```json
{
    "notice": "Branch alias assigned successfully.",
    "branch_alias": {
        "uid": "test",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-27T12:45:39.690Z",
        "updated_at": "2021-07-27T12:45:40.241Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```
