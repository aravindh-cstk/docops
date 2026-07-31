---
title: "Get all labels"
description: /labels?include_count={boolean_value}
url: /get-all-labels
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.886Z
updated_at: 2025-07-29T10:18:57.834Z
---

# Get all labels

<p>The <span data-type='inlineCode'>Get all labels</span> call fetches all the existing labels of the stack.</p><p>When executing the API call, under the 'Headers' section, enter the API key of your stack and <span data-type='inlineCode'>management_token</span> in the Authorization parameters.<br />To configure the permissions for your application via OAuth, include the <span data-type='inlineCode'>cm.labels.management:read</span>scope.</p><p>You can add queries to extend the functionality of this API call. Under the <span data-type='inlineCode'>URL Parameters</span> section, insert a parameter named <span data-type='inlineCode'>query</span> and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries">Queries</a> section of the Content Delivery API doc.</p>

**API Endpoint**: `/labels?include_count={boolean_value}`

**Method**: `GET`

## URL Parameters

- **query** (optional)
  <p>Query to retrieve all labels of the stack.</p>

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of labels applied to content types.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

