---
title: "Create a global field"
description: POST /global_fields
url: developers/apis/content-management-api/requests/create-a-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-05
---

# Create a global field

**POST** `/global_fields`

The Create a global field request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Note**: Only the stack owner, administrator, and developer can create global fields.

To create a nested global field, follow the schema in the request body:

```
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

## Sample Response

```json
{
    "notice": "Global Field created successfully.",
    "global_field": {
        "created_at": "2024-08-07T07:39:11.410Z",
        "updated_at": "2024-08-07T07:40:02.343Z",
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true
    }
}
```

