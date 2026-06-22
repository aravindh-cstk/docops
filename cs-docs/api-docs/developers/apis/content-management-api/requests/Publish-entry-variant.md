---
title: "Publish entry variant"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/publish
url: developers/apis/content-management-api/requests/publish-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-05
---

# Publish entry variant


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish entry variant request lets you publish an entry variant.

In the “Body” section, include the variant UID and version within variants. Pass the publish_latest_base_conditionally key as true within variant_rules.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base_conditionally": true
        }
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be published based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

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
        "environments": ["production"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base": false,
            "publish_latest_base_conditionally": true
        }
    },
    "locale": "en-us"
}
```

**Response (201):**

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "75****1f-e**0-46**-a**5-02********9a"
}
```
