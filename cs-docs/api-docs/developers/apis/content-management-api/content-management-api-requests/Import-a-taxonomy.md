---
title: "Import a taxonomy"
description: POST /taxonomies/import
url: developers/apis/content-management-api/requests/import-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Import a taxonomy

**POST** `/taxonomies/import`

The Import a taxonomy request is used to import a taxonomy and its terms into a stack by uploading the JSON or CSV file.

**Note**: As Taxonomies can contain numerous terms, the response will feature a terms_count field, indicating the number of successfully imported terms for this request, rather than listing them all.

You can try the call manually in any REST API client, such as Postman. While importing, you need to pass a form-data parameter named taxonomy and select the input type as 'File'. Then, select the JSON or CSV file of the taxonomy that you wish to import.

**Note**:

- If the CSV import format is invalid, any invalid rows containing taxonomy/terms and subsequent rows will be ignored and only rows with valid taxonomy/terms will be created.
- Refer to the Restricted Keywords for UIDs to avoid using reserved keywords.

## Query Parameters

- **locale** (optional)
  Target locale in which to import the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

## Sample Response

```json
{
    "taxonomy": {
        "uid": "sample",
        "name": "Sample",
        "description": "",
      "locale": "es-es",
        "created_at": "2024-02-06T11:19:33.607Z",
        "created_by": "blt**************96",
        "updated_at": "2024-02-06T11:19:33.607Z",
        "updated_by": "blt**************96",
        "terms_count": 2
    }
}
```

