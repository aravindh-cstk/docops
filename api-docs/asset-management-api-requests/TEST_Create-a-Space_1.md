---
title: "TEST - Create a Space"
description: POST /v4/spaces
url: developer-apis/asset-management-api-requests/test-create-a-space-1
product: Contentstack
doc_type: api-request
audience:
 - developers
version: unknown
last_updated: 2026-07-22
test_run: auto-sync-validation
---

# TEST - Create a Space

**POST** `/v4/spaces`

The Create a space request allows you to create a new space within Asset Management.

In the request body, you must provide:

- name (required): The name of the space you want to create.Example: Marketing
- description (optional): A short description of the space.Example: This space contains all marketing assets.

Sample request body:

```
{
 "name": "Test Space",
 "description": "Sample Space Description"
}
```

## Headers

- **x-cs-api-version** (required)
 Pass the API version to be used for the request.
 Default: `4`
- **organization_uid** (required)
 Enter your organization UID.
 Default: `your_organization_uid`
- **access_token** (required)
 Enter your authtoken.
 Default: `your_authtoken`
- **content-type** (required)
 Pass application/json value.
 Default: `application/json`

## Sample Request

```json
{
 "name": "Marketing",
 "description": "This space will contain all marketing assets."
}
```

## Sample Response

```json
{
  "notice": "Space created successfully",
  "space": {
    "uid": "dam39f58e6ad9c75dd3",
    "name": "Test",
    "description": "description",
    "org_uid": "blt88556370c4c6f3cc",
    "owner_uid": "bltdec2ecb708ddfb23",
    "locales": [
      {
        "code": "en",
        "fallback": "en-us"
      },
      {
        "code": "en-us",
        "fallback": null
      }
    ],
    "tags": [],
    "created_by": "bltdec2ecb708ddfb23",
    "updated_by": "bltdec2ecb708ddfb23",
    "updated_at": "2025-04-28T12:26:42.976Z",
    "created_at": "2025-04-28T12:26:42.976Z",
    "deleted_at": false,
    "meta_info": {
      "storage": 0,
      "assets_count": 0,
      "folders_count": 0,
      "last_modified_at": "2025-04-28T12:26:42.976Z"
    },
    "users_count": 0
  }
}
```
