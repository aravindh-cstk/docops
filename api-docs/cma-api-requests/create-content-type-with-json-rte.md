---
title: "Create content type with JSON RTE"
description: /content_types
url: /create-content-type-with-json-rte
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.829Z
updated_at: 2024-03-21T10:39:28.707Z
---

# Create content type with JSON RTE

<p>The <span data-type='inlineCode'>Create content type with JSON RTE</span> request shows you how to add a JSON RTE field while creating a content type. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.content-types.management:write</span> scope.</p><p>In the “Body” section, you need to provide the complete schema of the content type with the JSON RTE schema as follows. You can find more details in the <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type#json-rich-text-editor" target="_self">JSON schema of the JSON RTE</a> document.</p><pre>{<br />  "data_type":"json",<br />  "display_name":"JSON RTE",<br />  "uid":"json_rte",<br />  "field_metadata":{<br />    "allow_json_rte":true,<br />    "rich_text_type":"advanced",<br />    "description":"",<br />    "default_value":""<br />  },<br />  "reference_to":[<br />    "content_type_uid"<br />  ],<br />  "non_localizable":false,<br />  "multiple":false,<br />  "mandatory":false,<br />  "unique":false<br />}<br /></pre><p>Under the <span data-type='inlineCode'>reference_to</span> parameter, mention the UIDs of the content types whose entries you wish to embed within the JSON RTE field.</p><h5 id="create-content-type-with-custom-asset-field">Create content type with custom asset field</h5>

**API Endpoint**: `/content_types`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
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

## Response

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

