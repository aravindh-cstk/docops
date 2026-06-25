---
title: "Create content type with JSON RTE plugin"
description: POST /content_types
url: developer-apis/content-management-api-requests/create-content-type-with-json-rte-plugin
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Create content type with JSON RTE plugin

**POST** `/content_types`

The Create content type with JSON RTE plugin request allows you to create a content type that includes JSON RTE plugins within the JSON Rich Text Editor.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the UIDs of the JSON RTE plugins you want to add within the plugins parameter.

The schema for this is as follows:

```
"plugins":[
          "bag98lo5467qs532l0c",
          "ang22qw1234pl345g8j",
          "pnr65op1258hs807k9l"
        ]
```

**Note:** The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is **five**.

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
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
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
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
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
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
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
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2021-12-16T10:27:15.897Z",
    "updated_at":"2021-12-16T10:27:15.897Z",
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "unique":false,
        "multiple":false,
        "mandatory":false,
        "non_localizable":false
      },
      {
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
      }
    ],
    "last_activity":{
      
    },
    "maintain_revisions":true,
    "description":"",
    "DEFAULT_ACL":{
      "others":{
        "read":false,
        "create":false
      },
      "users":[
        {
          "read":true,
          "sub_acl":{
            "read":true
          },
          "uid":"blt24edc44154f3eb37"
        }
      ],
      "management_token":{
        "read":true
      }
    },
    "SYS_ACL":{
      "roles":[
        
      ],
      "others":{
        "read":false,
        "create":false,
        "update":false,
        "delete":false,
        "sub_acl":{
          "read":false,
          "create":false,
          "update":false,
          "delete":false,
          "publish":false
        }
      }
    },
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
    },
    "abilities":{
      "get_one_object":true,
      "get_all_objects":true,
      "create_object":true,
      "update_object":true,
      "delete_object":true,
      "delete_all_objects":true
    }
  }
}
```

