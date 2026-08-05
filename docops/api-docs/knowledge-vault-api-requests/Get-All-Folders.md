---
title: "Get All Folders"
description: /v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}
url: /get-all-folders
product: Contentstack
doc_type: api-request
created_at: 2025-12-12T08:31:38.911Z
updated_at: 2026-03-02T22:07:23.659Z
---

# Get All Folders

<p>The <span class="code">Get All Folders</span> request retrieves a paginated list of all folders within the Knowledge Vault for a specified brand kit. You can apply filters such as sorting, pagination, and the inclusion of user metadata in the response.</p><p>To configure the permissions for your app via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}`

**Method**: `GET`

## Query Parameters

- **limit** (optional)
  <p>Enter the maximum number of folders to return.</p>
- **sort** (optional)
  <p>Enter the value on the basis of which you want to sort your folders.</p>
- **skip** (optional)
  <p>Enter the number of folders to be skipped from the response body.</p>
- **order** (optional)
  <p>Enter the ascending or descending order to organize the folders.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Response

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

