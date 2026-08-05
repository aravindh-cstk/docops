---
title: "Get all entry variants"
description: /content_types/{content_type_uid}/entries/{entry_uid}/variants
url: /get-all-entry-variants
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:15:20.392Z
updated_at: 2024-10-16T11:44:22.563Z
---

# Get all entry variants

<p>The <span class="code">Get all entry variants</span> request retrieves all entry variants of the specified entry.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/variants`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of your content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of your entry.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language for the entry you want to update.</p>
- **include_workflow** (optional)
  <p>Enter “true” to include the workflow details of the entry.</p>
- **include_publish_details** (optional)
  <p>Enter “true” to include the publish details of the entry.</p>
- **include_rules** (optional)
  <p>Enter “true” to include the publishing rules for the entry.</p>
- **skip** (optional)
  <p>Enter the number of items to be skipped from the response body.</p>
- **limit** (optional)
  <p>Enter the maximum number of items to be returned.</p>

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

