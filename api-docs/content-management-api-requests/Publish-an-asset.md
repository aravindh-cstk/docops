---
title: "Publish an asset"
description: POST /assets/{asset_uid}/publish
url: developer-apis/content-management-api-requests/publish-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Publish an asset

**POST** `/assets/{asset_uid}/publish`

The Publish an asset call is used to publish a specific version of an asset on the desired [environment](../../../../../cs-docs/developers/set-up-environments/about-environments.md) either immediately or at a later date/time.  
To configure the permissions for your application via OAuth, please include the cm.asset:publish scope.

**Note: **When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

In the 'Body' section, enter the asset details, such as locales and environments, where the assets need to be published. These details should be in JSON format.

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset that you want to publish.
  Default: `blt558a9890b838abcd`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

```json
{
	"notice": "Asset sent for publishing."
}
```

