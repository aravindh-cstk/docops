---
title: "Create a global field"
description: /global_fields
url: /create-a-global-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.685Z
updated_at: 2025-05-05T05:12:52.129Z
---

# Create a global field

<p>The <span data-type='inlineCode'>Create a global field</span> request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.global-fields.management:write</span> scope.</p><p class="note"><strong>Note</strong>: Only the stack owner, administrator, and developer can create global fields.</p><p>To create a nested global field, follow the schema in the request body:</p><pre>{<br />    "global_field": {<br />        "title": "Nested Global Field",<br />        "uid": "nested_global_field",<br />        "description": "",<br />        "schema": [<br />            {<br />                "data_type": "text",<br />                "display_name": "Single Line Textbox",<br />                "uid": "single_line",<br />                "field_metadata": {<br />                    "description": "",<br />                    "default_value": "",<br />                    "version": 3<br />                },<br />                "format": "",<br />                "error_messages": {<br />                    "format": ""<br />                },<br />                "mandatory": false,<br />                "multiple": false,<br />                "non_localizable": false,<br />                "unique": false,<br />                "indexed": false,<br />                "inbuilt_model": false<br />            },<br />            {<br />                "data_type": "global_field",<br />                "display_name": "Global",<br />                "reference_to": "global_field_1",<br />                "field_metadata": {<br />                    "description": ""<br />                },<br />                "uid": "global_field",<br />                "mandatory": false,<br />                "multiple": false,<br />                "non_localizable": false,<br />                "unique": false,<br />                "indexed": false,<br />                "inbuilt_model": false<br />            }<br />        ]<br />    }<br />}<br /></pre>

**API Endpoint**: `/global_fields`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

