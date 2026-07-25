---
title: "Get audit log item"
description: /audit-logs/{log_item_uid}
url: /get-audit-log-item
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.859Z
updated_at: 2024-02-29T11:18:52.991Z
---

# Get audit log item

<p>The <span data-type='inlineCode'>Get audit log item</span>&nbsp;request is used to retrieve a specific item from the audit log of a stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.audit-logs:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p class="note"><strong>Note:</strong> You can retrieve audit log information only for 30 days prior to the current day (for an organization).</p>

**API Endpoint**: `/audit-logs/{log_item_uid}`

**Method**: `GET`

## URL Parameters

- **log_item_uid** (required)
  <p>Enter the UID of a specific log item you want to retrieve the details of.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

