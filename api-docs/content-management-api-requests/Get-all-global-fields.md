---
title: "Get all global fields"
description: GET /global_fields
url: developer-apis/content-management-api-requests/get-all-global-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-05
---

# Get all global fields

**GET** `/global_fields`

The Get all global fields request returns comprehensive information of all the global fields available in a particular stack in your organization.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

## Query Parameters

- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the nested Global field.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `true`
- **include_content_types** (optional)
  Set this parameter to 'true' to include in response the details of the content types where the current Global field is referred.
  Default: `ture`
- **include_global_fields** (optional)
  Set this parameter to 'true' to include in response the details of Global fields where the current Global field is referred.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of Global fields available in a stack.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted Global fields within a stack.
  Default: `true`

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

