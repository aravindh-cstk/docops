---
title: "Move Items to Folder"
description: /v1/knowledge-vault/folders/{folder_uid}/move-items
url: /move-items-to-folder
product: Contentstack
doc_type: api-request
created_at: 2025-12-12T08:32:17.144Z
updated_at: 2026-03-02T22:15:29.311Z
---

# Move Items to Folder

<p>The <span class="code">Move Items to Folder</span> request lets you move multiple items into a specified folder within the Knowledge Vault of a brand kit.</p><p>To configure the permissions for your app via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Example:</p><pre>{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}</pre><p>The <span class="code">content_uids</span> holds the list of content item UIDs to move into another folder.</p>

**API Endpoint**: `/v1/knowledge-vault/folders/{folder_uid}/move-items`

**Method**: `PUT`

## URL Parameters

- **folder_uid ** (required)
  <p>Enter the UID of the folder where the items will be moved.</p>

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
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

## Response

```json
{
   "message": "Items moved successfully",
   "updated_count": 2,
   "elapsed_time": 0.033
}
```

