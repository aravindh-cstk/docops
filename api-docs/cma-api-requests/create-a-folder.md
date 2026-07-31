---
title: "Create a folder"
description: /assets/folders
url: /create-a-folder
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.478Z
updated_at: 2024-03-21T13:23:40.792Z
---

# Create a folder

<p>The <span data-type='inlineCode'>Create a folder</span> call is used to create an asset folder and/or add a parent folder to it (if required). <span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth</span>, please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p><p>In the ‘Body’ section, you need to provide a name for the new folder.</p><p>If you want to place this folder within another folder, provide the UID of the parent folder in the Request body as follows:</p><pre>{<br />    "asset": {<br />        "name": "asset_folder_name",<br />        "parent_uid": "asset_parent_folder_uid"<br />    }<br />}</pre><p class="note"><strong>Note:</strong> Here are some points that needs to be considered when executing this API request:</p><ul><li>A maximum of 300 folders can be created.</li><li>The maximum level of folder nesting is 5.</li><li>When nesting folder, you cannot nest a folder within the same folder or within its child folders.</li></ul>

**API Endpoint**: `/assets/folders`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"asset": {
		"name": "Demo"
	}
}
```

## Response

```json
{
	"notice": "Folder created successfully.",
	"asset": {
		"uid": "blt1bf1231a7fd1231b",
		"created_at": "2019-07-17T05:27:07.318Z",
		"updated_at": "2019-07-17T05:27:07.318Z",
		"created_by": "blt123123cc123fee1e",
		"updated_by": "blt123123cc123fee1e",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "bltf0000d00f00c0e00",
		"_version": 1
	}
}
```

