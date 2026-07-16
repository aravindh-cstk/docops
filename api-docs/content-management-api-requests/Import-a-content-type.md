---
title: "Import a content type"
description: POST /content_types/import?overwrite={boolean_value}
url: developer-apis/content-management-api-requests/import-a-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Import a content type

**POST** `/content_types/import?overwrite={boolean_value}`

The Import a content type call imports a content type into a stack by uploading JSON file.   
To configure the permissions for your application via OAuth, please include the cm.content-types:import scope.

**Tip:** You can try the call manually in any REST API client, such as Postman. You can export the required content type's JSON file, make the necessary changes to the data and then import the content type. While importing, you need to pass a form-data parameter named content_type and select the input type as 'File'. Then, select the JSON file of the content type that you wish to import.

## Query Parameters

- **overwrite** (optional)
  Select 'true' to replace the existing content type with the imported content type file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Content Type imported successfully.",
	"content_type": {
		"created_at": "2019-07-31T10:34:25.910Z",
		"updated_at": "2019-07-31T10:34:25.910Z",
		"title": "Page",
		"uid": "page",
		"_version": 1,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"mandatory": true,
				"unique": true,
				"field_metadata": {
					"_default": true,
					"version": 3
				},
				"multiple": false,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"mandatory": false,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false,
				"non_localizable": false
			},
			{
				"data_type": "reference",
				"display_name": "Reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"uid": "reference",
				"mandatory": false,
				"multiple": false,
				"unique": false
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
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"is_page": true,
			"singleton": false,
			"title": "title",
			"sub_title": [],
			"url_pattern": "/:title",
			"url_prefix": "/"
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"others": {
				"read": false,
				"create": false
			},
			"users": [{
				"read": true,
				"sub_acl": {
					"read": true
				},
				"uid": "blt66bfb66666b6666c"
			}]
		},
		"SYS_ACL": {
			"roles": [],
			"others": {
				"read": false,
				"create": false,
				"update": false,
				"delete": false,
				"sub_acl": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"publish": false
				}
			}
		}
	}
}
```

