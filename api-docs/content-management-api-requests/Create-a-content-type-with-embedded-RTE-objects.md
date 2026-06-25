---
title: "Create a content type with embedded RTE objects"
description: POST /content_types
url: developer-apis/content-management-api-requests/create-a-content-type-with-embedded-rte-objects
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Create a content type with embedded RTE objects

**POST** `/content_types`

The Create a content type with embedded RTE objects request lets you create a content type, which supports embedded objects inside its RTE field.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type (refer [JSON schema for creating a content type](../../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md)).

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

**Additional Resource**: Refer to the [Rich Text Field Schema](../../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#html-based-rich-text-editor) guide to understand how you can format the content entered in the field.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

