---
title: "Upload Dashboard Widget"
description: /extensions
url: /upload-dashboard-widget
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.842Z
updated_at: 2024-04-25T06:10:19.570Z
---

# Upload Dashboard Widget

<p>The <span data-type='inlineCode'>Upload Dashboard Widget</span> request uploads the widget to the Stack Dashboard.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span> scope.</p>
<p>In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:</p>
<ul>
  <li><strong>extension[upload]</strong>: Select the HTML file of the widget that you want to upload.</li>
  <li><strong>extension[title]</strong>: Enter the title of the widget that you want to upload.</li>
  <li><strong>extension[tags]</strong>: Enter the tags that you want to assign to the widget.</li>
  <li><strong>extension[type]</strong>: Enter type as ‘dashboard’, since this is a custom widget extension.</li>
</ul>

**API Endpoint**: `/extensions`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{  
   "notice":"Extension created successfully.",
   "extension":{  
      "uid":"blt4533c57b647be007",
      "created_at":"2019-04-03T05:33:24.998Z",
      "updated_at":"2019-04-03T05:33:24.998Z",
      "created_by":"blt1e6dead9f06f1560",
      "updated_by":"blt1e6dead9f06f1560",
      "tags":[  
         "tag1",
         "tag2"
      ],
      "ACL":{  

      },
      "_version":1,
      "title":"unique",
      "config":{  

      },
      "type":"dashboard",
      "enable":false,
      "default_width":"half",
      "srcdoc":"Source doc of the extension"
   }
}
```

