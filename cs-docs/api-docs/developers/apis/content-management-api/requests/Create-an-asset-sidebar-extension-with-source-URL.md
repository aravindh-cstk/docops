---
title: "Create an asset sidebar extension with source URL"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-an-asset-sidebar-extension-with-source-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Create an asset sidebar extension with source URL


**Method:** `POST`  
**Endpoint:** `/extensions`

The Create an asset sidebar extension with source URL request allows you to add an externally hosted asset sidebar extension to your stack.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link, width, and blur effect. Enter the extension type as asset_sidebar_widget, since this is an asset sidebar extension.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

**Note:** You can add a maximum of **50** extensions (including custom fields , custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch or alias unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (201):**

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
