---
title: "Create entry variant"
description: /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}
url: /create-entry-variant
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:11:08.539Z
updated_at: 2025-07-31T13:17:13.607Z
---

# Create entry variant

<p>The <span class="code">Create entry variant</span> request lets you create an entry variant of your existing base entry.</p><p class="note"><strong>Note</strong>: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the <a href="/docs/developers/apis/content-management-api#link-content-types" target="_self">Link Content Type</a> request.</p><p>In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the <span class="code">_order</span> property to define the preferred sequence of instance UIDs.</p><pre>    {
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
}</pre><div class="note"><p><strong>Note:</strong></p><ul><li>The <span class="code">_change_set</span> field is automatically included in the response to indicate which fields were updated in the entry variant.</li><li>The system also detects changes in nested fields and includes them in the <span class="code">_change_set</span> field of the response.</li></ul></div>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

**Method**: `PUT`

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

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Pass <span class="code">application/json</span> value.</p>

## Request Body

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

