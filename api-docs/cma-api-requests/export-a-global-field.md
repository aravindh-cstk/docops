---
title: "Export a global field"
description: /global_fields/{global_field_uid}/export
url: /export-a-global-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.786Z
updated_at: 2024-03-21T12:48:41.789Z
---

# Export a global field

<p>This request is used to export a specific global field and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a <strong>REST API</strong> client, such as <strong>Postman</strong> can be used. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.global-fields.management:write</span> scope.</p>

**API Endpoint**: `/global_fields/{global_field_uid}/export`

**Method**: `GET`

## URL Parameters

- **global_field_uid** (required)
  <p>Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

