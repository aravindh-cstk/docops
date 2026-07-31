---
title: "Get all global fields"
description: /global_fields
url: /get-all-global-fields
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.922Z
updated_at: 2026-06-05T07:58:39.231Z
---

# Get all global fields

<p>The <span data-type='inlineCode'>Get all global fields</span> request returns comprehensive information of all the global fields available in a particular stack in your organization. If you have nested global fields, it appears in the response.</p><div class="note"><strong>Note</strong>:<ul><li>Information about Global fields can be retrieved by all users, regardless of their role or access level.</li><li>If your Global field contains <a href="/docs/developers/global-field/about-global-field#nested-global-fields" target="_self">nested Global fields</a>, they will appear as part of the schema in the API response.</li></ul></div>

**API Endpoint**: `/global_fields`

**Method**: `GET`

## Query Parameters

- **include_global_field_schema** (optional)
  <p>Set this parameter to 'true' to include in response the schema of the Global field.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the Global field resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Refer to the <a href="#authentication">Authentication</a> section for more details.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

