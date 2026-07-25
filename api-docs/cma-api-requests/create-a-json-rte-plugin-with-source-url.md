---
title: "Create a JSON RTE plugin with source URL"
description: /extensions
url: /create-a-json-rte-plugin-with-source-url
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.170Z
updated_at: 2024-04-25T06:14:53.036Z
---

# Create a JSON RTE plugin with source URL

<p>The <span data-type='inlineCode'>Create a JSON RTE plugin with source URL</span> request allows you to add an externally hosted JSON RTE plugin to your stack.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span>scope.</p>
<p>In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link, set if the field is to take multiple values or not, configuration details, and the extension type. Enter the extension type as ‘rte_plugin’, since this is a JSON RTE plugin extension.</p>
<p class="note"><strong>Note:</strong> You can add a maximum of <strong>50</strong> extensions (including custom fields , custom widgets and JSON RTE plugins) in a stack.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

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

## Request Body

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

## Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blt23982036789e969e",
    "created_at":"2021-12-06T04:01:10.626Z",
    "updated_at":"2021-12-06T04:01:10.626Z",
    "created_by":"blt3cf27864e6b61df3",
    "updated_by":"blt3cf27864e6b61df3",
    "tags":[
      "tag1",
      "tag2"
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Sample JSON RTE Plugin",
    "config":{
      
    },
    "type":"rte_plugin",
    "src":"URL of the JSON RTE plugin source code"
  }
}
```

