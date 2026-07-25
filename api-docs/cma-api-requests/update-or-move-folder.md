---
title: "Update or move folder"
description: /assets/folders/{folder_uid}
url: /update-or-move-folder
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.461Z
updated_at: 2024-03-21T13:24:16.320Z
---

# Update or move folder

<p>The <span data-type='inlineCode'>Update or move folder</span> request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p><p>When executing the API request, provide the UID of the folder that you want to move/update.</p><p>In the ‘Body’ section, you need to provide a new name for your folder, and if you want to move your folder within another folder, then you need provide the UID of the parent folder.</p><p class="note"><strong>Note</strong>: Here are some points that needs to be considered when executing this API request:</p><ul><li>A maximum of 300 folders can be created.</li><li>The maximum level of folder nesting is 5.</li><li>When nesting folder, you cannot nest a folder within the same folder or within its child folders.</li></ul>

**API Endpoint**: `/assets/folders/{folder_uid}`

**Method**: `PUT`

## URL Parameters

- **folder_uid** (required)
  <p>Enter the UID of the folder that you want to either update or&nbsp;move.</p>

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
	"notice": "Folder updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-17T05:40:36.606Z",
		"updated_at": "2019-07-17T05:44:23.604Z",
		"created_by": "blt123123cc123fee1e",
		"updated_by": "blt123123cc123fee1e",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"is_dir": true,
		"parent_uid": "blt91af1e5af9c0000f",
		"_version": 3
	}
}
```

