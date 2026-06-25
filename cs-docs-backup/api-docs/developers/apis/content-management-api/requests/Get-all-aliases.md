---
title: "Get all aliases"
description: GET /stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-all-aliases
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get all aliases

**GET** `/stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all aliases request returns comprehensive information of all the aliases available in a particular stack in your account.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

## Query Parameters

- **limit** (optional)
  Enter the maximum number of branches to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of branches available in a stack.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
    "branch_aliases": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "release"
        },
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "dev"
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:04:20.752Z",
            "updated_at": "2021-07-26T10:04:20.752Z",
            "deleted_at": false,
            "alias": "sample_alias"
        }
    ]
}
```

