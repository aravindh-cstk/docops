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


**Method:** `DELETE`  
**Endpoint:** `/stacks/branches/{branch_uid}?force={boolean_value}`

The Delete a branch request deletes an existing branch and all the content within it.

To confirm the deletion of a branch, you need to specify the force=true query parameter.

**Note:** You need to delete the child branches before deleting the parent branch. If a branch is the source for any other branch, irrespective of whether you pass a force parameter or not, the API will not allow you to delete that branch.  
 You must only use the authtoken to delete a branch.

**Additional Resource:** Deleting a branch also deletes the [alias](/docs/developers/branches/#work-with-aliases) pointing towards it.

When executing the API call, in the “URL Parameters” section, provide the UID of your branch.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| branch_uid | your_branch_uid | Enter the unique ID of the branch that you want to delete. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call  |

| force | true | Enter 'true' to force delete a branch. |

**Response (200):**

```json
{
    "notice": "Branch deleted successfully."
}
```
