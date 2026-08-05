---
title: "Update the Dashboard Widget"
description: /extensions/{extension_uid}
url: /update-the-dashboard-widget
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.794Z
updated_at: 2025-07-29T04:14:40.876Z
---

# Update the Dashboard Widget

<p>The <span data-type='inlineCode'>Update dashboard widget</span> request is used to update the details of a widget.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span> scope.</p><p>In the ‘Body’ section, you need to provide details of the extension, such as its tags, set if the extension is a widget or field, title, source code of the widget, configuration details, enable the extension, and set the default width of the viewport to either full or half.</p>

**API Endpoint**: `/extensions/{extension_uid}`

**Method**: `PUT`

## URL Parameters

- **extension_uid** (required)

## Query Parameters

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

## Request Body

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

## Response

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

