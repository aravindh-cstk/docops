---
title: "Set Version Name for Asset"
description: /assets/{asset_uid}/versions/{version_number}/name
url: /set-version-name-for-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.710Z
updated_at: 2025-07-01T04:59:00.566Z
---

# Set Version Name for Asset

<p>The <span class="code">Set Version Name for Asset</span> request allows you to assign a name to a specific version of an asset.</p>
<p>In the request body, you need to specify the version name to be assigned to the asset version.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.asset:write</span>scope.</p>
<h5>Get Details of All Versions of an Asset</h5>

**API Endpoint**: `/assets/{asset_uid}/versions/{version_number}/name`

**Method**: `POST`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset of which you want to assign a name to a specific asset version.</p>
- **version_number** (required)
  <p>Enter the version number of the asset version that you want to assign a name to.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"upload": {
		"_version_name": "Version name"
	}
}
```

## Response

```json
{
	"notice": "Version name assigned successfully."
}
```

