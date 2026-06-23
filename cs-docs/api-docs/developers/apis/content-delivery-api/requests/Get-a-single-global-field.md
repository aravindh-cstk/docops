---
title: "Get a single global field"
description: GET /global_fields/{global_field_uid}
url: developers/apis/content-delivery-api/requests/get-a-single-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-05
---

# Get a single global field

**GET** `/global_fields/{global_field_uid}`

The Get a single global field request allows you to fetch comprehensive details of a specific global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

**Note**:
  

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.

## URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `seo`

## Query Parameters

- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the Global field.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the Global field resides.
  Default: `ture`

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
    "global_field": {
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
}
```

