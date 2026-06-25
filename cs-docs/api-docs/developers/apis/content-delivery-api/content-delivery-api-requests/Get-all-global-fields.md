---
title: "Get all global fields"
description: GET /global_fields
url: developers/apis/content-delivery-api/requests/get-all-global-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-06-05
---

# Get all global fields

**GET** `/global_fields`

The Get all global fields request returns comprehensive information of all the global fields available in a particular stack in your organization. If you have nested global fields, it appears in the response.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.

## Query Parameters

- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the Global field.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the Global field resides.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Refer to the [Authentication](#authentication) section for more details.
  Default: `your_delivery_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
    "global_fields": [
        {
            "created_at": "2019-09-06T11:30:02.108Z",
            "updated_at": "2019-09-06T11:30:02.108Z",
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
    ]
}
```

