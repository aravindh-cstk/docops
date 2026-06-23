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

**PUT** `/extensions/{extension_uid}`

The Update dashboard widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the extension, such as its tags, set if the extension is a widget or field, title, source code of the widget, configuration details, enable the extension, and set the default width of the viewport to either full or half.

## URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

