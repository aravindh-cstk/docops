---
title: "Get a single folder by name"
description: GET /assets?query={'is_dir': true, 'name': 'folder_name'}
url: developer-apis/content-management-api-requests/get-a-single-folder-by-name
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get a single folder by name

**GET** `/assets?query={"is_dir": true, "name": "folder_name"}`

The Get a single folder by name call retrieves a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) based on the name provided.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

## Query Parameters

- **query** (required)
  Enter the is_dir and name parameters to find the asset folder by name.
  Default: `{"is_dir": true, "name": "folder_name"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
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

