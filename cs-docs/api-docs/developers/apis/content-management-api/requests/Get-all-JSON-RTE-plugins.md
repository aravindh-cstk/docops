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


**Method:** `GET`  
**Endpoint:** `/extensions?query={"type":"rte_plugin"}`

The Get all JSON RTE plugins request is used to get the information of all JSON Rich Text Editor plugins created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch unique ID. |

| query | {"type":"rte_plugin"} | Query to retrieve all  JSON RTE plugins. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
