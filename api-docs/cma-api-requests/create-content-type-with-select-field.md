---
title: "Create content type with select field"
description: /content_types
url: /create-content-type-with-select-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.654Z
updated_at: 2024-03-21T10:35:12.977Z
---

# Create content type with select field

<p>The <span data-type='inlineCode'>Create content type with select field</span> request allows you to add a Select field while creating a content type. You can add choices within the Select field either in the form of single values or key-value pairs. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.content-types.management:write</span> scope.</p><p>To add single-value choices, under <span data-type='inlineCode'>enum</span>, set the <span data-type='inlineCode'>advanced</span> parameter to <span data-type='inlineCode'>false</span> and define the choice values under the <span data-type='inlineCode'>choices</span> parameter.<br /></p><p>The schema of the <strong>Select</strong> field will look as follows:</p><pre>"enum":{<br />    "advanced":false,<br />    "choices":[<br />        {<br />            "value":"1"<br />        },<br />        {<br />            "value":"2"<br />        },<br />        {<br />            "value":"3"<br />        }<br />    ]<br />},<br /></pre><br /><p>To add key-value pairs as choices, under <span data-type='inlineCode'>enum</span>, set the <span data-type='inlineCode'>advanced</span> parameter to <span data-type='inlineCode'>true</span> and define the key-value choices under the <span data-type='inlineCode'>choices</span> parameter.</p><p>The schema of the <strong>Select</strong> field that contains key-value pairs will look as follows:</p><pre>"enum":{<br />    "advanced":true,<br />    "choices":[<br />        {<br />            "key":"New York",<br />            "value":"NY"<br />        },<br />        {<br />            "key":"India",<br />            "value":"IN"<br />        },<br />        {<br />            "key":"Australia",<br />            "value":"AUS"<br />        }<br />    ]<br />},<br /></pre><br /><p class="add-resource"><strong>Additional Resource:</strong> In the “Body” section, you need to provide the updated schema of your content type with the select field schema. You can refer to the <a href="/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select" target="_self">Select field JSON schema</a> document to know how you can add/update schema for the Select field in your content type through API.</p><h5 id="create-content-type-with-json-rte">Create Content Type with JSON RTE</h5>

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

## Response

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

