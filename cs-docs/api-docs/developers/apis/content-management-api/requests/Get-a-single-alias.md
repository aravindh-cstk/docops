---
title: "Get a single alias"
description: GET /stacks/branch_aliases/{branch_alias_uid}
url: developers/apis/content-management-api/requests/get-a-single-alias
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get a single alias


**Method:** `GET`  
**Endpoint:** `/stacks/branch_aliases/{branch_alias_uid}`

The Get a single alias request returns information of a specific alias.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch_alias_uid | your_branch_alias_uid | Enter the unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all |

**Response (200):**

```json
{
    "branch_alias": {
        "uid": "dev",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-26T10:16:07.248Z",
        "updated_at": "2021-07-26T10:16:09.536Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```
