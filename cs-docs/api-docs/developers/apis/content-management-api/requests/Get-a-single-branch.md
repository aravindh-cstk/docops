---
title: "Get a single branch"
description: GET /stacks/branches/{branch_uid}
url: developers/apis/content-management-api/requests/get-a-single-branch
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get a single branch

**GET** `/stacks/branches/{branch_uid}`

The Get a single branch request returns information of a specific branch.  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

## URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch of which you want to retrieve the details. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

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
    "branch": {
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
    }
}
```

