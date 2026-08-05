---
title: "Delete an alias"
description: /stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}
url: /delete-an-alias
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.722Z
updated_at: 2023-04-27T09:56:59.874Z
---

# Delete an alias

<p>The <span data-type="inlineCode">Delete an alias</span> request deletes an existing alias.</p>
<p>To confirm the deletion of an alias, you need to specify the <span data-type="inlineCode">force=true</span> query parameter.</p>
<p>When executing the API call, in the “URL Parameters” section, provide the UID of your alias.</p>
<p class="note"><strong>Note</strong>: You must only use the authtoken to delete an alias.</p>

**API Endpoint**: `/stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}`

**Method**: `DELETE`

## URL Parameters

- **branch_alias_uid** (required)
  <p>Enter the unique ID of the alias that you want to delete. The UID of an alias is unique across a stack. Execute the <a href="#get-all-aliases">Get all aliases</a> call to retrieve the UID of an alias.<br></p>

## Query Parameters

- **force** (required)
  <p>Enter 'true' to force delete an alias.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

```json
{
    "notice": "Branch alias deleted successfully."
}
```

