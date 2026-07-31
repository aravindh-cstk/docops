---
title: "Get a single folder"
description: /assets/folders/{folder_uid}?include_path={boolean_value}
url: /get-a-single-folder
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.513Z
updated_at: 2026-07-20T16:51:12.687Z
---

# Get a single folder

<p>The <span data-type='inlineCode'>Get a single folder</span> call gets the comprehensive details of a specific <a href="/docs/headless-cms/about-entries/#create-and-manage-asset-folders" target="_self">asset folder</a> by means of folder UID. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope.</p><p>When executing the API call to search for a subfolder, you need to provide the parent folder UID.</p>

**API Endpoint**: `/assets/folders/{folder_uid}?include_path={boolean_value}`

**Method**: `GET`

## URL Parameters

- **folder_uid** (required)
  <p>Enter the uid of the folder</p>

## Query Parameters

- **include_path** (optional)
  <p>Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of each parent folder.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-16T07:25:43.846Z",
		"updated_at": "2019-07-16T07:25:43.846Z",
		"created_by": "blt123123cc123fe123",
		"updated_by": "blt123123cc123fe123",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "blt123af1e2af3c12321f",
		"path": [{
			"uid": "blt99af9e9af9c9999f",
			"name": "sample"
		}],
		"_version": 1
	}
}
```

