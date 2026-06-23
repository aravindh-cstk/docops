---
title: "Add a single item to a Release"
description: POST /releases/{release_uid}/item
url: developers/apis/content-management-api/requests/add-a-single-item-to-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Add a single item to a Release

**POST** `/releases/{release_uid}/item`

The Add a single item to a Release request allows you to add an item (entry or asset) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the item such as the UID, version (of the entry and asset), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add an item.
  Default: `your_release_uid`

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
	"item": {
		"version": 1,
		"uid": "entry_or_asset_uid",
		"content_type_uid": "your_content_type_uid",
		"action": "publish",
		"locale": "en-us"
	}
}
```

## Sample Response

```json
{
    "notice": "Item added to release successfully.",
    "release": {
        "name": "Release Name 2",
        "description": "2018-12-12",
        "locked": false,
        "items": [
            {
                "action": "publish",
                "title": "Sample1",
                "uid": "bltc24b029fc706fc8d",
                "locale": "en-us",
                "version": 1,
                "content_type_uid": "localization"
            }
        ],
        "uid": "bltfb07235c1e256728",
        "created_by": "bltf7b2fe26db42adc6",
        "updated_by": "bltf7b2fe26db42adc6",
        "created_at": "2023-02-22T10:30:10.032Z",
        "updated_at": "2023-02-27T13:35:20.768Z",
        "ACL": [],
        "app_user_object_uid": null,
        "_version": 4,
        "status": [],
        "_deploy_latest": false,
        "tags": []
    }
}
```

