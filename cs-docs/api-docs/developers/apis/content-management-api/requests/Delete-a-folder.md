---
title: "Delete a folder"
description: DELETE /assets/folders/{folder_uid}
url: developers/apis/content-management-api/requests/delete-a-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete a folder

**DELETE** `/assets/folders/{folder_uid}`

The Delete a folder call is used to delete an [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) along with all the assets within that folder.

When executing the API call, provide the parent folder UID.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

## URL Parameters

- **folder_uid** (required)
  Enter the UID of the asset folder that you want to delete.
  Default: `bltc7aa14ea1959b25c`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
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
	"notice": "Folder deleted successfully."
}
```

