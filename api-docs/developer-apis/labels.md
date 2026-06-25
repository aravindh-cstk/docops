---
title: "CMA | Labels"
description: Create, update, fetch, and manage labels used to organize content types, entries, assets, and stack resources.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/labels
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Labels

Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together. Read more about [Labels](/docs/developers/create-content-types/#content-type-labels).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Labels Collection

### Get all labels

**GET** `/labels?include_count={boolean_value}`

The Get all labels call fetches all the existing labels of the stack.

When executing the API call, under the 'Headers' section, enter the API key of your stack and management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, include the cm.labels.management:readscope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](../../../api-detail/content-delivery-api.md#queries) section of the Content Delivery API doc.

#### URL Parameters

- **query** (optional)
  Query to retrieve all labels of the stack.
  Default: `{"type":"dashboard", "enable": true}`

#### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of labels applied to content types.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `the API key of the stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Get a single label

**GET** `/labels/{label_uid}`

The Get a single label call returns information about a particular label of a stack.

When executing the API call, add the label_uid as a URL parameter and management_token in the Authorization parameters.

To configure the permissions for your application via OAuth, please include the cm.labels.management:readscope.

#### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that you want to retrieve.
  Default: `blt5d1761bce4b36d57`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"label": [{
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"created_by": "sys_bltf123456789012",
		"updated_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": "1"
	}]
}
```


### Add label

**POST** `/labels`

The Add label call is used to create a label.

When executing the API call, under the 'Headers' section, add the API key of your stack and management_token in the Authorization parameters.

In the 'Body' section, enter the label details, such as the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `the API key of the stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

#### Sample Response

```json
{
  "notice": "Label created successfully.",
  "label": {
    "name": "Test",
    "parent": [],
    "uid": "1234567890abcdef",
    "updated_by": "sys_bltf123456789012",
    "created_by": "sys_bltf123456789012",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "content_types": [],
    "_version": "1"
  }
}
```


### Update label

**PUT** `/labels/{label_uid}`

The Update label call is used to update an existing label.

When executing the API call add the label_uid as a URL parameter and management_token in the Authorization parameters.

In the 'Body' section, enter the updated details of your label, which include the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

#### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that needs to be updated.
  Default: `blt5d1761bce4b36d57`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

#### Sample Response

```json
{
	"notice": "Label updated successfully.",
	"label": {
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"updated_by": "sys_bltf123456789012",
		"created_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"tags": [],
		"content_types": [],
		"_version": "2",
		"isLabel": true
	}
}
```


### Delete label

**DELETE** `/labels/{label_uid}`

The Delete label call is used to delete a specific label.

When executing the API call, add the management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

#### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that you want to delete.
  Default: `blt5d1761bce4b36d57`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "notice": "Label deleted successfully."
}
```

