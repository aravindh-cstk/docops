---
title: "Update an asset sidebar extension"
description: /extensions/{asset_sidebar_extension_uid}
url: /update-an-asset-sidebar-extension
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:03.707Z
updated_at: 2025-07-18T09:24:51.214Z
---

# Update an asset sidebar extension

<p>The <span data-type='inlineCode'>Update an asset sidebar extension</span> request allows you to update the details of an existing asset sidebar extension.</p>
<p>In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link (or the updated external source code), width, and blur effect.</p>
<p>The popup panel width should be within the range of <strong>335</strong> to <strong>1024</strong> pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.</p>

**API Endpoint**: `/extensions/{asset_sidebar_extension_uid}`

**Method**: `PUT`

## URL Parameters

- **asset_sidebar_extension_uid** (required)
  <p>Enter the UID of the asset sidebar extension of which you want to update details.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Request Body

```json
{
    "extension":{
    "type": "asset_sidebar_widget",
    "title": "Updated Title for Asset Sidebar Extension",
    "config": {},
    "src": "Updated URL of the asset sidebar extension source code"
  }
}
```

## Response

```json
{
  "notice":"Extension updated successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:56:58.150Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":2,
    "title":"Updated Title for Asset Sidebar Extension",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"Updated URL of the asset sidebar extension source code"
  }
}
```

