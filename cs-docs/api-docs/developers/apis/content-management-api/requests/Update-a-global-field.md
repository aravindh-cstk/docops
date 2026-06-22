---
title: "Update a global field"
description: PUT /global_fields/{global_field_uid}
url: developers/apis/content-management-api/requests/update-a-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update a global field


**Method:** `PUT`  
**Endpoint:** `/global_fields/{global_field_uid}`

The Update a global field request allows you to update the schema of an existing global field.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| global_field_uid | global_field_uid | Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
