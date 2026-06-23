---
title: "Update Release items to their latest versions"
description: PUT /releases/{release_uid}/update_items
url: developers/apis/content-management-api/requests/update-release-items-to-their-latest-versions
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Update Release items to their latest versions

**PUT** `/releases/{release_uid}/update_items`

The Update Release items to their latest versions request let you update all the release items (entries and assets) to their latest versions before deployment.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

In the 'Body' section, you need to specify the following:

```
{
    "items":[
        "$all"
    ]
}
```

**Note**: This API request only allows you to collectively update all items in the release to their latest versions and not update any particular item individually.

In case an un-localized entry in the release has been localized later, this request will update the entry to the latest localized version. For example, if you add an un-localized entry to a release and later localize it to the French (France) language, this API request will update the release with the localized French version of the entry.

**Note**: You cannot update the release items under the following scenarios:

- If the updated version of an entry has new references, this API request doesn't automatically add the references to the release. You need to add them manually.
- You cannot update the items in a release once you deploy it.
- If the latest version of an entry is in the in-progress state, this API request doesn't update the entry.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to update the items (entries and assets) to their latest versions. You can find the release uid by running the [Get all Releases](/docs/developers/apis/content-management-api#releases-collection) API request.
  Default: `blt045d036eb8f2f9df`

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
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
    "items":[
        "$all"
    ]
}
```

## Sample Response

```json
{
  "notice":"Release items updated to their latest versions successfully.",
  "release":{
    "name":"Sample release", 
    "description":"Sample release",
    "uid":"blt046d036db7f2f9df",
    "created_by":"blt55927d24ccdc8d74e",
    "updated_by":"bltf41b5ae869879839",
    "created_at":"2021-11-15T06:29:21.061Z",
    "updated_at":"2021-12-01T07:09:42.201Z",
    "locked":false,
    "status":[
      
    ],
    "_deploy_latest":false,
    "items":[
      {
        "uid":"blta5cd0e5e62e4bc97",
        "version":4,
        "action":"publish",
        "content_type_uid":"sample_ct",
        "locale":"en-us",
        "title":"Sample entry"
      },
      {
        "uid":"blte254916f7d580dda",
        "version":2,
        "action":"publish",
        "content_type_uid":"demo-ct",
        "locale":"en-us",
        "title":"11.jpg"
      }
    ]
  }
}
```

