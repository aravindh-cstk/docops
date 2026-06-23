---
title: "Get All Folders"
description: GET /v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}
url: developers/apis/knowledge-vault-api/requests/get-all-folders
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Get All Folders

**GET** `/v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}`

The Get All Folders request retrieves a paginated list of all folders within the Knowledge Vault for a specified brand kit. You can apply filters such as sorting, pagination, and the inclusion of user metadata in the response.

To configure the permissions for your app via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

## Query Parameters

- **limit** (optional)
  Enter the maximum number of folders to return.
  Default: `10`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your folders.
  Default: `created_at`
- **skip** (optional)
  Enter the number of folders to be skipped from the response body.
  Default: `0`
- **order** (optional)
  Enter the ascending or descending order to organize the folders.
  Default: `asc`

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
   "documents": [
       {
           "folder_uid": "dir0000000000000",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:31:29.864609",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:31:29.864619",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "Root",
           "path": "/"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt57de41ea4319272c",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:32:18.992813",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:33:26.411742",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Beginners",
           "path": "/dir0000000000000"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:41:05.895270",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:41:05.895281",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Advanced Users",
           "path": "/dir0000000000000"
       }
   ]
}
```

