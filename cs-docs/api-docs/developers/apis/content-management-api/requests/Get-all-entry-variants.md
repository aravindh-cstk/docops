---
title: "Get all entry variants"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/variants
url: developers/apis/content-management-api/requests/get-all-entry-variants
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-10-16
---

# Get all entry variants


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/variants`

The Get all entry variants request retrieves all entry variants of the specified entry.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| content_type_uid | your_content_type_uid | Enter the unique ID of your content type. |

| entry_uid | your_entry_uid | Enter the unique ID of your entry. |

| locale | en-us | Enter the code of the language for the entry you want to update. |

| include_workflow | true | Enter “true” to include the workflow details of the entry. |

| include_publish_details | true | Enter “true” to include the publish details of the entry. |

| include_rules | true | Enter “true” to include the publishing rules for the entry. |

| skip | 0 | Enter the number of items to be skipped from the response body. |

| limit | 10 | Enter the maximum number of items to be returned. |

**Response (200):**

```json
{
    "entries": [
        {
            "uid": "blt**************a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line",
                    "group.cs5bafacf1e94ff8c2.single_line",
                    "group.cs5bafacf1e94ff8c2.multi_line",
                    "group.csc30ef8fdc0b190fe.single_line",
                    "group.csc30ef8fdc0b190fe.multi_line"
                ],
                "_order": [
                    {
                        "group": [
                            "base.cs5bafacf1e94ff8c2",
                            "base.csc30ef8fdc0b190fe"
                        ]
                    }
                ],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
                "_base_entry_version": 1
            },
            "_version": 1,
            "created_at": "2024-09-09T10:28:46.093Z",
            "created_by": "blt6fe92749b66ad81a",
            "group": [
                {
                    "single_line": "Variant 2",
                    "_metadata": {
                        "uid": "cs5bafacf1e94ff8c2"
                    },
                    "multi_line": "Variant 2 Multi"
                },
                {
                    "single_line": "Variant 1",
                    "_metadata": {
                        "uid": "csc30ef8fdc0b190fe"
                    },
                    "multi_line": "Variant 1 Multi"
                }
            ],
            "locale": "en-us",
            "single_line": "Green Variant",
            "tags": [],
            "title": "Green RD",
            "updated_at": "2024-09-09T10:28:46.093Z",
            "updated_by": "blt6fe92749b66ad81a",
            "url": "/green"
        },
        {
            "uid": "blt05097f3d980a17a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line"
                ],
                "_order": [],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49c",
                "_base_entry_version": 1
            },
            "_version": 4,
            "created_at": "2024-09-06T13:30:23.305Z",
            "created_by": "blt**************1a",
            "locale": "en-us",
            "single_line": "Red variant",
            "tags": [],
            "title": "red",
            "updated_at": "2024-09-09T10:27:44.796Z",
            "updated_by": "blt**************1a",
            "url": "/red"
        }
    ]
}
```
