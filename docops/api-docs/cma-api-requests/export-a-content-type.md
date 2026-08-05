---
title: "Export a content type"
description: /content_types/{content_type_uid}/export?version={content_type_version}
url: /export-a-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.700Z
updated_at: 2025-08-14T13:32:26.785Z
---

# Export a content type

<p>This call is used to export a specific content type and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a&nbsp;<strong>REST API</strong>&nbsp;client, such as&nbsp;<strong>Postman</strong>&nbsp;can be used.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth,&nbsp;</span>please include the&nbsp;<span><span data-type='inlineCode'>cm.content-types:export</span></span>&nbsp;scope.</p><p>However, please note that the entries of the specified content type are not exported through this call.</p><p>The schema of the content type returned will depend on the version number&nbsp;provided.<br /></p>

**API Endpoint**: `/content_types/{content_type_uid}/export?version={content_type_version}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type you want to retrieve. The unique ID of a content type is unique across a stack.</p>

## Query Parameters

- **version** (optional)
  <p>Enter the version of content type you want to retrieve. If no version is specified, you will get the latest version of the content type.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

