---
title: "Create Folder"
description: POST /v1/knowledge-vault/folders
url: developers/apis/knowledge-vault-api/requests/create-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Create Folder

**POST** `/v1/knowledge-vault/folders`

The Create Folder request lets you create a new folder within a specified parent directory in your knowledge vault.

To configure the permissions for your app via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

The _name_ and _path_ are required strings where _name_ specifies the new folder’s name and _path_ provides the parent folder UID where the new folder will be created.

**Note**: Root folder UID is dir0000000000000.

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
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

## Sample Response

```json
{
   "message": "Folder created successfully",
   "folder_uid": "dir************"
}
```

