---
title: "Import a global field"
description: /global_fields/import
url: /import-a-global-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.735Z
updated_at: 2023-07-17T18:05:12.206Z
---

# Import a global field

<p>The <span data-type='inlineCode'>Import a global field</span> call imports a global field into a stack.</p><p>To import, you need to provide/upload a JSON file that contains the schema of the global field that you wish to import.</p><p class="tip"><strong>Tip</strong>: You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named <span data-type='inlineCode'>global_field</span> and selecting the input type as 'File'. Then, select the JSON file of the global field that you wish to import.</p>

**API Endpoint**: `/global_fields/import`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

