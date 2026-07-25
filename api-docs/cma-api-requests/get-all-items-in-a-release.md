---
title: "Get all items in a Release"
description: /releases/{release_uid}/items
url: /get-all-items-in-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.808Z
updated_at: 2026-01-06T10:14:23.352Z
---

# Get all items in a Release

<p>The <span data-type='inlineCode'>Get all items in a Release</span> request retrieves a list of all items (entries and assets) that are part of a specific Release.</p><p>When executing the API request, you need to provide the Release UID.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:read</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/items`

**Method**: `GET`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release of which you want to retrieve the items.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "items": [
        {
            "action": "publish",
            "title": "Group",
            "uid": "blt63177c0f00f20b61",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "Modular Blocks",
            "uid": "bltcad3ea0479ffb274",
            "locale": "en-us",
            "version": 1,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "File",
            "uid": "blt47a6d5202496b1da",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        }
    ]
}
```

