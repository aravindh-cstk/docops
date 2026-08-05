---
title: "Import a taxonomy"
description: /taxonomies/import
url: /import-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2024-02-09T08:09:14.551Z
updated_at: 2025-11-13T18:00:56.711Z
---

# Import a taxonomy

<p>The <span data-type='inlineCode'>Import a taxonomy</span> request is used to import a taxonomy and its terms into a stack by uploading the JSON or CSV file.</p><p class="note"><strong>Note</strong>: As Taxonomies can contain numerous terms, the response will feature a <span data-type='inlineCode'>terms_count</span> field, indicating the number of successfully imported terms for this request, rather than listing them all.</p><p>You can try the call manually in any REST API client, such as Postman. While importing, you need to pass a form-data parameter named <span data-type='inlineCode'>taxonomy</span> and select the input type as 'File'. Then, select the JSON or CSV file of the taxonomy that you wish to import.</p><div class="note"><strong>Note</strong>:<ul><li>If the CSV import format is invalid, any invalid rows containing taxonomy/terms and subsequent rows will be ignored and only rows with valid taxonomy/terms will be created.</li><li>Refer to the <a href="/docs/developers/create-content-types/restricted-keywords-for-uids" target="_self">Restricted Keywords for UIDs</a> to avoid using reserved keywords.</li></ul></div>

**API Endpoint**: `/taxonomies/import`

**Method**: `POST`

## Query Parameters

- **locale** (optional)
  <p>Target locale in which to import the taxonomy. If not specified, the master locale is used.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

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

