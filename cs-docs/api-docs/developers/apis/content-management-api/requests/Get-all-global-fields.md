---
title: "Get all global fields"
description: GET /global_fields
url: developers/apis/content-management-api/requests/get-all-global-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-05
---

# Get all global fields


**Method:** `GET`  
**Endpoint:** `/global_fields`

The Get all global fields request returns comprehensive information of all the global fields available in a particular stack in your organization.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| include_global_field_schema | true | Set this parameter to 'true' to include in response the schema of the nested Global field. |

| include_branch | true | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

| include_content_types | ture | Set this parameter to 'true' to include in response the details of the content types where the current Global field is referred. |

| include_global_fields | true | Set this parameter to 'true' to include in response the details of Global fields where the current Global field is referred. |

| include_count | true | Set this parameter to 'true' to include in response the total count of Global fields available in a stack. |

| deleted | true | Set this parameter to 'true' to retrieve only deleted Global fields within a stack. |

**Response (200):**

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
