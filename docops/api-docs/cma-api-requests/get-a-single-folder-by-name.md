---
title: "Get a single folder by name"
description: /assets?query={"is_dir": true, "name": "folder_name"}
url: /get-a-single-folder-by-name
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.495Z
updated_at: 2026-07-20T16:51:14.872Z
---

# Get a single folder by name

<p>The <span data-type='inlineCode'>Get a single folder by name</span>&nbsp;call retrieves a specific <a href="/docs/headless-cms/about-entries/#create-and-manage-asset-folders" target="_self">asset folder</a> based on the name provided. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope.</p>

**API Endpoint**: `/assets?query={"is_dir": true, "name": "folder_name"}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Enter the <span data-type="inlineCode">is_dir</span> and <span data-type="inlineCode">name</span> parameters to find the asset folder by name.</p>
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
		"uid": "blt1111b11e11ae111f",
		"created_at": "2019-07-10T12:01:24.694Z",
		"updated_at": "2019-07-10T12:01:24.694Z",
		"created_by": "blt22e22222d22d2f22222a2b2f",
		"updated_by": "blt22e22222d22d2f22222a2b2f",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo Folder",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "bltd11bd1a1c11111ee",
		"_version": 1
	}]
}
```

