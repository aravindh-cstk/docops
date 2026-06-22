---
title: "Create a branch"
description: POST /stacks/branches
url: developers/apis/content-management-api/requests/create-a-branch
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-08
---

# Create a branch


**Method:** `POST`  
**Endpoint:** `/stacks/branches`

The Create a branch request creates a new branch in a particular stack of your organization.

**Note:** Only stack owners, admins, and developers can create a new branch. You must only use the authtoken to create a branch.

In the “Body” section, you need to provide a custom UID for the new branch and also the UID of the source branch from which it will inherit data.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your auth token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

**Request Body:**

```json
{
    "branch": {
        "uid": "release",
        "source": "main"
    }
}
```

**Response (201):**

```json
{
    "notice": "Branch created successfully.",
    "branch": {
        "uid": "release",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-06-17T06:42:26.136Z",
        "updated_at": "2021-06-17T06:42:26.136Z",
        "alias": []
    }
}
```
