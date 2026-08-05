---
title: "Get information on RTE assets"
description: /assets/rt
url: /get-information-on-rte-assets
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.681Z
updated_at: 2026-07-20T16:51:21.825Z
---

# Get information on RTE assets

<p>The <span class="code">Get information on RTE assets</span>call returns comprehensive information on all assets uploaded through the <a href="/docs/headless-cms/rich-text-editor">Rich Text Editor field</a>.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, please include the </span><span data-type='inlineCode'>cm.assets.rt:read</span><span style="color: rgb(0, 0, 255);font-size: 10.5pt;"><span data-type='inlineCode'> </span></span><span style="font-size: 10.5pt;">scope.</span></p>

**API Endpoint**: `/assets/rt`

**Method**: `GET`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
[{
    "image": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "thumb": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "title": "filename"
}]
```

