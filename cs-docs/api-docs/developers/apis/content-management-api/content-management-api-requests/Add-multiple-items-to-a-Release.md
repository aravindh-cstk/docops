---
title: "Add multiple items to a Release"
description: POST /releases/{release_uid}/items
url: developers/apis/content-management-api/requests/add-multiple-items-to-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Add multiple items to a Release

**POST** `/releases/{release_uid}/items`

The Add multiple items to a Release request allows you to add multiple items (entries and/or assets) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the items such as their UIDs, versions (in case of entries and assets), content type UIDs (in case of entries), the action to be performed (publish/unpublish), and the locales of the items. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

**Note**: In a single request, you can add maximum **25** items (entries/assets) to a Release.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add multiple items.
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
	"items": [{
		"uid": "entry_or_asset_uid1",
		"version": 1,
		"locale": "en-us",
		"content_type_uid": "demo1",
		"action": "publish"
	}, {
		"uid": "entry_or_asset_uid2",
		"version": 4,
		"locale": "fr-fr",
		"content_type_uid": "demo2",
		"action": "publish"
	}]
}
```

## Sample Response

```json
{
	"notice": "Item(s) to be added to the release has been sent successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "entry_or_asset_uid1",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "publish",
				"title": "Sample2",
				"uid": "entry_or_asset_uid2",
				"locale": "fr-fr",
				"version": 4,
				"content_type_uid": "demo2"
			}
		],
		"app_user_object_uid": "system",
		"uid": "release_uid",
		"created_by": "blt7d123123cc321fee9e",
		"updated_by": "blt7d123123cc321fee9e",
		"created_at": "2019-07-18T08:41:33.915Z",
		"updated_at": "2019-07-18T08:41:33.915Z",
		"ACL": [],
		"_version": 1,
		"locked": false,
		"status": [],
		"tags": []
	}
}
```

