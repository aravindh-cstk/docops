---
title: "Get all labels"
description: GET /labels?include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-all-labels
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-29
---

# Get all labels


**Method:** `GET`  
**Endpoint:** `/labels?include_count={boolean_value}`

The Get all labels call fetches all the existing labels of the stack.

When executing the API call, under the 'Headers' section, enter the API key of your stack and management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, include the cm.labels.management:readscope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section of the Content Delivery API doc.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of the stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| query | {"type":"dashboard", "enable": true} | Query to retrieve all labels of the stack. |

| include_count | false | Set this parameter to 'true' to include in response the total count of labels applied to content types. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"labels": [{
			"name": "Others",
			"parent": [],
			"uid": "blt3d33e33ea3bcf3f3",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:58:49.227Z",
			"updated_at": "2020-07-27T01:58:49.227Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"bank",
				"brand",
				"category",
				"for_synchronization_calls"
			]
		},
		{
			"name": "Household items",
			"parent": [
				"blt77777f77ebe77e7c"
			],
			"uid": "blt48285aba9e3e5305",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:57:04.139Z",
			"updated_at": "2020-07-27T01:57:04.139Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"kitchen_appliances",
				"electronics"
			]
		},
		{
			"name": "All Products",
			"parent": [],
			"uid": "blt77777f77ebe77e7c",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:55:48.514Z",
			"updated_at": "2020-07-27T01:55:48.514Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"product"
			]
		}
	]
}
```
