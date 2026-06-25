---
title: "Update Folder"
description: PUT /v1/knowledge-vault/folders/{folder_uid}
url: developers/apis/knowledge-vault-api/requests/update-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Update Folder

**PUT** `/v1/knowledge-vault/folders/{folder_uid}`

The Update Folder request lets you rename an existing folder in the Knowledge Vault of a brand kit.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Business Leaders"
}
```

## URL Parameters

- **older_uid** (required)
  Enter the UID of the folder to be updated.
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
  "name": "AI for Business Leaders"
}
```

## Sample Response

```json
{
   "message": "Folder name updated successfully"
}
```

