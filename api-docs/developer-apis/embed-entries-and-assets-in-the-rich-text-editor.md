---
title: "CMA | Embed Entries and Assets in the Rich Text Editor"
description: Manage embedded entries and assets in Rich Text fields, including references used in structured content.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/embed-entries-and-assets-in-the-rich-text-editor
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Embed Entries and Assets in the Rich Text Editor

You can embed other entries and/or assets inside the [Rich Text Editor](../../../../cs-docs/developers/create-content-types/rich-text-editor.md) (RTE) field while creating entries. Inside the RTE field, you can embed entries inline; at the block level; or as a hyperlink; and assets as downloadable entities or simply display them (for images).

**Note**: This feature is available only if it is part of your plan. To avail of this feature, you can get in touch with our [Support](mailto:support@contentstack.com) team.

The embedded items are added as HTML components within the RTE, and their contents change dynamically as and when you modify the source item. When retrieved or modified, these embedded HTML components are returned in the API response as JSON objects.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Additional Resource**: Refer to the “Utils SDK” of our [SDKs](/docs/developers/#platforms-and-sdks) to understand how you can render embedded entries and assets using the Contentstack SDKs.

## Create a content type with embedded RTE objects

### Create a content type with embedded RTE objects

**POST** `/content_types`

The Create a content type with embedded RTE objects request lets you create a content type, which supports embedded objects inside its RTE field.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type (refer [JSON schema for creating a content type](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md)).

To embed entries within a specific RTE, pass the reference_to parameter with valid content type UIDs to determine entries of which content type(s) can be embedded inside the editor.

**Note**: The max number of content types that can be referenced within a single Rich Text Editor field is **10**.

To embed assets within a specific RTE, you can pass "sys_assets" value within the reference_to array  along with the content type UIDs.

Here’s a sample schema of a Rich Text Editor field that supports embedded entries and assets:

```
{
    "data_type":"text",
    "display_name":"Sample RTE",
    "uid":"sample_rich_text_editor",
    "field_metadata":{
        "..."
    },
    "reference_to":[
        "content_type_UID_1",
        "content_type_UID_1",
        "sys_assets"
    ],
    "..."
}
```

**Additional Resource**: Refer to the [Rich Text Field Schema](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#html-based-rich-text-editor) guide to understand how you can format the content entered in the field.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
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
    "content_type":{
        "title":"Sample Content",
        "uid":"sample_content",
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
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
                "data_type":"text",
                "display_name":"Sample RTE",
                "uid":"sample_rich_text_editor",
                "field_metadata":{
                    "allow_rich_text":true,
                    "description":"",
                    "multiline":false,
                    "rich_text_type":"advanced"
                },
                "reference_to":[
                    "content_type_UID_1",
                    "content_type_UID_1",
                    "sys_assets"
                ],
                "mandatory":false,
                "unique":false,
                "non_localizable":false
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
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2020-11-12T18:18:18.924Z",
        "updated_at": "2020-11-12T18:18:18.924Z",
        "title": "Sample Content",
        "uid": "sample_content",
        "_version": 1,
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
                    "content_type_UID_1",
                    "all_fields"
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
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt6da09d8f8ac9acef"
                }
            ],
            "management_token": {
                "read": true
            }
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




## Update content type with embedded RTE objects

### Update content type with embedded RTE objects

**PUT** `/content_types/{content_type_uid}`

The Update content type with embedded RTE objects request allows you to update the schema of an existing content type that contains embedded entries and/or assets within its Rich Text Editor field. To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

**Note**: Whenever you update a content type, it will auto-increment the content type version.

When executing the API request, in the “URL Parameters” section, provide the unique ID of your content type.

In the “Body” section, you need to provide the updated schema of your content type. You can refer the [JSON schema for creating a content type](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add/update fields in your content type through API.

You can make changes to the schema of the Rich Text Editor field while updating the content type schema. Here is a sample of an updated Rich Text Editor schema:

```
{
    "data_type":"text",
    "display_name":"Updated RTE",
    "uid":"updated_rich_text_editor",
    "field_metadata":{
        "allow_rich_text":true,
        "description":"",
        "multiline":false,
        "rich_text_type":"advanced"
    },
    "reference_to":[
        "content_type_UID_1",
        "content_type_UID_2",
        "sys_assets"
    ],
    "mandatory":false,
    "unique":false,
    "non_localizable":false
}
```

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
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

#### Sample Response

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




## Create an entry with embedded entries in RTE

### Create an entry with embedded entries in RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE entries request allows you to embed entries inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a **maximum of 100**components, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the fields present within the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed entry/entries of the same or other content types inside the field as HTML components. These embedded entries can be added inline within the flow of content; as a separate content block; or as a dynamic hyperlink within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded entry as a separate HTML element, you need to wrap the entry component inside the <div> HTML tag. To refer to the entry of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded entry)
- data-sys-entry-uid: To specify the unique ID of the entry that you want to embed inside the editor
- data-sys-entry-locale: To specify the locale code for the language in which the selected entry is localized
- data-sys-content-type-uid: To specify the unique ID of the content type to which the embedded entry belongs
- sys-style-type: You can pass inline, block, or link to specify how you want to embed the entry within the text
- type: To specify the type of object embedded inside the rich text, e.g., entry

Here’s a sample of rich text that contains embedded entries:

```
"rich_text_editor": "

Embedded entry as block:

Embedded entry inline with text:

Embedded entry as link:

"
```

The above Rich Text Editor contains entries embedded as a separate content block; within the flow of text; and as a hyperlink to another Contentstack entry.

**Note**: Contentstack’s [SDKs](/docs/developers/#platforms-and-sdks) help consume the response returned when you create an entry containing embedded objects. You can then decide what content (fields of the embedded entry, for instance) should be rendered on the frontend.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type for which you want to create an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in the which you want to create the entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
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
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": []
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": [],
		"locale": "en-us",
		"uid": "blt29828a1df3f0c176",
		"created_by": "blt702565fb0d35107f",
		"updated_by": "blt702565fb0d35107f",
		"created_at": "2020-11-13T14:43:44.027Z",
		"updated_at": "2020-11-13T14:43:44.027Z",
		"ACL": {},
		"_version": 1,
		"_in_progress": false
	}
}
```




## Create an entry with embedded assets in RTE

### Create an entry with embedded assets in RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE assets request allows you to embed assets inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a maximum of **100 components**, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed assets inside the Rich Text as downloadable or display images within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded asset as a separate HTML element, you need to wrap the asset component inside the <div> HTML tag. To refer to the asset of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded asset)
- data-sys-asset-uid: To specify the unique ID of the asset that you want to embed inside the editor
- sys-style-type: You can pass display or download to specify whether the embedded asset should be downloadable or act as a display image
- type: To specify the type of object embedded inside the rich text, e.g., asset

**Tip**: An embedded asset works exactly like the [Reference](../../../../cs-docs/developers/create-content-types/reference.md) field. When you update the details of an embedded asset or replace the source asset with another asset, the Rich Text Editor automatically updates the embedded HTML component with the latest version of that asset.

Here’s a sample of rich text that contains embedded assets:

```
"rich_text_editor": "

Embedded asset as display image:

Embedded asset as downloadable image:

"
```

**Note**: Contentstack’s [SDKs](/docs/developers/sdks/) help consume the response returned when you create an entry containing embedded objects. You can then render the embedded assets on the frontend whenever required.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type for which you want to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in the which you want to create the entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
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
	"entry": {
		"title": "sample entry",
		"url": "/sample-entry",
		"rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
		"tags": []
	}
}
```

#### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "sample entry",
        "url": "/sample-entry",
        "rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt0cc9749011036398",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T15:18:25.887Z",
        "updated_at": "2020-11-13T15:18:25.887Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```




## Update embedded RTE objects

### Update embedded RTE objects

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update embedded RTE objects request lets you update the embedded entries or assets placed inside the Rich Text Editor field of an entry.

In the 'Body' section, provide the updated Rich Text Editor information in JSON format.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

**Tip**: You can either replace the embedded asset with another or change the style (downloadable or displayable) in which the asset has been embedded inside the editor.

Here’s a sample of updated Rich Text Editor content:

```
"rich_text_editor": "

Updated embedded asset to downloadable image:

Updated embedded entry inline with text:

"
```

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to update an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry of which you want to update embedded objects.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language of which you want to update an entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
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
    "entry": {
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": []
    }
}
```

#### Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt8fdd3f0a4313dece",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T17:03:18.470Z",
        "updated_at": "2020-11-13T17:58:43.300Z",
        "ACL": {},
        "_version": 2,
        "_in_progress": false
    }
}
```




## Get information on embedded RTE objects

### Get information on embedded RTE objects

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&include_embedded_items[]=BASE`

The Get information on embedded RTE objects request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.

To configure the permissions for your application via OAuth, please include the cm.entries.management:read scope.   
If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the include_embedded_items[]=BASE query parameter.

You can view information about the embedded objects under the _embedded_items parameter in the JSON response body.

**Note**: Contentstack’s [Content Delivery SDKs](../../../../cs-docs/developers/fetch-content.md#fetch-content-using-content-delivery-sdks) help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the frontend however required.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that contains entries with embedded objects. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry of which you wish to fetch embedded object information.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language of which the entries need to be included.
  Default: `en-us`
- **include_embedded_items[]** (optional)
  Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field.
  Default: `BASE`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "entry":{
        "title":"example",
        "url":"/example",
        "rich_text_editor":"<p>This is a sample article:</p><div class=\"redactor-component embedded-entry block-entry\" data-sys-entry-uid=\"blt60e06920a98836a6\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"my_homepage\" sys-style-type=\"block\" type=\"entry\"></div>\n<p>Image for reference:</p><figure class=\"embedded-asset\" data-sys-asset-filelink=\"https://images.contentstack.io/v3/assets/blt38776c9acaa22eh3/bltdd7ea64b0ed4hft3/601154640839e910126d96eg/download\" data-sys-asset-uid=\"bltdd7ea64b0ed4fdb6\" data-sys-asset-filename=\"Sample_Image.png\" data-sys-asset-contenttype=\"image/png\" type=\"asset\" sys-style-type=\"display\"></figure>",
        "tags":[
            
        ],
        "locale":"en-us",
        "uid":"blt39b7fd7860cc900f",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2021-09-17T08:25:07.139Z",
        "updated_at":"2021-09-17T08:25:07.139Z",
        "_version":1,
        "_in_progress":true,
        "_embedded_items":{
            "rich_text_editor":[
                {
                    "title":"Demo Entry",
                    "url":"/demo",
                    "reference":[
                        "blte95c40e1c723e983"
                    ],
                    "tags":[
                        "demo"
                    ],
                    "locale":"en-us",
                    "uid":"blt60e06920a98836a6",
                    "created_by":"blt42e55757d70d5f81026a2b9f",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "created_at":"2020-04-08T03:05:37.254Z",
                    "updated_at":"2021-03-23T09:19:59.878Z",
                    "_content_type_uid":"my_homepage",
                    "ACL":{
                        
                    },
                    "_version":12,
                    "_in_progress":false,
                    "employee_address":[
                        {
                            "rich_text_editor":"<p><img src=\"https://images.contentstack.io/v3/assets/blt38776c9acaae33b3/blt82640f35115b64e7/5e8c6f1505ab2062f3a1b822/download\" data-sys-asset-uid=\"blt82640f35115b64e7\" alt=\"Modular Blocks within Global.png\" style=\"background-color: initial; display: block; margin: auto;\">Sample text.</p>",
                            "_metadata":{
                                "uid":"csc8c89feb26118172"
                            },
                            "boolean":true
                        },
                        {
                            "rich_text_editor":"<p>This is sample text.</p>",
                            "_metadata":{
                                "uid":"cs1d57fbd82e175ba7"
                            },
                            "boolean":true
                        }
                    ],
                    "_workflow":{
                        "uid":"draft",
                        "updated_at":"2021-01-15T07:39:19.361Z",
                        "updated_by":"blt6563a9b067fc1bc9",
                        "version":11,
                        "assigned_to":[
                            
                        ],
                        "assigned_by_roles":[
                            
                        ],
                        "due_date":"2021-01-26"
                    },
                    "publish_details":[
                        {
                            "environment":"blt53fbd8ad11c50150",
                            "locale":"en-us",
                            "time":"2021-04-15T14:01:27.846Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"en-us",
                            "time":"2021-08-25T03:57:47.466Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"en-us",
                            "time":"2021-08-24T05:31:55.910Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"ja-jp",
                            "time":"2021-08-25T03:57:47.481Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"ja-jp",
                            "time":"2021-08-24T05:31:55.917Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"fr-fr",
                            "time":"2021-01-15T07:39:38.340Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":1
                        }
                    ]
                },
                {
                    "uid":"bltdd7ea64b0ed4fdb6",
                    "created_at":"2021-01-27T11:54:12.316Z",
                    "updated_at":"2021-01-27T11:54:12.316Z",
                    "created_by":"blt6563a9b067fc1bc9",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "content_type":"image/png",
                    "file_size":"54478",
                    "tags":[
                        
                    ],
                    "filename":"Sample_Image.png",
                    "url":"https://images.contentstack.io/v3/assets/blt38776c9acaae66r3/bltdd7ea64b0ed4hdr4/601154640839e910126d64r2/download",
                    "ACL":[
                        
                    ],
                    "parent_uid":null,
                    "_version":1,
                    "title":"Sample_Image.png",
                    "_content_type_uid":"sys_assets",
                    "publish_details":[
                        
                    ]
                }
            ]
        },
        "publish_details":[
            
        ]
    }
}
```

