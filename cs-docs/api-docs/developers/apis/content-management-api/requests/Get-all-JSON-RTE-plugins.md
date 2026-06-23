---
title: "Get all JSON RTE plugins"
description: GET /extensions?query={'type':'rte_plugin'}
url: developers/apis/content-management-api/requests/get-all-json-rte-plugins
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Get all JSON RTE plugins

**GET** `/extensions?query={"type":"rte_plugin"}`

The Get all JSON RTE plugins request is used to get the information of all JSON Rich Text Editor plugins created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

## Query Parameters

- **query** (required)
  Query to retrieve all  JSON RTE plugins.
  Default: `{"type":"rte_plugin"}`
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
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

