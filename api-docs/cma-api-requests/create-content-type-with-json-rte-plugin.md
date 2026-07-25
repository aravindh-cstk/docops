---
title: "Create content type with JSON RTE plugin"
description: /content_types
url: /create-content-type-with-json-rte-plugin
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.832Z
updated_at: 2024-04-25T06:16:40.153Z
---

# Create content type with JSON RTE plugin

<p>The <span data-type='inlineCode'>Create content type with JSON RTE plugin</span> request allows you to create a content type that includes JSON RTE plugins within the JSON Rich Text Editor.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.content-types.management:write</span> scope.</p>
<p>In the “Body” section, you need to provide the UIDs of the JSON RTE plugins you want to add within the plugins parameter.</p>
<p>The schema for this is as follows:</p><pre>"plugins":[<br />          "bag98lo5467qs532l0c",<br />          "ang22qw1234pl345g8j",<br />          "pnr65op1258hs807k9l"<br />        ]<br /></pre>
<p class="note"><strong>Note:</strong> The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is <strong>five</strong>.</p>

**API Endpoint**: `/content_types`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

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

## Response

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

