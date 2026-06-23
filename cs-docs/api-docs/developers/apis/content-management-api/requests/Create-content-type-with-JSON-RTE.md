---
title: "Create content type with JSON RTE"
description: POST /content_types
url: developers/apis/content-management-api/requests/create-content-type-with-json-rte
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Create content type with JSON RTE

**POST** `/content_types`

The Create content type with JSON RTE request shows you how to add a JSON RTE field while creating a content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type with the JSON RTE schema as follows. You can find more details in the [JSON schema of the JSON RTE](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#json-rich-text-editor) document.

```
{
  "data_type":"json",
  "display_name":"JSON RTE",
  "uid":"json_rte",
  "field_metadata":{
    "allow_json_rte":true,
    "rich_text_type":"advanced",
    "description":"",
    "default_value":""
  },
  "reference_to":[
    "content_type_uid"
  ],
  "non_localizable":false,
  "multiple":false,
  "mandatory":false,
  "unique":false
}
```

Under the reference_to parameter, mention the UIDs of the content types whose entries you wish to embed within the JSON RTE field.

##### Create content type with custom asset field

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
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
  "content_type":{
    "title":"JSON test",
    "uid":"json_test",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "mandatory":true,
        "unique":true,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "mandatory":false,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false,
        "unique":false
      },
      {
        "data_type":"json",
        "display_name":"JSON RTE",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "description":"",
          "default_value":""
        },
        "reference_to":[
          "blog_posts"
        ],
        "non_localizable":false,
        "multiple":false,
        "mandatory":false,
        "unique":false
      }
    ],
    "options":{
      "is_page":true,
      "singleton":false,
      "title":"title",
      "sub_title":[
        
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
        "created_at": "2021-07-20T18:15:37.107Z",
        "updated_at": "2021-07-20T18:15:37.107Z",
        "title": "JSON test",
        "uid": "json_test",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "mandatory": true,
                "unique": true,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "mandatory": false,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false,
                "unique": false
            },
            {
                "data_type": "json",
                "display_name": "JSON RTE",
                "uid": "json_rte",
                "field_metadata": {
                    "allow_json_rte": true,
                    "description": "",
                    "default_value": ""
                },
                "reference_to": [
                    "blog_posts"
                ],
                "non_localizable": false,
                "multiple": false,
                "mandatory": false,
                "unique": false
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
                    "uid": "blt119d2427a94457f9"
                }
            ],
            "management_token": {
                "read": true
            }
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
        },
        "options": {
            "is_page": true,
            "singleton": false,
            "title": "title",
            "sub_title": [],
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

