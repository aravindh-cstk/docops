---
title: "Get all asset sidebar extensions"
description: /extensions?query={"type":"asset_sidebar_widget"}
url: /get-all-asset-sidebar-extensions
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.765Z
updated_at: 2025-07-18T09:22:56.917Z
---

# Get all asset sidebar extensions

<p>The <span data-type='inlineCode'>Get all asset sidebar extensions</span> request is used to get the information of all the asset sidebar extensions created in a stack.</p>

**API Endpoint**: `/extensions?query={"type":"asset_sidebar_widget"}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Pass the query to retrieve all  asset sidebar extensions.</p>
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

