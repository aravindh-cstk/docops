---
title: "Add a single item to a Release"
description: /releases/{release_uid}/item
url: /add-a-single-item-to-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:02.692Z
updated_at: 2024-11-14T06:32:57.845Z
---

# Add a single item to a Release

<p>The <span data-type='inlineCode'>Add a single item to a Release</span> request allows you to add an item (entry or asset) to a Release.</p><p>When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the item such as the UID, version (of the entry and asset), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:write</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/item`

**Method**: `POST`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release in which&nbsp;you want to add an item.</p>

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
	"item": {
		"version": 1,
		"uid": "entry_or_asset_uid",
		"content_type_uid": "your_content_type_uid",
		"action": "publish",
		"locale": "en-us"
	}
}
```

## Response

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

## Error Response

<p>When the stack has <span data-type='inlineCode'>disable_fallback_publish</span> enabled and the item is not localized in the requested locale, the request is rejected with HTTP status <span data-type='inlineCode'>422</span> and error code <span data-type='inlineCode'>141</span>. The <span data-type='inlineCode'>locale : uid</span> pairs listed are illustrative.</p>

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

