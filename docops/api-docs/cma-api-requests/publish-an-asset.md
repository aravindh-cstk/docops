---
title: "Publish an asset"
description: /assets/{asset_uid}/publish
url: /publish-an-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.566Z
updated_at: 2024-02-20T12:14:41.677Z
---

# Publish an asset

<p>The <span data-type='inlineCode'>Publish an asset</span> call is used to publish a specific version of an asset on the desired <a href="/docs/developers/set-up-environments/about-environments" target="_self">environment</a> either immediately or at a later date/time.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.asset:publish</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p class="note"><strong>Note:&nbsp;</strong>When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.</p><p>In case of <strong>Scheduled Publishing</strong>, add the <span data-type='inlineCode'>scheduled_at</span> key and provide the date/time in the ISO format as its value. Example: <span data-type='inlineCode'>"scheduled_at":"2016-10-07T12:34:36.000Z"</span></p><p>In the 'Body' section, enter the asset details, such as locales and environments, where the assets need to be published. These details should be in JSON format.<br /></p>

**API Endpoint**: `/assets/{asset_uid}/publish`

**Method**: `POST`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset that you want to publish.</p>

## Headers

- **api_key** (required)
  <p>Enter&nbsp;the API key of the stack that holds the asset</p>
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
	"notice": "Asset sent for publishing."
}
```

