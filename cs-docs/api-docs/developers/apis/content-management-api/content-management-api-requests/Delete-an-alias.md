---
title: "Delete an alias"
description: DELETE /stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}
url: developers/apis/content-management-api/requests/delete-an-alias
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-04-27
---

# Delete an alias

**DELETE** `/stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}`

The Delete an alias request deletes an existing alias.

To confirm the deletion of an alias, you need to specify the force=true query parameter.

When executing the API call, in the “URL Parameters” section, provide the UID of your alias.

**Note**: You must only use the authtoken to delete an alias.

## URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias that you want to delete. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

## Query Parameters

- **force** (required)
  Enter 'true' to force delete an alias.
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
    "notice": "Branch alias deleted successfully."
}
```

