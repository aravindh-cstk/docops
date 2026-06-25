---
title: "Delete Folder"
description: DELETE /v1/knowledge-vault/folders/{folder_uid}
url: developer-apis/knowledge-vault-api-requests/delete-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Delete Folder

**DELETE** `/v1/knowledge-vault/folders/{folder_uid}`

The Delete Folder request permanently deletes a specified folder from the Knowledge Vault in a brand kit.

To configure the permissions for your app via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

## URL Parameters

- **folder_uid** (required)
  Enter the UID of the folder to be deleted.
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

## Sample Response

```json
{
  "message": "Folder deleted successfully.",
}
```

