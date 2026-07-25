---
title: "Set Field Visibility Rule for Content Type"
description: /content_types/{content_type_uid}
url: /set-field-visibility-rule-for-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.608Z
updated_at: 2026-07-20T16:52:23.749Z
---

# Set Field Visibility Rule for Content Type

<p>The <span data-type='inlineCode'>Set Field Visibility Rule for Content Type</span> API request lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.content-types.management:write </span>scope.</p><p><a href="/docs/developers/create-content-types/about-field-visibility-rules" target="_self">Field Visibility Rules</a> can be set while creating your content type (via UI, only after you’ve added all the required fields to the content type and saved it) or while editing a content type (both via UI and API).</p><p>To set a Field Visibility Rule, you need to add the following code snippet in the Request body of the content type:</p><pre>{<br />    ...<br />    "content_type": {<br />        "field_rules": [{<br />            "conditions": [{<br />                "operand_field": "operand_field_uid",<br />                "operator": "equals",<br />                "value": "value_corresponding_to_operator"<br />            }],<br />            "match_type": "all",<br />            "actions": [{<br />                "action": "show",<br />                "target_field": "target_field_uid"<br />            }]<br />        }]<br />    }<br />    ...<br />}</pre><p>Let’s look at the keys used in the above code snippet:</p><ul><li><span data-type='inlineCode'>operand_field</span>: Pass the UID of the Operand field (<span data-type='inlineCode'>operand_field_uid</span>) i.e., the field on which you want to set the condition.</li><li><span data-type='inlineCode'>operator</span>: Pass the operator that you want to act on the operand field. Here’s the list of operators that are applicable based on the data type of your operand field:<br /><br /><div class="cs-table-wrapper"><div class="cs-table"><table><tbody><tr><th>Data Types</th><th>Operations</th></tr><tr><td>Text</td><td><span data-type='inlineCode'>matches</span>, <span data-type='inlineCode'>does_not_match</span>, <span data-type='inlineCode'>starts_with</span>, <span data-type='inlineCode'>ends_with</span>, <span data-type='inlineCode'>contains</span></td></tr><tr><td>Number</td><td><span data-type='inlineCode'>equals</span>, <span data-type='inlineCode'>not_equals</span>, <span data-type='inlineCode'>less_than</span>, <span data-type='inlineCode'>greater_than</span>, <span data-type='inlineCode'>less_than_or_equals</span>, <span data-type='inlineCode'>greater_than_or_equals</span></td></tr><tr><td>Date</td><td><span data-type='inlineCode'>equals</span>, <span data-type='inlineCode'>not_equals</span>, <span data-type='inlineCode'>before_date</span>, <span data-type='inlineCode'>after_date</span></td></tr><tr><td>Boolean</td><td><span data-type='inlineCode'>is</span>, <span data-type='inlineCode'>is_not</span></td></tr><tr><td>Select</td><td><span data-type='inlineCode'>is</span>, <span data-type='inlineCode'>is_not</span></td></tr><tr><td>Reference</td><td><span data-type='inlineCode'>is</span>, <span data-type='inlineCode'>is_not</span></td></tr></tbody></table></div></div></li><li><span data-type='inlineCode'>value</span>: Pass the value that is corresponding to the operator that you have used. Note that for Date data type,&nbsp;you need to pass the date in ISO format.</li><li><span data-type='inlineCode'>match_type</span>: You need to pass either <span data-type='inlineCode'>all</span> or <span data-type='inlineCode'>any</span> depending on whether you want all your conditions or any one of your conditions to be met.</li><li><span data-type='inlineCode'>action</span>: You need to pass either <span data-type='inlineCode'>show</span> or <span data-type='inlineCode'>hide</span> depending on whether you want to show or hide the Target field.</li><li><span data-type='inlineCode'>target_field</span>: Pass the UID of the Target field (<span data-type='inlineCode'>target_field_uid</span>) i.e., the field on which you want to perform the action.</li></ul><p>For more details, check out the <a href="/docs/headless-cms/add-a-field-visibility-rule#define-conditions" target="_self">Define Conditions</a> section when adding a Field Visibility Rule.</p>

**API Endpoint**: `/content_types/{content_type_uid}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type in which you want to add field rules. The unique ID of a content type is unique across a stack.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
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
			},
			{
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": ["url"],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

## Response

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
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": ["url"],
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

