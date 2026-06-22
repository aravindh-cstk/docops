---
title: "Update an asset sidebar extension"
description: PUT /extensions/{asset_sidebar_extension_uid}
url: developers/apis/content-management-api/requests/update-an-asset-sidebar-extension
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Update an asset sidebar extension


**Method:** `PUT`  
**Endpoint:** `/extensions/{asset_sidebar_extension_uid}`

The Update an asset sidebar extension request allows you to update the details of an existing asset sidebar extension.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link (or the updated external source code), width, and blur effect.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch or alias unique ID. |

| asset_sidebar_extension_uid | blt123ea123b123a123f | Enter the UID of the asset sidebar extension of which you want to update details. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
