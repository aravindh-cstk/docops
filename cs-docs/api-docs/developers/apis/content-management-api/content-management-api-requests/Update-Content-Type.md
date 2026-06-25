---
title: "Update Content Type"
description: PUT /content_types/{content_type_uid}
url: developers/apis/content-management-api/requests/update-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update Content Type

**PUT** `/content_types/{content_type_uid}`

The Update Content Type call is used to update the schema of an existing content type.

**Note:** Whenever you update a content type, it will auto-increment the content type version.

When executing the API call, in the “URL Parameters” section, provide the uid of your content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the updated schema of your content type. You can refer the [JSON schema for creating a content type](../../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add/update fields in your content type through API.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
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

## Sample Response

```json
{
	"notice": "Content Type updated successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"_version": 2,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "Reference",
				"uid": "reference",
				"data_type": "reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
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
					"uid": "apqr13cc6e50299",
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

