---
title: "Delete asset sidebar extension"
description: /extensions/{asset_sidebar_extension_uid}
url: /delete-asset-sidebar-extension
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.890Z
updated_at: 2026-02-18T11:35:16.150Z
---

# Delete asset sidebar extension

<p>The <span data-type='inlineCode'>Delete asset sidebar extension</span> request allows you to delete a specific asset sidebar extension.</p>

**API Endpoint**: `/extensions/{asset_sidebar_extension_uid}`

**Method**: `DELETE`

## URL Parameters

- **asset_sidebar_extension_uid** (required)
  <p>Enter the UID of the asset sidebar extension that you want to delete.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Response

```json
{
    "notice": "Extension deleted successfully."
}
```

