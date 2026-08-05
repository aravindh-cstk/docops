---
title: "Delete Version Name of Asset"
description: /assets/{asset_uid}/versions/{version_number}/name
url: /delete-version-name-of-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.623Z
updated_at: 2026-07-09T07:40:28.195Z
---

# Delete Version Name of Asset

<p>The <span class="code">Delete Version Name of Asset</span> request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.asset:write</span>scope.</p>

**API Endpoint**: `/assets/{asset_uid}/versions/{version_number}/name`

**Method**: `DELETE`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset of which you want to delete the version name.</p>
- **version_number** (required)
  <p>Enter the version number of the asset of which you want to delete the version name.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Version name deleted successfully"
}
```

