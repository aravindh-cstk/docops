---
title: "Delete entry variant"
description: DELETE /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: developers/apis/content-management-api/requests/delete-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-25
---

# Delete entry variant


**Method:** `DELETE`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Delete entry variant request lets you delete an entry variant.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| content_type_uid | your_content_type_uid | Enter the unique ID of your content type. |

| entry_uid | your_entry_uid | Enter the unique ID of your entry. |

| variant_uid | your_variant_uid | Enter the unique ID of your variant. |

| locale | en-us | Enter the code of the language for the entry you want to update. |

**Response (200):**

```json
{
    "notice": "Entry variant deleted successfully."
}
```
