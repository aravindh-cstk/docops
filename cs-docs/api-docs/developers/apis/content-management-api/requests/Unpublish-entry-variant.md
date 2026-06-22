---
title: "Unpublish entry variant"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/unpublish
url: developers/apis/content-management-api/requests/unpublish-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-05
---

# Unpublish entry variant


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish entry variant request lets you unpublish an entry variant.

In the “Body” section, include the version number and variant UID within variants.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be unpublished based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Pass application/json value. |

| api_version | 3.2 | Enter the API version to include Nested Reference Publishing. |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of your content type. |

| entry_uid | your_entry_uid | Enter the unique ID of your entry. |

| locale | en-us | Enter the code of the language for the entry you want to update. |

**Request Body:**

```json
{
    "entry": {
        "environments": ["blt**************fd"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
    },
    "locale": "en-us"
}
```

**Response (201):**

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "05****9c-9**0-45**-9**4-ea********37"
}
```
