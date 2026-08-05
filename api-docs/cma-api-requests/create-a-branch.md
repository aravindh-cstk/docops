---
title: "Create a branch"
description: /stacks/branches
url: /create-a-branch
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.699Z
updated_at: 2024-02-08T08:57:44.832Z
---

# Create a branch

<p>The <span data-type='inlineCode'>Create a branch</span> request creates a new branch in a particular stack of your organization.</p><p class="note"><strong>Note:</strong> Only stack owners, admins, and developers can create a new branch. You must only use the authtoken to create a branch.</p><p>In the “Body” section, you need to provide a custom UID for the new branch and also the UID of the source branch from which it will inherit data.</p>

**API Endpoint**: `/stacks/branches`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your auth token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>

## Request Body

```json
{
    "branch": {
        "uid": "release",
        "source": "main"
    }
}
```

## Response

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

