---
title: "Get a single JSON RTE plugin"
description: GET /extensions/{json_rte_plugin_uid}
url: developers/apis/content-management-api/requests/get-a-single-json-rte-plugin
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Get a single JSON RTE plugin


**Method:** `GET`  
**Endpoint:** `/extensions/{json_rte_plugin_uid}`

The Get a single JSON RTE plugin request gets the comprehensive details of a specific JSON Rich Text Editor plugin.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch unique ID. |

| json_rte_plugin_uid | blt123ea123b123a123f | Enter the UID of the JSON RTE plugin of which you want to retrieve details. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
  "extension":{
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
  }
}
```
