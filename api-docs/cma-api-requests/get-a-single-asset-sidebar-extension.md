---
title: "Get a single asset sidebar extension"
description: /extensions/{asset_sidebar_extension_uid}
url: /get-a-single-asset-sidebar-extension
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.750Z
updated_at: 2025-07-18T09:19:24.074Z
---

# Get a single asset sidebar extension

<p>The <span data-type='inlineCode'>Get a single asset sidebar extension</span> request gets the comprehensive details of a specific asset sidebar extension.</p>

**API Endpoint**: `/extensions/{asset_sidebar_extension_uid}`

**Method**: `GET`

## URL Parameters

- **asset_sidebar_extension_uid** (required)
  <p>Enter the UID of the asset sidebar extension of which you want to retrieve details.</p>

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
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Response

```json
{
  "extension":{
    "uid":"blt39df56f2cfbf297f",
    "created_at":"2022-01-04T05:29:52.990Z",
    "updated_at":"2022-02-21T11:18:55.948Z",
    "created_by":"blt3cfef289de5d0c73",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":[
      
    ],
    "_version":12,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1000,
    "blur":true,
    "src":"URL of the asset sidebar extension source code"
  }
}
```

