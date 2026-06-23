---
title: "Export a content type"
description: GET /content_types/{content_type_uid}/export?version={content_type_version}
url: developers/apis/content-management-api/requests/export-a-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-14
---

# Export a content type

**GET** `/content_types/{content_type_uid}/export?version={content_type_version}`

This call is used to export a specific content type and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.content-types:export scope.

However, please note that the entries of the specified content type are not exported through this call.

The schema of the content type returned will depend on the version number provided.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type you want to retrieve. The unique ID of a content type is unique across a stack.
  Default: `product`

## Query Parameters

- **version** (optional)
  Enter the version of content type you want to retrieve. If no version is specified, you will get the latest version of the content type.
  Default: `1`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"created_at": "2016-10-03T11:44:11.839Z",
	"updated_at": "2016-10-03T11:44:11.908Z",
	"title": "Page",
	"uid": "page",
	"inbuilt_class": false,
	"_version": 1,
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
```

