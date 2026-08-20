---
title: "Add multiple items to a Release"
description: /releases/{release_uid}/items
url: /add-multiple-items-to-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.762Z
updated_at: 2024-11-14T06:33:06.597Z
---

# Add multiple items to a Release

<p>The <span data-type='inlineCode'>Add multiple items to a Release</span> request allows you to add multiple items (entries and/or assets) to a Release.</p><p>When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the items such as their UIDs, versions (in case of entries and assets), content type UIDs (in case of entries), the action to be performed (publish/unpublish), and the locales of the items. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:write</span> scope.</p><p class="note"><strong>Note</strong>: In a single request, you can add maximum <strong>25</strong> items (entries/assets) to a Release.</p>

**API Endpoint**: `/releases/{release_uid}/items`

**Method**: `POST`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release in which&nbsp;you want to add multiple items.</p>

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
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

## Error Response

<p>When the stack has <span data-type='inlineCode'>disable_fallback_publish</span> enabled and one or more items are not localized in the requested locale, the request is rejected with HTTP status <span data-type='inlineCode'>422</span> and error code <span data-type='inlineCode'>141</span>. The request is rejected all-or-none, and <span data-type='inlineCode'>unpublish</span> items are not affected. The <span data-type='inlineCode'>locale : uid</span> pairs listed are illustrative.</p>

```json
{
    "error_message": "Failed to add item(s) to release.",
    "error_code": 141,
    "errors": {
        "items": [
            "Item(s) not localized in the selected locale. Fallback publishing is disabled for this stack: fr-fr : blt222, de-at : blt333."
        ]
    }
}
```

