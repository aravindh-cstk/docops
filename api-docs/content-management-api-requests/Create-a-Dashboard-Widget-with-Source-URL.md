---
title: "Create a Dashboard Widget with Source URL"
description: POST /extensions
url: developer-apis/content-management-api-requests/create-a-dashboard-widget-with-source-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-29
---

# Create a Dashboard Widget with Source URL

**POST** `/extensions`

The Create a Dashboard Widget with Source URL request is used to upload an extension hosted externally.

To configure the permissions for your application via OAuth, include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the dashboard widget, such as its tags, title, external source link (src), data types, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

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
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"extension": {
		"tags": [
			"tag"
		],
		"title": "New Dashboard Widget",
		"src": "https://www.sample.com",
		"config": "{}",
		"type": "dashboard",
		"enable": true,
		"default_width": "half"
	}
}
```

## Sample Response

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blt78d4b78a3c3f3263",
        "created_at": "2019-04-03T05:46:53.487Z",
        "updated_at": "2019-04-03T05:46:53.487Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag"
        ],
        "ACL": {},
        "_version": 1,
        "title": "New Dashboard Widget",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "src": "https://sample.com"
    }
}
```

