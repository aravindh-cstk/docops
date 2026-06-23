---
title: "Delete a branch"
description: DELETE /stacks/branches/{branch_uid}?force={boolean_value}
url: developers/apis/content-management-api/requests/delete-a-branch
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-04-27
---

# Delete a branch

**DELETE** `/stacks/branches/{branch_uid}?force={boolean_value}`

The Delete a branch request deletes an existing branch and all the content within it.

To confirm the deletion of a branch, you need to specify the force=true query parameter.

**Note:** You need to delete the child branches before deleting the parent branch. If a branch is the source for any other branch, irrespective of whether you pass a force parameter or not, the API will not allow you to delete that branch.  
 You must only use the authtoken to delete a branch.

**Additional Resource:** Deleting a branch also deletes the [alias](../branches.md#work-with-aliases) pointing towards it.

When executing the API call, in the “URL Parameters” section, provide the UID of your branch.

## URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch that you want to delete. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

## Query Parameters

- **force** (required)
  Enter 'true' to force delete a branch.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "notice": "Branch deleted successfully."
}
```

