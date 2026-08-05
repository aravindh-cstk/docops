---
title: "Get single entry variant"
description: /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: /get-single-entry-variant
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:17:55.387Z
updated_at: 2024-10-16T11:42:46.438Z
---

# Get single entry variant

<p>The <span class="code">Get single entry variant</span> request retrieves a single variant entry of a given base entry.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of your content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of your entry.</p>
- **variant_uid** (required)
  <p>Enter the unique ID of your variant.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language for the entry you want to update.</p>
- **include_workflow** (optional)
  <p>Enter “true” to include the workflow details of the entry.</p>
- **include_publish_details** (optional)
  <p>Enter “true” to include the publish details of the entry.</p>
- **include_rules** (optional)
  <p>Enter “true” to include the publishing rules for the entry.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

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

