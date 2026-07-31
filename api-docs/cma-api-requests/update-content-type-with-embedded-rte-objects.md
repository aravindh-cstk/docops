---
title: "Update content type with embedded RTE objects"
description: /content_types/{content_type_uid}
url: /update-content-type-with-embedded-rte-objects
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.440Z
updated_at: 2024-03-21T10:49:32.870Z
---

# Update content type with embedded RTE objects

<p>The <span data-type='inlineCode'>Update content type with embedded RTE objects</span> request allows you to update the schema of an existing content type that contains embedded entries and/or assets within its Rich Text Editor field. <span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.content-types.management:write </span>scope.</p><p class="note"><strong>Note</strong>: Whenever you update a content type, it will auto-increment the content type version.</p><p>When executing the API request, in the “URL Parameters” section, provide the unique ID of your content type.</p><p>In the “Body” section, you need to provide the updated schema of your content type. You can refer the <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type" target="_self">JSON schema for creating a content type</a> document to know how you can add/update fields in your content type through API.</p><p>You can make changes to the schema of the Rich Text Editor field while updating the content type schema. Here is a sample of an updated Rich Text Editor schema:</p><pre>{<br />    "data_type":"text",<br />    "display_name":"Updated RTE",<br />    "uid":"updated_rich_text_editor",<br />    "field_metadata":{<br />        "allow_rich_text":true,<br />        "description":"",<br />        "multiline":false,<br />        "rich_text_type":"advanced"<br />    },<br />    "reference_to":[<br />        "content_type_UID_1",<br />        "content_type_UID_2",<br />        "sys_assets"<br />    ],<br />    "mandatory":false,<br />    "unique":false,<br />    "non_localizable":false<br />}<br /></pre>

**API Endpoint**: `/content_types/{content_type_uid}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>

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
  <p>Enter "application/json" to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"content_type": {
		"title": "Saby Content",
		"uid": "seba",
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
				"data_type": "text",
				"display_name": "Sample RTE",
				"uid": "sample_rich_text_editor",
				"field_metadata": {
					"allow_rich_text": true,
					"description": "",
					"multiline": false,
					"rich_text_type": "advanced"
				},
				"reference_to": ["content_type_UID_1", "content_type_UID_2", "content_type_UID_3", "sys_assets"],
				"mandatory": false,
				"unique": false,
				"non_localizable": false
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
    "notice": "Content Type updated successfully.",
    "content_type": {
        "created_at": "2020-11-12T18:18:18.924Z",
        "updated_at": "2020-11-12T18:27:44.555Z",
        "title": "Updated Sample Content",
        "uid": "sample_content",
        "_version": 2,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "mandatory": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "multiple": false,
                "mandatory": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Sample RTE",
                "uid": "sample_rich_text_editor",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "version": 3
                },
                "reference_to": [
                    "content_type_UID_1",
                    "content_type_UID_2",
                    "content_type_UID_3",
                    "sys_assets"
                ],
                "mandatory": false,
                "unique": false,
                "non_localizable": false,
                "multiple": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "uid": "blt6da09d8f8ac9acef",
                    "read": true,
                    "sub_acl": {
                        "read": true
                    }
                }
            ]
        },
        "SYS_ACL": {
            "roles": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt983fb5327bb1b58a"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt26061f22e61a661b"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "bltf42db7c8ee32b48a"
                }
            ],
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
        },
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
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```

