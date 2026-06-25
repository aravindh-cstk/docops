---
title: "Get a single alias"
description: GET /stacks/branch_aliases/{branch_alias_uid}
url: developer-apis/content-management-api-requests/get-a-single-alias
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get a single alias

**GET** `/stacks/branch_aliases/{branch_alias_uid}`

The Get a single alias request returns information of a specific alias.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

## URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

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

