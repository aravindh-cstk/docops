---
title: "Create content type with custom asset field"
description: /content_types
url: /create-content-type-with-custom-asset-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.872Z
updated_at: 2023-11-20T10:12:07.859Z
---

# Create content type with custom asset field

<p>The <span data-type='inlineCode'>Create content type with custom asset field</span> request is used to create a content type with a custom field that accepts data of type asset.</p>
<h5 id="create-content-type-with-taxonomy">Create content type with taxonomy</h5>

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
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Request Body

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

## Response

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

