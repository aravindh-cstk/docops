---
title: "Get audit log item"
description: GET /audit-logs/{log_item_uid}
url: developers/apis/content-management-api/requests/get-audit-log-item
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Get audit log item

**GET** `/audit-logs/{log_item_uid}`

The Get audit log item request is used to retrieve a specific item from the audit log of a stack.  
To configure the permissions for your application via OAuth, please include the cm.audit-logs:read scope.

**Note:** You can retrieve audit log information only for 30 days prior to the current day (for an organization).

## URL Parameters

- **log_item_uid** (required)
  Enter the UID of a specific log item you want to retrieve the details of.
  Default: `blt1ffebe11111e111d11c1`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "log":{
    "_id":"blt3502b7d1528607d300d0",
    "uid":"blt3502b7d1528607d300d0",
    "stack":"blt8d542b122115b153",
    "created_at":"2021-08-19T12:37:44.429Z",
    "created_by":"blt7b815b05d2fe5dd8",
    "module":"environment",
    "event_type":"create",
    "request_id":"86352",
    "metadata":{
      "title":"production",
      "uid":"blt2c60160a046ce26d"
    },
    "remote_addr":"202.179.94.0",
    "request":{
      "r":"0.5090218519397551",
      "environment":{
        "deploy_content":false,
        "servers":[
          
        ],
        "urls":[
          {
            "url":"",
            "locale":"en-us"
          }
        ],
        "name":"production",
        "color":"#01977c"
      }
    },
    "response":{
      "notice":"Environment created successfully.",
      "environment":{
        "deploy_content":false,
        "servers":[
          
        ],
        "urls":[
          {
            "url":"",
            "locale":"en-us"
          }
        ],
        "name":"production",
        "uid":"blt2c60160a046ce26d",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:37:44.414Z",
        "updated_at":"2021-08-19T12:37:44.414Z",
        "ACL":{
          
        },
        "_version":1,
        "isEnvironment":true
      }
    }
  }
}
```

