---
title: "Publish entry variant"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/publish
url: developer-apis/content-management-api-requests/publish-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-05
---

# Publish entry variant

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

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

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

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
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "75****1f-e**0-46**-a**5-02********9a"
}
```

