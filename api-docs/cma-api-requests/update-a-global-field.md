---
title: "Update a global field"
description: /global_fields/{global_field_uid}
url: /update-a-global-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.697Z
updated_at: 2024-03-21T12:13:09.265Z
---

# Update a global field

<p>The <span data-type='inlineCode'>Update a global field</span> request allows you to update the schema of an existing global field. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.global-fields.management:write</span> scope.</p><p>When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.</p>

**API Endpoint**: `/global_fields/{global_field_uid}`

**Method**: `PUT`

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

## Request Body

```json
{
        "global_field": {
            "title": "Servlet",
            "uid": "servlet",
            "schema": [{
                "display_name": "Name",
                "uid": "name",
                "data_type": "text"
            }, {
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
                "unique": false
            }]
        }
    }
```

## Response

```json
{
    "notice": "Global Field updated successfully.",
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

