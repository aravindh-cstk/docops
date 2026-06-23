---
title: "Unpublish an asset"
description: POST /assets/{asset_uid}/unpublish
url: developers/apis/content-management-api/requests/unpublish-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Unpublish an asset

**POST** `/assets/{asset_uid}/unpublish`

The Unpublish an asset call is used to unpublish a specific version of an asset from a desired [environment](/docs/developers/set-up-environments/about-environments).  
To configure the permissions for your application via OAuth, please include the cm.asset:unpublish scope.

In case of **Scheduled Unpublishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

In the 'Body' section, enter the asset details, such as locales and environments, from where the assets need to be unpublished. These details should be in JSON format.

## URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset that you wish to unpublish.
  Default: `blt91af1e5af9c3639f`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
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
  "notice": "Asset sent for unpublishing."
}
```

