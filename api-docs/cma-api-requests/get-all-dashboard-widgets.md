---
title: "Get All Dashboard Widgets"
description: /extensions?query={"type":"dashboard", "enable": true}
url: /get-all-dashboard-widgets
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.846Z
updated_at: 2024-04-25T06:09:31.222Z
---

# Get All Dashboard Widgets

<p>The <span data-type='inlineCode'>Get All Dashboard Widgets</span> request is used to get the information of all the enabled custom dashboard extension.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:read</span> scope.</p>

**API Endpoint**: `/extensions?query={"type":"dashboard", "enable": true}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Query to retrieve all dashboard widgets.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

