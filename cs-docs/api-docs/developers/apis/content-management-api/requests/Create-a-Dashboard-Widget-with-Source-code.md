---
title: "Create a Dashboard Widget with Source code"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-a-dashboard-widget-with-source-code
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-29
---

# Create a Dashboard Widget with Source code


**Method:** `POST`  
**Endpoint:** `/extensions`

The Create dashboard widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
  "extension": {
    "tags": [
      "tag1",
      "tag2"
    ],
    "type": "dashboard",
    "title": "sample 10",
    "srcdoc": "xyz",
    "config": "{}",
    "enable": true,
    "default_width": "half"
  }
}
```

**Response (200):**

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blta8bca792a5587223",
        "created_at": "2019-04-03T05:55:09.244Z",
        "updated_at": "2019-04-03T05:55:09.244Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 1,
        "title": "sample 10",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```
