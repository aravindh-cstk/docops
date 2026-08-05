---
title: "Create an asset sidebar extension with source URL"
description: /extensions
url: /create-an-asset-sidebar-extension-with-source-url
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.933Z
updated_at: 2025-07-18T09:24:00.204Z
---

# Create an asset sidebar extension with source URL

<p>The <span data-type='inlineCode'>Create an asset sidebar extension with source URL</span> request allows you to add an externally hosted asset sidebar extension to your stack.</p>
<p>In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link, width, and blur effect. Enter the extension type as asset_sidebar_widget, since this is an asset sidebar extension.</p>
<p>The popup panel width should be within the range of <strong>335</strong> to <strong>1024</strong> pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.</p>
<p class="note"><strong>Note:</strong> You can add a maximum of <strong>50</strong> extensions (including custom fields , custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

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
    "extension": {
        "type": "asset_sidebar_widget",
        "title": "Image Preset Builder",
        "config": {},
        "src": "URL of the asset sidebar extension source code",
        "width":1024,
        "blur":false
    }
}
```

## Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:48:42.939Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"URL of the asset sidebar extension source code"
  }
}
```

