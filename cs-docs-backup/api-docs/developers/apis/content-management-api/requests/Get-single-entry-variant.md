---
title: "Get single entry variant"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: developers/apis/content-management-api/requests/get-single-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-10-16
---

# Get single entry variant

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Get single entry variant request retrieves a single variant entry of a given base entry.

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
- **include_workflow** (optional)
  Enter “true” to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`

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
            "_instance_uid": "blta9cc89a57108129246d5",
            "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
            "_base_entry_version": 1
        },
        "_version": 1,
        "created_at": "2024-09-09T10:28:46.093Z",
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
        "single_line": "Green Variant",
        "tags": [],
        "title": "Green RD",
        "updated_at": "2024-09-09T10:28:46.093Z",
        "updated_by": "blt**************1a",
        "url": "/green"
    }
}
```

