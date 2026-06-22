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


**Method:** `GET`  
**Endpoint:** `/stacks/branches/{branch_uid}`

The Get a single branch request returns information of a specific branch.  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch_uid | your_branch_uid | Enter the unique ID of the branch of which you want to retrieve the details. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-a |

**Response (200):**

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
