---
title: "Get all JSON RTE plugins"
description: /extensions?query={"type":"rte_plugin"}
url: /get-all-json-rte-plugins
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.991Z
updated_at: 2024-04-25T06:13:56.458Z
---

# Get all JSON RTE plugins

<p>The <span data-type='inlineCode'>Get all JSON RTE plugins</span> request is used to get the information of all JSON Rich Text Editor plugins created in a stack.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:read</span> scope.</p>

**API Endpoint**: `/extensions?query={"type":"rte_plugin"}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Query to retrieve all  JSON RTE plugins.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "extensions":[
    {
      "uid":"bltd6b2c2c3eeca106c",
      "created_at":"2021-10-26T11:38:01.817Z",
      "updated_at":"2021-10-26T11:38:01.817Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Marketplace",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt13415f84cf5ea6e2",
      "created_at":"2021-10-25T06:56:43.007Z",
      "updated_at":"2021-10-25T06:56:43.007Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Audience Plugin",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"bltd4408204421f820e",
      "created_at":"2021-10-25T06:56:18.311Z",
      "updated_at":"2021-10-25T06:56:18.311Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Social Embed",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt58a13863db325d6b",
      "created_at":"2021-10-25T06:55:55.368Z",
      "updated_at":"2021-10-25T06:55:55.368Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Word Count",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blta007a6d51b7d4b6a",
      "created_at":"2021-10-25T06:55:35.657Z",
      "updated_at":"2021-10-25T06:55:35.657Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Local",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    }
  ]
}
```

