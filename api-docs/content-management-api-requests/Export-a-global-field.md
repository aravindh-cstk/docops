---
title: "Export a global field"
description: GET /global_fields/{global_field_uid}/export
url: developer-apis/content-management-api-requests/export-a-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Export a global field

**GET** `/global_fields/{global_field_uid}/export`

This request is used to export a specific global field and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

## URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
    "created_at": "2019-11-26T09:18:18.850Z",
    "updated_at": "2019-11-26T09:18:49.861Z",
    "title": "Servlet",
    "uid": "servlet",
    "_version": 1,
    "inbuilt_class": false,
    "schema": [
        {
            "display_name": "Name",
            "uid": "name",
            "data_type": "text",
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        },
        {
            "data_type": "text",
            "display_name": "Rich text editor",
            "uid": "description",
            "field_metadata": {
                "allow_rich_text": true,
                "description": "",
                "multiline": false,
                "rich_text_type": "advanced",
                "options": [],
                "version": 3
            },
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        }
    ],
    "last_activity": {},
    "maintain_revisions": true,
    "description": ""
}
```

