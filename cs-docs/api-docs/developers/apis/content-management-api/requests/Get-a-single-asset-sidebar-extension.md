---
title: "Get a single asset sidebar extension"
description: GET /extensions/{asset_sidebar_extension_uid}
url: developers/apis/content-management-api/requests/get-a-single-asset-sidebar-extension
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Get a single asset sidebar extension


**Method:** `GET`  
**Endpoint:** `/extensions/{asset_sidebar_extension_uid}`

The Get a single asset sidebar extension request gets the comprehensive details of a specific asset sidebar extension.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch or alias unique ID. |

| asset_sidebar_extension_uid | blt123ea123b123a123f | Enter the UID of the asset sidebar extension of which you want to retrieve details. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
