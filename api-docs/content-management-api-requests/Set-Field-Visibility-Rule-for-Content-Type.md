---
title: "Set Field Visibility Rule for Content Type"
description: PUT /content_types/{content_type_uid}
url: developer-apis/content-management-api-requests/set-field-visibility-rule-for-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Set Field Visibility Rule for Content Type

**PUT** `/content_types/{content_type_uid}`

The Set Field Visibility Rule for Content Type API request lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

[Field Visibility Rules](../../../../../cs-docs/developers/create-content-types/about-field-visibility-rules.md) can be set while creating your content type (via UI, only after you’ve added all the required fields to the content type and saved it) or while editing a content type (both via UI and API).

To set a Field Visibility Rule, you need to add the following code snippet in the Request body of the content type:

```
{
    ...
    "content_type": {
        "field_rules": [{
            "conditions": [{
                "operand_field": "operand_field_uid",
                "operator": "equals",
                "value": "value_corresponding_to_operator"
            }],
            "match_type": "all",
            "actions": [{
                "action": "show",
                "target_field": "target_field_uid"
            }]
        }]
    }
    ...
}
```

Let’s look at the keys used in the above code snippet:

- operand_field: Pass the UID of the Operand field (operand_field_uid) i.e., the field on which you want to set the condition.
- operator: Pass the operator that you want to act on the operand field. Here’s the list of operators that are applicable based on the data type of your operand field:

| Data Types | Operations |
| --- | --- |
| Text | matches, does_not_match, starts_with, ends_with, contains |
| Number | equals, not_equals, less_than, greater_than, less_than_or_equals, greater_than_or_equals |
| Date | equals, not_equals, before_date, after_date |
| Boolean | is, is_not |
| Select | is, is_not |
| Reference | is, is_not |
- value: Pass the value that is corresponding to the operator that you have used. Note that for Date data type, you need to pass the date in ISO format.
- match_type: You need to pass either all or any depending on whether you want all your conditions or any one of your conditions to be met.
- action: You need to pass either show or hide depending on whether you want to show or hide the Target field.
- target_field: Pass the UID of the Target field (target_field_uid) i.e., the field on which you want to perform the action.

For more details, check out the [Define Conditions](../../../../../cs-docs/developers/create-content-types/add-a-field-visibility-rule.md#define-conditions) section when adding a Field Visibility Rule.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you want to add field rules. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
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

