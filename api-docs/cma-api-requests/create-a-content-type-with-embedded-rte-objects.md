---
title: "Create a content type with embedded RTE objects"
description: /content_types
url: /create-a-content-type-with-embedded-rte-objects
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.413Z
updated_at: 2025-07-01T05:09:37.849Z
---

# Create a content type with embedded RTE objects

<p>The <span data-type='inlineCode'>Create a content type with embedded RTE objects</span> request lets you create a content type, which supports embedded objects inside its RTE field.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.content-types.management:write</span> scope.</p>
<p>In the “Body” section, you need to provide the complete schema of the content type (refer <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type" target="_self">JSON schema for creating a content type</a>).</p>
<p>To embed entries within a specific RTE, pass the <span class="code">reference_to parameter</span> with valid content type UIDs to determine entries of which content type(s) can be embedded inside the editor.</p>
<p class="note"><strong>Note</strong>: The max number of content types that can be referenced within a single Rich Text Editor field is <strong>10</strong>.</p>
<p>To embed assets within a specific RTE, you can pass "<span data-type='inlineCode'>sys_assets</span>" value within the <span class="code">reference_to array </span> along with the content type UIDs.</p>
<p>Here’s a sample schema of a Rich Text Editor field that supports embedded entries and assets:</p><pre>{<br />    "data_type":"text",<br />    "display_name":"Sample RTE",<br />    "uid":"sample_rich_text_editor",<br />    "field_metadata":{<br />        "..."<br />    },<br />    "reference_to":[<br />        "content_type_UID_1",<br />        "content_type_UID_1",<br />        "sys_assets"<br />    ],<br />    "..."<br />}<br /></pre>
<p class="add-resource"><strong>Additional Resource</strong>: Refer to the <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type#html-based-rich-text-editor" target="_self">Rich Text Field Schema</a> guide to understand how you can format the content entered in the field.</p>

**API Endpoint**: `/content_types`

**Method**: `POST`

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

## Response

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

