---
title: "Unpublish an asset"
description: /assets/{asset_uid}/unpublish
url: /unpublish-an-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.564Z
updated_at: 2024-02-20T12:16:14.459Z
---

# Unpublish an asset

<p>The <span data-type='inlineCode'>Unpublish an asset</span> call is used to unpublish a specific version of&nbsp;an asset from a desired <a href="/docs/developers/set-up-environments/about-environments" target="_self">environment</a>.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.asset:unpublish</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'><span data-type='inlineCode'> </span></span><span style='font-size: 10.5pt;'>scope.</span></p><p>In case of <strong>Scheduled Unpublishing</strong>, add the <span data-type='inlineCode'>scheduled_at</span> key and provide the date/time in the ISO format as its value. Example: <span data-type='inlineCode'>"scheduled_at":"2016-10-07T12:34:36.000Z"</span></p><p>In the 'Body' section, enter the asset details, such as locales and environments, from where the assets need to be unpublished. These details should be in JSON format.</p>

**API Endpoint**: `/assets/{asset_uid}/unpublish`

**Method**: `POST`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset that you wish to unpublish.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"asset": {
		"locales": [
			"en-us"
		],
		"environments": [
			"development"
		]
	},
	"version": 1,
	"scheduled_at": "2019-02-08T18:30:00.000Z"
}
```

## Response

```json
{
  "notice": "Asset sent for unpublishing."
}
```

