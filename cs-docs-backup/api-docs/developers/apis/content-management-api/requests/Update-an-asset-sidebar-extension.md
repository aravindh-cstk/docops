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

**PUT** `/extensions/{asset_sidebar_extension_uid}`

The Update an asset sidebar extension request allows you to update the details of an existing asset sidebar extension.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link (or the updated external source code), width, and blur effect.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

## URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension of which you want to update details.
  Default: `blt123ea123b123a123f`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

