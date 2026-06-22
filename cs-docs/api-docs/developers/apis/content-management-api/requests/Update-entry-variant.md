---
title: "Update entry variant"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: developers/apis/content-management-api/requests/update-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-01
---

# Update entry variant


**Method:** `PUT`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Update entry variant request lets you update an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](/docs/developers/apis/content-management-api#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
   {
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
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
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

**Note:**

- The _change_set field is automatically included in the response to indicate which fields were updated in the entry variant.
- The system also detects changes in nested fields and includes them in the _change_set field of the response.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Pass application/json value. |

| content_type_uid | your_content_type_uid | Enter the unique ID of your content type. |

| entry_uid | your_entry_uid | Enter the unique ID of your entry. |

| variant_uid | your_variant_uid | Enter the unique ID of your variant. |

| locale | en-us | Enter the code of the language for the entry you want to update. |

**Request Body:**

```json
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
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
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

**Response (200):**

```json
{
    "entry": {
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
            "_instance_uid": "blt**************d5",
            "_uid": "cs1**************02",
            "_base_entry_version": 1
        },
        "_version": 3,
        "created_at": "2024-09-06T13:30:23.305Z",
        "created_by": "blt**************1a",
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
        "single_line": "Red variant",
        "tags": [],
        "title": "red",
        "updated_at": "2024-09-06T13:32:50.403Z",
        "updated_by": "blt**************1a",
        "url": "/red"
    },
    "notice": "Entry variant updated successfully."
}
```
