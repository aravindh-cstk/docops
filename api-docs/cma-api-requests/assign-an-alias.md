---
title: "Assign an alias"
description: /stacks/branch_aliases/{branch_alias_uid}
url: /assign-an-alias
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.754Z
updated_at: 2023-04-27T09:57:19.568Z
---

# Assign an alias

<p>The <span data-type="inlineCode">Assign an alias</span> request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack.</p>
<p class="note"><strong>Note:</strong> Only stack owners, admins, and developers can assign a new alias to a branch. You must only use the authtoken to assign an alias.<br></p>

**API Endpoint**: `/stacks/branch_aliases/{branch_alias_uid}`

**Method**: `PUT`

## URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias you want to assign or update. The UID of an alias is unique across a stack. Execute the <a href="#get-all-aliases">Get all aliases</a> call to retrieve the UID of an alias.<br>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>

## Request Body

```json
{
    "branch_alias": {
        "target_branch": "test"
    }
}
```

## Response

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

