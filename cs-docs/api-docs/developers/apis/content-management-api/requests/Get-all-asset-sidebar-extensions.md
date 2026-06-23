---
title: "Get all asset sidebar extensions"
description: GET /extensions?query={'type':'asset_sidebar_widget'}
url: developers/apis/content-management-api/requests/get-all-asset-sidebar-extensions
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Get all asset sidebar extensions

**GET** `/extensions?query={"type":"asset_sidebar_widget"}`

The Get all asset sidebar extensions request is used to get the information of all the asset sidebar extensions created in a stack.

## Query Parameters

- **query** (required)
  Pass the query to retrieve all  asset sidebar extensions.
  Default: `{"type":"asset_sidebar_widget"}`
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
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Response

```json
{
  "extensions":[
    {
      "uid":"bltdf58aac9c3589644",
      "created_at":"2022-02-21T11:32:53.240Z",
      "updated_at":"2022-02-21T11:32:53.240Z",
      "created_by":"blt8588eda026739d77",
      "updated_by":"blt8588eda026739d77",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Demo2",
      "config":{
        
      },
      "type":"asset_sidebar_widget",
      "width":700,
      "blur":false,
      "src":"URL of the asset sidebar extension source code"
    },
    {
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
  ]
}
```

