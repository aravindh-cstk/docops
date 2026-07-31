---
title: "Create a content type"
description: /content_types
url: /create-a-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.496Z
updated_at: 2024-03-21T10:34:23.848Z
---

# Create a content type

<p>The <span data-type='inlineCode'>Create a content type</span> call creates a new content type in a particular stack of your Contentstack account. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span><span data-type='inlineCode'>cm.content-types.management:write</span></span> scope.</p><p>In the “Body” section, you need to provide the complete schema of the content type. You can refer the <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type" target="_self">JSON schema for creating a content type</a> document to know how you can add fields into your content type through API.</p><p>To mark a field as non-unique, you need to set the <span data-type='inlineCode'>unique</span> parameter to <span data-type='inlineCode'>false</span>. For example, to remove the <span data-type='inlineCode'>unique</span> constraint on the default 'title' field, you need to update the JSON schema of the title field as follows:</p><pre>{<br />    "display_name": "Title",<br />    "uid": "title",<br />    "data_type": "text",<br />    "mandatory": true,<br />    "unique": false,<br />    "field_metadata": {<br />      "_default": true<br />    },<br />    "multiple": false<br />}<br /></pre><h5 id="create-content-type-with-select-field">Create Content Type with Select Field</h5>

**API Endpoint**: `/content_types`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API Key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

