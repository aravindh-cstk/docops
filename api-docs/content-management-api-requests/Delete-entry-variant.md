---
title: "Delete entry variant"
description: DELETE /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: developer-apis/content-management-api-requests/delete-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-25
---

# Delete entry variant

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Delete entry variant request lets you delete an entry variant.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

## Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

## Sample Response

```json
{
    "notice": "Entry variant deleted successfully."
}
```

