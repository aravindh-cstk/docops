---
title: "Create a folder"
description: POST /assets/folders
url: developers/apis/content-management-api/requests/create-a-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Create a folder

**POST** `/assets/folders`

The Create a folder call is used to create an asset folder and/or add a parent folder to it (if required). To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

In the ‘Body’ section, you need to provide a name for the new folder.

If you want to place this folder within another folder, provide the UID of the parent folder in the Request body as follows:

```
{
    "asset": {
        "name": "asset_folder_name",
        "parent_uid": "asset_parent_folder_uid"
    }
}
```

**Note:** Here are some points that needs to be considered when executing this API request:

- A maximum of 300 folders can be created.
- The maximum level of folder nesting is 5.
- When nesting folder, you cannot nest a folder within the same folder or within its child folders.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"asset": {
		"name": "Demo"
	}
}
```

## Sample Response

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

