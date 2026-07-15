---
title: "Get widgets of a content type"
description: GET /extensions?scope={content_type_uid}
url: developer-apis/content-management-api-requests/get-widgets-of-a-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Get widgets of a content type

**GET** `/extensions?scope={content_type_uid}`

The Get widgets of a content type request gets the comprehensive details of all widgets that are assigned to a specific content type.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

## Query Parameters

- **scope** (required)
  Enter the UID of the content type of which you want to retrieve the details of all the applicable widgets.
  Default: `products`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"extensions": [{
		"uid": "blt002c000ce00b0000d",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2e2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Text Intelligence",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source doc of the widget"
	}]
}
```

