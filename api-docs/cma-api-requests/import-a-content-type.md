---
title: "Import a content type"
description: /content_types/import?overwrite={boolean_value}
url: /import-a-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.566Z
updated_at: 2024-03-21T12:10:25.756Z
---

# Import a content type

<p>The <span data-type='inlineCode'>Import a content type</span> call imports a content type into a stack by uploading JSON file. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.content-types:import</span></span> scope.</p><p class="tip"><strong>Tip:</strong>&nbsp;You can try the call manually in any REST API client, such as Postman. You can export the required content type's JSON file, make the necessary changes to the data and then import the content type. While importing, you need to pass a form-data parameter named <span data-type='inlineCode'>content_type</span> and select the input type as 'File'. Then, select the JSON file of the content type that you wish to import.</p>

**API Endpoint**: `/content_types/import?overwrite={boolean_value}`

**Method**: `POST`

## Query Parameters

- **overwrite** (optional)
  <p><span style="background-color: initial;">Select 'true' to replace the existing content type with the imported content type file.</span></p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

