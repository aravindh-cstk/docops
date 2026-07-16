---
title: "Unlink content types"
description: PUT /variant_groups/{variant_group_uid}/variants
url: developer-apis/content-management-api-requests/unlink-content-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-24
---

# Unlink content types

**PUT** `/variant_groups/{variant_group_uid}/variants`

The Unlink content types request allows you to unlink content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
```

## URL Parameters

- **variant_group_uid** (required)
  Enter the unique ID for your variant group.
  Default: `your_variant_group_uid`

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
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

## Sample Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```

