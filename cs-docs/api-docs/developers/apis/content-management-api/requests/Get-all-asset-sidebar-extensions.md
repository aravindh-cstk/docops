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


**Method:** `GET`  
**Endpoint:** `/extensions?query={"type":"asset_sidebar_widget"}`

The Get all asset sidebar extensions request is used to get the information of all the asset sidebar extensions created in a stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch or alias unique ID. |

| query | {"type":"asset_sidebar_widget"} | Pass the query to retrieve all  asset sidebar extensions. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
