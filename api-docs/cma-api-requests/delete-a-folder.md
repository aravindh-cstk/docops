---
title: "Delete a folder"
description: /assets/folders/{folder_uid}
url: /delete-a-folder
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.471Z
updated_at: 2026-07-20T16:51:02.172Z
---

# Delete a folder

<p>The <span data-type='inlineCode'>Delete a folder</span> call is used to delete an <a href="/docs/headless-cms/about-entries/#create-and-manage-asset-folders" target="_self">asset folder</a> along with all the assets within that folder.</p><p>When executing the API call, provide the parent folder UID. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p>

**API Endpoint**: `/assets/folders/{folder_uid}`

**Method**: `DELETE`

## URL Parameters

- **folder_uid** (required)
  <p>Enter the UID of the asset folder that you want to delete.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Folder deleted successfully."
}
```

