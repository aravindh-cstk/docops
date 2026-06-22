---
title: "Update the Dashboard Widget"
description: PUT /extensions/{extension_uid}
url: developers/apis/content-management-api/requests/update-the-dashboard-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-29
---

# Update the Dashboard Widget


**Method:** `PUT`  
**Endpoint:** `/extensions/{extension_uid}`

The Update dashboard widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the extension, such as its tags, set if the extension is a widget or field, title, source code of the widget, configuration details, enable the extension, and set the default width of the viewport to either full or half.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| extension_uid | blt20a7158319e3e32d |  |

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
    "title": "sample 9",
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
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt20a7158319e3e32d",
        "created_at": "2019-04-02T11:32:45.037Z",
        "updated_at": "2019-04-03T06:05:02.580Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 4,
        "title": "sample 9",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```
