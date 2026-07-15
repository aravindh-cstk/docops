---
title: "Import a global field"
description: POST /global_fields/import
url: developer-apis/content-management-api-requests/import-a-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-17
---

# Import a global field

**POST** `/global_fields/import`

The Import a global field call imports a global field into a stack.

To import, you need to provide/upload a JSON file that contains the schema of the global field that you wish to import.

**Tip**: You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named global_field and selecting the input type as 'File'. Then, select the JSON file of the global field that you wish to import.

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
  Default: `Your_management_token`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "notice": "Global Field imported successfully.",
  "global_field": {
    "created_at": "2019-08-22T05:29:37.701Z",
    "updated_at": "2019-08-22T05:29:37.701Z",
    "title": "five",
    "uid": "five",
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
        "display_name": "Add",
        "uid": "add",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      },
      {
        "display_name": "std",
        "uid": "std",
        "data_type": "text",
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

