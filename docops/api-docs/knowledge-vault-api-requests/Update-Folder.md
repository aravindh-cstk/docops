---
title: "Update Folder"
description: /v1/knowledge-vault/folders/{folder_uid}
url: /update-folder
product: Contentstack
doc_type: api-request
created_at: 2025-12-12T08:32:06.598Z
updated_at: 2026-03-02T22:19:33.043Z
---

# Update Folder

<p>The <span class="code">Update Folder</span> request lets you rename an existing folder in the Knowledge Vault of a brand kit.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Example:</p><pre>{
  "name": "AI for Business Leaders"
}</pre>

**API Endpoint**: `/v1/knowledge-vault/folders/{folder_uid}`

**Method**: `PUT`

## URL Parameters

- **older_uid** (required)
  <p>Enter the UID of the folder to be updated.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Request Body

```json
{
  "name": "AI for Business Leaders"
}
```

## Response

```json
{
   "message": "Folder name updated successfully"
}
```

