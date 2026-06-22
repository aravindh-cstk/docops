---
title: "Get a single custom field"
description: GET /extensions/{custom_field_uid}
url: developers/apis/content-management-api/requests/get-a-single-custom-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-20
---

# Get a single custom field


**Method:** `GET`  
**Endpoint:** `/extensions/{custom_field_uid}`

The Get a single custom field request gets the comprehensive details of a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| custom_field_uid | blt123ea123b123a123f | Enter the UID of the custom field of which you want to retrieve the details. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"extensions": {
		"uid": "blt002c000ce00b00000",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2d2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Ratings",
		"multiple": false,
		"config": {},
		"type": "field",
		"data_type": "number",
		"srcdoc": "Source doc of the extension"
	}
}
```
