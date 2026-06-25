---
title: "Move Items to Folder"
description: PUT /v1/knowledge-vault/folders/{folder_uid}/move-items
url: developer-apis/knowledge-vault-api-requests/move-items-to-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Move Items to Folder

**PUT** `/v1/knowledge-vault/folders/{folder_uid}/move-items`

The Move Items to Folder request lets you move multiple items into a specified folder within the Knowledge Vault of a brand kit.

To configure the permissions for your app via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

The content_uids holds the list of content item UIDs to move into another folder.

## URL Parameters

- **folder_uid ** (required)
  Enter the UID of the folder where the items will be moved.
  Default: `your_folder_uid`

## Headers

- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

## Sample Request

```json
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

## Sample Response

```json
{
   "message": "Items moved successfully",
   "updated_count": 2,
   "elapsed_time": 0.033
}
```

