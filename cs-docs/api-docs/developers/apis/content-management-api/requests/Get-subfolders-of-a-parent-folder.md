---
title: "Get subfolders of a parent folder"
description: GET /assets?include_folders=true&query={'is_dir': true}&folder={parent_folder_uid}
url: developers/apis/content-management-api/requests/get-subfolders-of-a-parent-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get subfolders of a parent folder

**GET** `/assets?include_folders=true&query={"is_dir": true}&folder={parent_folder_uid}`

The Get subfolders of a parent folder request retrieves the details of only the subfolders of a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders). This request does not retrieve asset files.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

## Query Parameters

- **include_folders** (required)
  Set this parameter to ‘true’ to include the asset folders in the search query.
  Default: `true`
- **query** (required)
  Enter the is_dir parameter to include asset folder details.
  Default: `{"is_dir": true}`
- **folder** (required)
  Enter the parent folder UID.
  Default: `enter_your_folder_uid`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `bltd7eee4a49bdf2842`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

