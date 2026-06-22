---
title: "Publish an asset"
description: POST /assets/{asset_uid}/publish
url: developers/apis/content-management-api/requests/publish-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Publish an asset


**Method:** `POST`  
**Endpoint:** `/assets/{asset_uid}/publish`

The Publish an asset call is used to publish a specific version of an asset on the desired [environment](/docs/developers/set-up-environments/about-environments) either immediately or at a later date/time.  
To configure the permissions for your application via OAuth, please include the cm.asset:publish scope.

**Note: **When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

In the 'Body' section, enter the asset details, such as locales and environments, where the assets need to be published. These details should be in JSON format.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt558a9890b838abcd | Enter the UID of the asset that you want to publish. |

**Request Body:**

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

**Response (201):**

```json
{
	"notice": "Asset sent for publishing."
}
```
