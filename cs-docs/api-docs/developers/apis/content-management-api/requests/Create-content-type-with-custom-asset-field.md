---
title: "Create content type with custom asset field"
description: POST /content_types
url: developers/apis/content-management-api/requests/create-content-type-with-custom-asset-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-11-20
---

# Create content type with custom asset field


**Method:** `POST`  
**Endpoint:** `/content_types`

The Create content type with custom asset field request is used to create a content type with a custom field that accepts data of type asset.

##### Create content type with taxonomy

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch or alias unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
  "content_type":{
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":3,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{},
        "data_type":"json",
        "reference_to": [
           "sys_assets"
        ]

      }
    ],
    "options":{
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
    }
  }
}
```

**Response (201):**

```json
{
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2022-02-23T19:11:05.596Z",
    "updated_at":"2022-02-23T19:11:05.596Z",
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{
          
        },
        "data_type":"json"
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
          "uid":"blt65eb8e54cb105da1"
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
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
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
