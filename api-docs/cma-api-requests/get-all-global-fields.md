---
title: "Get all global fields"
description: /global_fields
url: /get-all-global-fields
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.471Z
updated_at: 2025-05-05T05:00:28.627Z
---

# Get all global fields

<p>The <span data-type='inlineCode'>Get all global fields</span> request returns comprehensive information of all the global fields available in a particular stack in your organization.</p><div class="note"><strong>Note</strong>:<ul><li>Information about Global fields can be retrieved by all users, regardless of their role or access level.</li><li>If your Global field contains <a href="/docs/developers/global-field/about-global-field#nested-global-fields" target="_self">nested Global fields</a>, they will appear as part of the schema in the API response.</li><li><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.global-fields.management:read</span> scope.</p></li></ul></div>

**API Endpoint**: `/global_fields`

**Method**: `GET`

## Query Parameters

- **include_global_field_schema** (optional)
  <p>Set this parameter to 'true' to include in response the schema of the nested Global field.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>
- **include_content_types** (optional)
  <p>Set this parameter to 'true' to include in response the details of the content types where the current Global field is referred.</p>
- **include_global_fields** (optional)
  <p>Set this parameter to 'true' to include in response the details of Global fields where the current Global field is referred.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of Global fields available in a stack.</p>
- **deleted** (optional)
  <p>Set this parameter to 'true' to retrieve only deleted Global fields within a stack. </p>

## Headers

- **api_key** (required)
  <p><span style="font-size: 12pt;"></span>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
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

