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


**Method:** `GET`  
**Endpoint:** `/stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all aliases request returns comprehensive information of all the aliases available in a particular stack in your account.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| limit | 2 | Enter the maximum number of branches to be returned. |

| skip | 2 | Enter the number of branches to be skipped from the response body. |

| include_count | false | Set this parameter to 'true' to include in response the total count of branches available in a stack. |

**Response (200):**

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
