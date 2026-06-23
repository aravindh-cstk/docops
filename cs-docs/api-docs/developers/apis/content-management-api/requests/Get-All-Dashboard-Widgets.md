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

**GET** `/extensions?query={"type":"dashboard", "enable": true}`

The Get All Dashboard Widgets request is used to get the information of all the enabled custom dashboard extension.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

## Query Parameters

- **query** (required)
  Query to retrieve all dashboard widgets.
  Default: `{"type":"dashboard", "enable": true}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

