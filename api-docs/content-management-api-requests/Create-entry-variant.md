---
title: "Create entry variant"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: developer-apis/content-management-api-requests/create-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-31
---

# Create entry variant

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Create entry variant request lets you create an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](../api-detail/content-management-api.md#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Red variant group 1",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        }
      },
      {
        "single_line": "Red variant group 2",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        }
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.csc30ef8fdc0b190fe",
            "base.cs5bafacf1e94ff8c2"
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

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

## Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

## Sample Request

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

## Sample Response

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
    "notice": "Entry variant created successfully."
}
```

