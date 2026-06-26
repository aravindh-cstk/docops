---
title: "Create content type with select field"
description: POST /content_types
url: developer-apis/content-management-api-requests/create-content-type-with-select-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Create content type with select field

**POST** `/content_types`

The Create content type with select field request allows you to add a Select field while creating a content type. You can add choices within the Select field either in the form of single values or key-value pairs.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

To add single-value choices, under enum, set the advanced parameter to false and define the choice values under the choices parameter.

The schema of the **Select** field will look as follows:

```
"enum":{
    "advanced":false,
    "choices":[
        {
            "value":"1"
        },
        {
            "value":"2"
        },
        {
            "value":"3"
        }
    ]
},
```

  

To add key-value pairs as choices, under enum, set the advanced parameter to true and define the key-value choices under the choices parameter.

The schema of the **Select** field that contains key-value pairs will look as follows:

```
"enum":{
    "advanced":true,
    "choices":[
        {
            "key":"New York",
            "value":"NY"
        },
        {
            "key":"India",
            "value":"IN"
        },
        {
            "key":"Australia",
            "value":"AUS"
        }
    ]
},
```

  

**Additional Resource:** In the “Body” section, you need to provide the updated schema of your content type with the select field schema. You can refer to the [Select field JSON schema](../../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#select) document to know how you can add/update schema for the Select field in your content type through API.

##### Create Content Type with JSON RTE

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
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
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
        "title":"Page",
        "uid":"page",
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
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_one",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_two",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
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
        "created_at":"2015-03-13T07:37:03.494Z",
        "updated_at":"2015-03-13T07:37:03.494Z",
        "title":"Page",
        "uid":"page",
        "inbuilt_class":false,
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
                "mandatory":true,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            }
        ],
        "last_activity":[
            
        ],
        "maintain_revisions":true,
        "description":"",
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/",
            "singleton":false
        },
        "abilities":{
            
        },
        "DEFAULT_ACL":{
            "roles":[
                
            ],
            "users":[
                {
                    "uid":"abcdef1234567890",
                    "read":true,
                    "create":false
                }
            ],
            "others":{
                "read":false,
                "create":false
            }
        },
        "SYS_ACL":{
            "others":{
                "read":false,
                "update":false,
                "delete":false,
                "create":false,
                "publish":false,
                "sub_acl":{
                    "read":false,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "publish":false
                }
            },
            "roles":[
                {
                    "uid":"abcd29513cc6e50299",
                    "read":true,
                    "update":true,
                    "delete":true,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                },
                {
                    "uid":"apqr13cc6e506e50299",
                    "read":true,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                }
            ]
        }
    }
}
```

