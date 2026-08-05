---
title: "Delete asset"
description: /assets/{asset_uid}
url: /delete-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.745Z
updated_at: 2025-07-01T04:56:36.416Z
---

# Delete asset

<p>The <span class="code">Delete asset</span> call will delete an existing asset from the stack.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p>

**API Endpoint**: `/assets/{asset_uid}`

**Method**: `DELETE`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset that you want to delete.<br></p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "notice": "Asset deleted successfully."
}
```

