---
title: "Update a Release"
description: PUT /releases/{release_uid}
url: developers/apis/content-management-api/requests/update-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Update a Release

**PUT** `/releases/{release_uid}`

The Update a Release call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

When executing this API request, provide the Release UID as parameter. In the 'Body' section, you need to provide the new name and description of the Release that you want to update.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to update the details of.
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
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "release": {
        "name": "Release Name",
        "description": "2018-12-22"
    }
}
```

## Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "name": "Release Name",
        "description": "2018-12-22",
        "locked": false,
        "uid": "blt9dc98b5d9d4d1e4a",
        "created_by": "blta068b6e50264acf6",
        "updated_by": "blta068b6e50264acf6",
        "created_at": "2023-02-28T07:11:57.077Z",
        "updated_at": "2023-02-28T07:19:30.886Z",
        "status": [],
        "_deploy_latest": false
    }
}
```

