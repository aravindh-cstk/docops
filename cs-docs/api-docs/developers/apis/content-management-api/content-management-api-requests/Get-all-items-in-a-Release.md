---
title: "Get all items in a Release"
description: GET /releases/{release_uid}/items
url: developers/apis/content-management-api/requests/get-all-items-in-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Get all items in a Release

**GET** `/releases/{release_uid}/items`

The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release.

When executing the API request, you need to provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.release:read scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to retrieve the items.
  Default: `blt719af000dcde0000`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

