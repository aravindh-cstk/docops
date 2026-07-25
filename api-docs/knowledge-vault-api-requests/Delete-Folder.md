---
title: "Delete Folder"
description: /v1/knowledge-vault/folders/{folder_uid}
url: /delete-folder
product: Contentstack
doc_type: api-request
created_at: 2025-12-12T08:32:29.436Z
updated_at: 2026-03-02T22:11:05.921Z
---

# Delete Folder

<p>The <span class="code">Delete Folder</span> request permanently deletes a specified folder from the Knowledge Vault in a brand kit.</p><p>To configure the permissions for your app via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/folders/{folder_uid}`

**Method**: `DELETE`

## URL Parameters

- **folder_uid** (required)
  <p>Enter the UID of the folder to be deleted.</p>

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
  "message": "Folder deleted successfully.",
}
```

