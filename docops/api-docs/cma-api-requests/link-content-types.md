---
title: "Link content types"
description: /variant_groups/{variant_group_uid}/variants
url: /link-content-types
product: Contentstack
doc_type: api-request
created_at: 2024-09-24T12:50:42.578Z
updated_at: 2024-09-24T13:04:41.091Z
---

# Link content types

<p>The <span class="code">Link content types</span> request allows you to link content types to your variant group.</p><p>In the “Body” section, enter the content type UID(s) in the following format:</p><pre>        {<br />            "uid": "content_type_uid_1",<br />            "status": "linked"<br />        },<br />        {<br />            "uid": "content_type_uid_2",<br />            "status": "linked"<br />        }</pre>

**API Endpoint**: `/variant_groups/{variant_group_uid}/variants`

**Method**: `PUT`

## URL Parameters

- **variant_group_uid** (required)
  <p>Enter the unique ID for your variant group.</p>

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
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

## Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
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

