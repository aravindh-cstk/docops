---
title: "Delete a branch"
description: /stacks/branches/{branch_uid}?force={boolean_value}
url: /delete-a-branch
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.646Z
updated_at: 2026-07-20T16:50:59.844Z
---

# Delete a branch

<p>The <span data-type="inlineCode">Delete a branch</span> request deletes an existing branch and all the content within it.</p>
<p>To confirm the deletion of a branch, you need to specify the <span data-type="inlineCode">force=true</span> query parameter.</p>
<p class="note"><strong>Note:</strong> You need to delete the child branches before deleting the parent branch. If a branch is the source for any other branch, irrespective of whether you pass a <span data-type="inlineCode">force</span> parameter or not, the API will not allow you to delete that branch.<br> You must only use the authtoken to delete a branch.</p>
<p class="add-resource"><strong>Additional Resource:</strong> Deleting a branch also deletes the <a href="/docs/headless-cms/about-branches/#work-with-aliases">alias</a> pointing towards it.</p>
<p>When executing the API call, in the “URL Parameters” section, provide the UID of your branch.</p>

**API Endpoint**: `/stacks/branches/{branch_uid}?force={boolean_value}`

**Method**: `DELETE`

## URL Parameters

- **branch_uid** (required)
  <p>Enter the unique ID of the branch that you want to delete. The UID of a branch is unique across a stack. Execute the <a href="#get-all-branches">Get all branches</a> call to retrieve the UID of a branch.</p>

## Query Parameters

- **force** (required)
  <p>Enter 'true' to force delete a branch.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

```json
{
    "notice": "Branch deleted successfully."
}
```

