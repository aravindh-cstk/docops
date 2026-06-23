---
title: "Get all branches"
description: GET /stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-all-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get all branches

**GET** `/stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all branches request returns comprehensive information of all the branches available in a particular stack in your account.

You can add queries to extend the functionality of this API call. Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (Refer [Queries](/docs/developers/apis/content-delivery-api#queries))  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

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
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
    "branches": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-16T18:15:51.248Z",
            "updated_at": "2021-06-16T18:15:51.248Z",
            "alias": [
                {
                    "uid": "dev"
                }
            ]
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-10T18:15:40.521Z",
            "updated_at": "2021-06-10T18:15:40.521Z",
            "alias": []
        }
    ]
}
```

