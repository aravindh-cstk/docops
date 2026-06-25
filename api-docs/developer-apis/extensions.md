---
title: "CMA | Extensions"
description: Create, update, fetch, and manage extensions and custom fields that expand Contentstack editing capabilities.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/extensions
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Extensions

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations ](../../../../cs-docs/developers/developer-hub/about-ui-locations.md)for the Contentstack App Framework to extend the functionality of your apps.

Extensions let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behavior. Read more about [Extensions](../../../../cs-docs/developers/experience-extensions-overview/about-experience-extensions.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Custom Fields

This type of extension lets you create custom fields that you can use in your content types. Read more [About Custom Fields](../../../../cs-docs/developers/create-custom-fields/about-custom-fields.md).

### Get all custom fields

**GET** `/extensions?query={"type":"field"}`

The Get all custom fields request is used to get the information of all custom fields created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### Query Parameters

- **query** (required)
  For custom fields
  Default: `{"type":"field"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Get a single custom field

**GET** `/extensions/{custom_field_uid}`

The Get a single custom field request gets the comprehensive details of a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field of which you want to retrieve the details.
  Default: `blt123ea123b123a123f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Upload a custom field

**POST** `/extensions`

The Upload a custom field request is used to upload a custom field to Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the custom field that you want to upload
- extension[title]: Enter the title of the custom field that you want to upload
- extension[data_type]: Enter the data type for the input field of the custom field
- extension[tags]: Enter the tags that you want to assign to the custom field
- extension[multiple]: Enter ‘true’ if you want your custom field to store multiple values
- extension[type]: Enter type as ‘field’, since this is a custom field extension.

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a1f",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "Demo",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code for the extension"
	}
}
```


### Create a custom field with source URL

**POST** `/extensions`

The Create a custom field with source URL call is used to create a custom field that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `main`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "New Custom Field",
		"src": "https://www.sample.com",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b01d",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "https://www.sample.com"
	}
}
```


### Create a custom field with source code

**POST** `/extensions`

The Create a custom field with source code request is used to create a custom field in Contentstack by providing the source code of the extensions. This source code will be hosted on Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, source code of the extension, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "New Custom Field",
		"srcdoc": "Source code of the extension",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code of the extension"
	}
}
```


### Update a custom field

**PUT** `/extensions/{custom_field_uid}`

The Update a custom field request is used to update the details of a custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link (or the updated external source code), set if the field is to take multiple values or not, and configuration details.

#### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to update.
  Default: `bltcd0ac000b000b00e`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "Old Extension",
		"src": "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00e",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Old Extension",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "Either you get the source code or the external hosting link of the extension depending on the hosting method."
	}
}
```


### Delete custom field

**DELETE** `/extensions/{custom_field_uid}`

The Delete custom field request is used to delete a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

#### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to delete.
  Default: `blt123c123ce12b3123`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
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
	"notice": "Extension deleted successfully."
}
```


### Create Content Type with Extension Field

**POST** `/content_types`

The Create Content Type with Extension Field request is used to create a content type that includes a custom field.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"content_type": {
		"title": "Sample",
		"uid": "sample",
                "schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"mandatory": true,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Content Type created successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "Extension",
                		"config": {"key1": "value1"},
				"field_metadata": {
					"extension": true
				},
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"multiple": false,
				"mandatory": true,
				"unique": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e506e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```




## Custom Widgets

This type of extensions lets you add widgets that help you analyze content of an entry and recommend content ideas. Read more [About Custom Widgets](/docs/developers/create-custom-widgets/about-custom-widgets).

### Get all widgets

**GET** `/extensions?query={"type":"widget"}`

The Get widgets request is used to get the information of all custom widgets created in a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### Query Parameters

- **query** (required)
  Parameter for custom widgets.
  Default: `{"type":"widget"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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
			"title": "Text Intelligence",
			"config": {
				"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11dc1"
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"$all"
				]
			},
			"srcdoc": "Source doc of the widget"
		},
		{
			"uid": "blt222c222ce22b22222",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Translation",
			"config": {
				"from": {
					"ga": "Irish",
					"it": "Italian",
					"ja": "Japanese",
					"de": "German"
				},
				"to": {
					"en": "English",
					"hi": "Hindi"
				}
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"Content type uids separated by commas"
				]
			},
			"srcdoc": "Source doc of the widget"
		}
	]
}
```


### Get widgets of a content type

**GET** `/extensions?scope={content_type_uid}`

The Get widgets of a content type request gets the comprehensive details of all widgets that are assigned to a specific content type.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### Query Parameters

- **scope** (required)
  Enter the UID of the content type of which you want to retrieve the details of all the applicable widgets.
  Default: `products`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Upload a widget

**POST** `/extensions`

The Upload a widget request is used to upload a new custom widget to a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload
- extension[title]: Enter the title of the widget that you want to upload
- extension[tags]: Enter the tags that you want to assign to the widget
- extension[scope]: Enter either {"content_types":["$all"]} or {"content_types":["content_type_uid1”, “content_type_uid2”, “..."]} to apply this widget to all content types or specific content types, respectively
- extension[type]: Enter type as ‘widget’, since this is a custom widget extension

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
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
	}
}
```


### Create widget with source URL

**POST** `/extensions`

The Create Widget with source URL call is used to create a widget that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (src), configuration details, set if the extension is a widget or field, and specify the scope, i.e., the content types to which you want to apply the widget.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
                "data_type": "text",
		"title": "New Widget",
		"src": "https://www.sample.com",
		"config": "{}",
		"type": "widget",
		"scope": {
			"content_types": ["$all"]
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "https://www.sample.com"
	}
}
```


### Create widget with source code

**POST** `/extensions`

The Create widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write
scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"title": "New Widget",
		"srcdoc": "Source code of the widget",
		"config": "{}",
		"type": "widget",
		"scope": {
			"content_types": ["$all"]
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source code of the widget"
	}
}
```


### Update a widget

**PUT** `/extensions/{widget_uid}`

The Update a widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (or the updated external source code), configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

#### URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to update.
  Default: `bltcd0ac000b000b00f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"title": "Widget Updated",
		"src": "Enter either the source code or the external hosting link of the widget depending on the hosting method you selected.",
		"config": "{}",
                "type": "widget",
                "scope": {
                "content_types": [
                "<your_content_type_uid>"
                ]

         	}
	}
}
```

#### Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Widget Updated",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "Either you get the source code or the external hosting link of the widget depending on the hosting method."
	}
}
```


### Delete a widget

**DELETE** `/extensions/{widget_uid}`

The Delete a widget call is used to delete a specific custom widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

#### URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to delete.
  Default: `bltcd0ac000b000b00f`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Extension deleted successfully."
}
```




## Dashboard Widgets

This type of extension lets you create widgets for your dashboard. Read more [About Custom Dashboard Widgets](/docs/developers/create-dashboard-widgets/about-custom-dashboard-widgets).

### Get All Dashboard Widgets

**GET** `/extensions?query={"type":"dashboard", "enable": true}`

The Get All Dashboard Widgets request is used to get the information of all the enabled custom dashboard extension.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### Query Parameters

- **query** (required)
  Query to retrieve all dashboard widgets.
  Default: `{"type":"dashboard", "enable": true}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{  
   "extensions":[  
      {  
         "uid":"blt20a7158319e3e32d",
         "created_at":"2019-04-02T11:32:45.037Z",
         "updated_at":"2019-04-02T11:33:36.062Z",
         "created_by":"blt1e6dead9f06f1560",
         "updated_by":"blt1e6dead9f06f1560",
         "tags":[  
            "tag1",
            "tag2"
         ],
         "ACL":[  

         ],
         "_version":3,
         "title":"sample 9",
         "config":{  

         },
         "type":"dashboard",
         "enable":true,
         "default_width":"half",
         "srcdoc":"xyz"
      }
   ]
}
```


### Upload Dashboard Widget

**POST** `/extensions`

The Upload Dashboard Widget request uploads the widget to the Stack Dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload.
- extension[title]: Enter the title of the widget that you want to upload.
- extension[tags]: Enter the tags that you want to assign to the widget.
- extension[type]: Enter type as ‘dashboard’, since this is a custom widget extension.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{  
   "notice":"Extension created successfully.",
   "extension":{  
      "uid":"blt4533c57b647be007",
      "created_at":"2019-04-03T05:33:24.998Z",
      "updated_at":"2019-04-03T05:33:24.998Z",
      "created_by":"blt1e6dead9f06f1560",
      "updated_by":"blt1e6dead9f06f1560",
      "tags":[  
         "tag1",
         "tag2"
      ],
      "ACL":{  

      },
      "_version":1,
      "title":"unique",
      "config":{  

      },
      "type":"dashboard",
      "enable":false,
      "default_width":"half",
      "srcdoc":"Source doc of the extension"
   }
}
```


### Create a Dashboard Widget with Source URL

**POST** `/extensions`

The Create a Dashboard Widget with Source URL request is used to upload an extension hosted externally.

To configure the permissions for your application via OAuth, include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the dashboard widget, such as its tags, title, external source link (src), data types, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
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
	"extension": {
		"tags": [
			"tag"
		],
		"title": "New Dashboard Widget",
		"src": "https://www.sample.com",
		"config": "{}",
		"type": "dashboard",
		"enable": true,
		"default_width": "half"
	}
}
```

#### Sample Response

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blt78d4b78a3c3f3263",
        "created_at": "2019-04-03T05:46:53.487Z",
        "updated_at": "2019-04-03T05:46:53.487Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag"
        ],
        "ACL": {},
        "_version": 1,
        "title": "New Dashboard Widget",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "src": "https://sample.com"
    }
}
```


### Create a Dashboard Widget with Source code

**POST** `/extensions`

The Create dashboard widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "extension": {
    "tags": [
      "tag1",
      "tag2"
    ],
    "type": "dashboard",
    "title": "sample 10",
    "srcdoc": "xyz",
    "config": "{}",
    "enable": true,
    "default_width": "half"
  }
}
```

#### Sample Response

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blta8bca792a5587223",
        "created_at": "2019-04-03T05:55:09.244Z",
        "updated_at": "2019-04-03T05:55:09.244Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 1,
        "title": "sample 10",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```


### Update the Dashboard Widget

**PUT** `/extensions/{extension_uid}`

The Update dashboard widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the extension, such as its tags, set if the extension is a widget or field, title, source code of the widget, configuration details, enable the extension, and set the default width of the viewport to either full or half.

#### URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "extension": {
    "tags": [
      "tag1",
      "tag2"
    ],
    "type": "dashboard",
    "title": "sample 9",
    "srcdoc": "xyz",
    "config": "{}",
    "enable": true,
    "default_width": "half"
  }
}
```

#### Sample Response

```json
{
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt20a7158319e3e32d",
        "created_at": "2019-04-02T11:32:45.037Z",
        "updated_at": "2019-04-03T06:05:02.580Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 4,
        "title": "sample 9",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```


### Delete the Dashboard Widget

**DELETE** `/extensions/{extension_uid}`

The Delete dashboard widget call is used to delete a specific custom dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

#### URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
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
    "notice": "Extension deleted successfully."
}
```




## JSON RTE Plugins

This type of extension lets you add customized plugins to your JSON Rich Text Editor and extend its functionality. Read more [About JSON RTE Plugins](../../../../cs-docs/developers/json-rich-text-editor-plugins.md).

### Get all JSON RTE plugins

**GET** `/extensions?query={"type":"rte_plugin"}`

The Get all JSON RTE plugins request is used to get the information of all JSON Rich Text Editor plugins created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### Query Parameters

- **query** (required)
  Query to retrieve all  JSON RTE plugins.
  Default: `{"type":"rte_plugin"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "extensions":[
    {
      "uid":"bltd6b2c2c3eeca106c",
      "created_at":"2021-10-26T11:38:01.817Z",
      "updated_at":"2021-10-26T11:38:01.817Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Marketplace",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt13415f84cf5ea6e2",
      "created_at":"2021-10-25T06:56:43.007Z",
      "updated_at":"2021-10-25T06:56:43.007Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Audience Plugin",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"bltd4408204421f820e",
      "created_at":"2021-10-25T06:56:18.311Z",
      "updated_at":"2021-10-25T06:56:18.311Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Social Embed",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt58a13863db325d6b",
      "created_at":"2021-10-25T06:55:55.368Z",
      "updated_at":"2021-10-25T06:55:55.368Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Word Count",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blta007a6d51b7d4b6a",
      "created_at":"2021-10-25T06:55:35.657Z",
      "updated_at":"2021-10-25T06:55:35.657Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Local",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    }
  ]
}
```


### Get a single JSON RTE plugin

**GET** `/extensions/{json_rte_plugin_uid}`

The Get a single JSON RTE plugin request gets the comprehensive details of a specific JSON Rich Text Editor plugin.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

#### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin of which you want to retrieve details.
  Default: `blt123ea123b123a123f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "extension":{
    "uid":"blt58a13863db325d6b",
    "created_at":"2021-10-25T06:55:55.368Z",
    "updated_at":"2021-10-25T06:55:55.368Z",
    "created_by":"blt1a2d7dec1a7dd682",
    "updated_by":"blt1a2d7dec1a7dd682",
    "tags":[
      
    ],
    "ACL":[
      
    ],
    "_version":1,
    "title":"Word Count",
    "config":{
      
    },
    "type":"rte_plugin",
    "src":"URL of the JSON RTE plugin source code"
  }
}
```


### Create a JSON RTE plugin with source URL

**POST** `/extensions`

The Create a JSON RTE plugin with source URL request allows you to add an externally hosted JSON RTE plugin to your stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:writescope.

In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link, set if the field is to take multiple values or not, configuration details, and the extension type. Enter the extension type as ‘rte_plugin’, since this is a JSON RTE plugin extension.

**Note:** You can add a maximum of **50** extensions (including custom fields , custom widgets and JSON RTE plugins) in a stack.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

#### Sample Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blt23982036789e969e",
    "created_at":"2021-12-06T04:01:10.626Z",
    "updated_at":"2021-12-06T04:01:10.626Z",
    "created_by":"blt3cf27864e6b61df3",
    "updated_by":"blt3cf27864e6b61df3",
    "tags":[
      "tag1",
      "tag2"
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Sample JSON RTE Plugin",
    "config":{
      
    },
    "type":"rte_plugin",
    "src":"URL of the JSON RTE plugin source code"
  }
}
```


### Update a JSON RTE plugin

**PUT** `/extensions/{json_rte_plugin_uid}`

The Update a JSON RTE plugin request allows you to update the details of an existing JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link (or the updated external source code), set if the field is to take multiple values or not, configuration details, and the extension type.

#### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Updated Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

#### Sample Response

```json
{
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt23982036789e969e",
        "created_at": "2021-12-06T04:01:10.626Z",
        "updated_at": "2021-12-06T04:17:31.643Z",
        "created_by": "blt3cf27864e6b61df3",
        "updated_by": "blt3cf27864e6b61df3",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 2,
        "title": "Updated Sample JSON RTE Plugin",
        "config": {},
        "type": "rte_plugin",
        "src": "URL of the JSON RTE plugin source code"
    }
}
```


### Delete JSON RTE plugin

**DELETE** `/extensions/{json_rte_plugin_uid}`

The Delete JSON RTE plugin request allows you to delete a specific JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

#### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
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
    "notice": "Extension deleted successfully."
}
```


### Create content type with JSON RTE plugin

**POST** `/content_types`

The Create content type with JSON RTE plugin request allows you to create a content type that includes JSON RTE plugins within the JSON Rich Text Editor.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the UIDs of the JSON RTE plugins you want to add within the plugins parameter.

The schema for this is as follows:

```
"plugins":[
          "bag98lo5467qs532l0c",
          "ang22qw1234pl345g8j",
          "pnr65op1258hs807k9l"
        ]
```

**Note:** The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is **five**.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "content_type":{
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "field_metadata":{
          "_default":true
        },
        "unique":false,
        "multiple":false
      },
      {
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
      }
    ],
    "options":{
      "title":"title",
      "publishable":true,
      "is_page":true,
      "singleton":false,
      "sub_title":[
        "url"
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    }
  }
}
```

#### Sample Response

```json
{
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2021-12-16T10:27:15.897Z",
    "updated_at":"2021-12-16T10:27:15.897Z",
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "unique":false,
        "multiple":false,
        "mandatory":false,
        "non_localizable":false
      },
      {
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
      }
    ],
    "last_activity":{
      
    },
    "maintain_revisions":true,
    "description":"",
    "DEFAULT_ACL":{
      "others":{
        "read":false,
        "create":false
      },
      "users":[
        {
          "read":true,
          "sub_acl":{
            "read":true
          },
          "uid":"blt24edc44154f3eb37"
        }
      ],
      "management_token":{
        "read":true
      }
    },
    "SYS_ACL":{
      "roles":[
        
      ],
      "others":{
        "read":false,
        "create":false,
        "update":false,
        "delete":false,
        "sub_acl":{
          "read":false,
          "create":false,
          "update":false,
          "delete":false,
          "publish":false
        }
      }
    },
    "options":{
      "title":"title",
      "publishable":true,
      "is_page":true,
      "singleton":false,
      "sub_title":[
        "url"
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    },
    "abilities":{
      "get_one_object":true,
      "get_all_objects":true,
      "create_object":true,
      "update_object":true,
      "delete_object":true,
      "delete_all_objects":true
    }
  }
}
```




## Asset Sidebar Extensions

This type of extension lets you add widgets with more capabilities or custom functionalities for editors to manage, transform, and optimize stack assets. Read more about [Asset Sidebar Extensions](../../../../cs-docs/developers/create-asset-sidebar-extensions.md).

### Get all asset sidebar extensions

**GET** `/extensions?query={"type":"asset_sidebar_widget"}`

The Get all asset sidebar extensions request is used to get the information of all the asset sidebar extensions created in a stack.

#### Query Parameters

- **query** (required)
  Pass the query to retrieve all  asset sidebar extensions.
  Default: `{"type":"asset_sidebar_widget"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Response

```json
{
  "extensions":[
    {
      "uid":"bltdf58aac9c3589644",
      "created_at":"2022-02-21T11:32:53.240Z",
      "updated_at":"2022-02-21T11:32:53.240Z",
      "created_by":"blt8588eda026739d77",
      "updated_by":"blt8588eda026739d77",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Demo2",
      "config":{
        
      },
      "type":"asset_sidebar_widget",
      "width":700,
      "blur":false,
      "src":"URL of the asset sidebar extension source code"
    },
    {
      "uid":"blt39df56f2cfbf297f",
      "created_at":"2022-01-04T05:29:52.990Z",
      "updated_at":"2022-02-21T11:18:55.948Z",
      "created_by":"blt3cfef289de5d0c73",
      "updated_by":"bltf37273e0002a02fe",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":12,
      "title":"Image Preset Builder",
      "config":{
        
      },
      "type":"asset_sidebar_widget",
      "width":1000,
      "blur":true,
      "src":"URL of the asset sidebar extension source code"
    }
  ]
}
```


### Get a single asset sidebar extension

**GET** `/extensions/{asset_sidebar_extension_uid}`

The Get a single asset sidebar extension request gets the comprehensive details of a specific asset sidebar extension.

#### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension of which you want to retrieve details.
  Default: `blt123ea123b123a123f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Response

```json
{
  "extension":{
    "uid":"blt39df56f2cfbf297f",
    "created_at":"2022-01-04T05:29:52.990Z",
    "updated_at":"2022-02-21T11:18:55.948Z",
    "created_by":"blt3cfef289de5d0c73",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":[
      
    ],
    "_version":12,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1000,
    "blur":true,
    "src":"URL of the asset sidebar extension source code"
  }
}
```


### Create an asset sidebar extension with source URL

**POST** `/extensions`

The Create an asset sidebar extension with source URL request allows you to add an externally hosted asset sidebar extension to your stack.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link, width, and blur effect. Enter the extension type as asset_sidebar_widget, since this is an asset sidebar extension.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

**Note:** You can add a maximum of **50** extensions (including custom fields , custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Request

```json
{
    "extension": {
        "type": "asset_sidebar_widget",
        "title": "Image Preset Builder",
        "config": {},
        "src": "URL of the asset sidebar extension source code",
        "width":1024,
        "blur":false
    }
}
```

#### Sample Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:48:42.939Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"URL of the asset sidebar extension source code"
  }
}
```


### Update an asset sidebar extension

**PUT** `/extensions/{asset_sidebar_extension_uid}`

The Update an asset sidebar extension request allows you to update the details of an existing asset sidebar extension.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link (or the updated external source code), width, and blur effect.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

#### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension of which you want to update details.
  Default: `blt123ea123b123a123f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Request

```json
{
    "extension":{
    "type": "asset_sidebar_widget",
    "title": "Updated Title for Asset Sidebar Extension",
    "config": {},
    "src": "Updated URL of the asset sidebar extension source code"
  }
}
```

#### Sample Response

```json
{
  "notice":"Extension updated successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:56:58.150Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":2,
    "title":"Updated Title for Asset Sidebar Extension",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"Updated URL of the asset sidebar extension source code"
  }
}
```


### Delete asset sidebar extension

**DELETE** `/extensions/{asset_sidebar_extension_uid}`

The Delete asset sidebar extension request allows you to delete a specific asset sidebar extension.

#### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension that you want to delete.
  Default: `blt123ea123b123a123f`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```

