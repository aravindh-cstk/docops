---
title: "Get all custom fields"
description: GET /extensions?query={'type':'field'}
url: developers/apis/content-management-api/requests/get-all-custom-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Get all custom fields

**GET** `/extensions?query={"type":"field"}`

The Get all custom fields request is used to get the information of all custom fields created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

## Query Parameters

- **query** (required)
  For custom fields
  Default: `{"type":"field"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"extensions": [{
			"uid": "blt002c000ce00b00000",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt2e2222e2222cf2e2",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Ratings",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "number",
			"srcdoc": "Source doc of the extension"
		},
		{
			"uid": "blt222c222ce22b22a22",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Color picker",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "text",
			"srcdoc": "Source doc of the extension"
		}
	]
}
```

