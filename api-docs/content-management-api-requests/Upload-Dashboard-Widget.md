---
title: "Upload Dashboard Widget"
description: POST /extensions
url: developer-apis/content-management-api-requests/upload-dashboard-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Upload Dashboard Widget

**POST** `/extensions`

The Upload Dashboard Widget request uploads the widget to the Stack Dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload.
- extension[title]: Enter the title of the widget that you want to upload.
- extension[tags]: Enter the tags that you want to assign to the widget.
- extension[type]: Enter type as ‘dashboard’, since this is a custom widget extension.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

