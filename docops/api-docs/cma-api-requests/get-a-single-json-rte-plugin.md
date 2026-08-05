---
title: "Get a single JSON RTE plugin"
description: /extensions/{json_rte_plugin_uid}
url: /get-a-single-json-rte-plugin
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.877Z
updated_at: 2024-02-20T12:31:00.220Z
---

# Get a single JSON RTE plugin

<p>The <span data-type='inlineCode'>Get a single JSON RTE plugin</span> request gets the comprehensive details of a specific JSON Rich Text Editor plugin.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/extensions/{json_rte_plugin_uid}`

**Method**: `GET`

## URL Parameters

- **json_rte_plugin_uid** (required)
  <p>Enter the UID of the JSON RTE plugin of which you want to retrieve details.</p>

## Query Parameters

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

