---
title: "Get assets of a specific folder"
description: /assets?folder={folder_uid}
url: /get-assets-of-a-specific-folder
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.798Z
updated_at: 2024-03-21T13:16:22.757Z
---

# Get assets of a specific folder

<p>The Get assets of a specific folder retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of subfolders within it. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope.</p>

**API Endpoint**: `/assets?folder={folder_uid}`

**Method**: `GET`

## Query Parameters

- **folder** (required)
  <p>Enter the UID of the asset folder.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"assets": [{
			"uid": "bltabc555e5a5b55b5d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Sample File",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltabc555e5a5b55b5d/5c555c55d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File",
			"publish_details": []
		},
		{
			"uid": "bltdd55a5555555b5f5",
			"created_at": "2018-12-27T04:58:58.101Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "53825",
			"tags": [],
			"filename": "Sample File 2",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltdd55a5555555b5f5/5c555c555a5ac5dc5b55cc5a/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File 2",
			"publish_details": []
		}
	]
}
```

