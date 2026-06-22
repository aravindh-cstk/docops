---
title: "Upload Dashboard Widget"
description: POST /extensions
url: developers/apis/content-management-api/requests/upload-dashboard-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Upload Dashboard Widget


**Method:** `POST`  
**Endpoint:** `/extensions`

The Upload Dashboard Widget request uploads the widget to the Stack Dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload.
- extension[title]: Enter the title of the widget that you want to upload.
- extension[tags]: Enter the tags that you want to assign to the widget.
- extension[type]: Enter type as ‘dashboard’, since this is a custom widget extension.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of your stack. |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | multipart/form-data |  |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
