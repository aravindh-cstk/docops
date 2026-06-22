---
title: "Get All Dashboard Widgets"
description: GET /extensions?query={'type':'dashboard', 'enable': true}
url: developers/apis/content-management-api/requests/get-all-dashboard-widgets
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Get All Dashboard Widgets


**Method:** `GET`  
**Endpoint:** `/extensions?query={"type":"dashboard", "enable": true}`

The Get All Dashboard Widgets request is used to get the information of all the enabled custom dashboard extension.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| query | {"type":"dashboard", "enable": true} | Query to retrieve all dashboard widgets. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{  
   "extensions":[  
      {  
         "uid":"blt20a7158319e3e32d",
         "created_at":"2019-04-02T11:32:45.037Z",
         "updated_at":"2019-04-02T11:33:36.062Z",
         "created_by":"blt1e6dead9f06f1560",
         "updated_by":"blt1e6dead9f06f1560",
         "tags":[  
            "tag1",
            "tag2"
         ],
         "ACL":[  

         ],
         "_version":3,
         "title":"sample 9",
         "config":{  

         },
         "type":"dashboard",
         "enable":true,
         "default_width":"half",
         "srcdoc":"xyz"
      }
   ]
}
```
