---
title: "Delete entry variant"
description: /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: /delete-entry-variant
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:21:01.916Z
updated_at: 2024-09-25T07:20:32.200Z
---

# Delete entry variant

<p>The <span class="code">Delete entry variant</span> request lets you delete an entry variant.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

**Method**: `DELETE`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of your content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of your entry.</p>
- **variant_uid** (required)
  <p>Enter the unique ID of your variant.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language for the entry you want to update.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

```json
{
    "notice": "Entry variant deleted successfully."
}
```

