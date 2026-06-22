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


**Method:** `DELETE`  
**Endpoint:** `/stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}`

The Delete an alias request deletes an existing alias.

To confirm the deletion of an alias, you need to specify the force=true query parameter.

When executing the API call, in the “URL Parameters” section, provide the UID of your alias.

**Note**: You must only use the authtoken to delete an alias.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| branch_alias_uid | your_branch_alias_uid | Enter the unique ID of the alias that you want to delete. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to  |

| force | true | Enter 'true' to force delete an alias. |

**Response (200):**

```json
{
    "notice": "Branch alias deleted successfully."
}
```
