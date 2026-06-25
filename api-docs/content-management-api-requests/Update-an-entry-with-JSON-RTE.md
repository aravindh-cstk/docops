---
title: "Update an entry with JSON RTE"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: developer-apis/content-management-api-requests/update-an-entry-with-json-rte
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update an entry with JSON RTE

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update an entry with JSON RTE call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

**Note:** While updating an entry with the JSON RTE field, the same block UID generated while creating an entry must be used.

The schema to update an embedded entry within the JSON RTE field is as follows:

```
{
  "children":[
    {
      "text":"Embedded entry:",
      "bold":true
    },
    {
      "uid":"v4_unique_id",
      "type":"reference",
      "attrs":{
        "class-name":"embedded-entry redactor-component inline-entry",
        "content-type-uid":"content_type_uid",
        "display-type":"inline_or_block",
        "entry-uid":"uid_of_the_entry_you_want_to_embed",
        "locale":"locale_code",
        "type":"entry",
      },
      "children":[
        {
          "text":""
        }
      ]
    },
    {
      "text":"continued text after embedding an entry updated."
    }
  ],
  "type":"p",
  "uid":"v4_unique_id",
  "attrs":{
  }
}
```

The schema to update an embedded asset within the JSON RTE field is as follows:

```
{
  "children":[
    {
      "text":"Embedded asset:",
      "bold":true
    },
    {
      "uid":"v4_unique_id",
      "type":"reference",
      "attrs":{
        "asset-link":"asset_link",
        "asset-name":"asset_name",
        "asset-type":"image/jpg",
        "asset-uid":"uid_of_the_asset_you_want_to_embed",
        "class-name":"embedded-asset",
        "content-type-uid":"sys_assets",
        "display-type":"display",
        "inline":true,
        "type":"asset",
        },
      "children":[
        {
          "text":""
        }
      ]
    },
    {
      "text":"continued text after embedding an asset",
      "bold":true
    }
  ],
  "type":"p",
  "uid":"v4_unique_id",
  "attrs":{
  }
}
```

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update
  Default: `your_entry_uid`

## Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in
  Default: `locale_code`
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
  "entry":{
    "title":"Example One",
    "url":"/example-one",
    "json_rte":{
      "children":[
        {
          "children":[
            {
              "text":"Hello world! This is paragraph 1. And it has been updated with new information."
            }
          ],
          "type":"p",
          "uid":"hjsbhys1234",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"This is paragraph 2. "
            },
            {
              "text":"It has good content. ",
              "bold":true
            },
            {
              "text":"Enjoy the good reading!",
              "bold":true,
              "italic":true,
              "align":"right"
            }
          ],
          "type":"p",
          "uid":"ashbhushus5678",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"This is paragraph 3."
            }
          ],
          "type":"p",
          "uid":"kjiwueoiu76thyi70",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"Embedded entry:",
              "bold":true
            },
            {
              "uid":"iyriuyeu098hbhdbd654",
              "type":"reference",
              "attrs":{
                "class-name":"embedded-entry redactor-component inline-entry",
                "content-type-uid":"blog_posts",
                "display-type":"inline",
                "entry-uid":"bltf4838a625cd10cc2",
                "locale":"en-us",
                "type":"entry",
                },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"obmbzxnc34hh6d634",
          "attrs":{
          }
        },
        {
          "children":[
            {
              "text":"Embedded asset:",
              "bold":true
            },
            {
              "uid":"oiweywehbhsgdt64hgyt67",
              "type":"reference",
              "attrs":{
                "asset-link":"https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt3cc74bb0fb71b4dd/60f7153194a85a104e7e5b52/Banner.png",
                "asset-name":"Banner.png",
                "asset-type":"image/png",
                "asset-uid":"blt3cc74bb0fb71b4dd",
                "class-name":"embedded-asset",
                "content-type-uid":"sys_assets",
                "display-type":"display",
                "inline":true,
                "type":"asset",
               },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an asset",
              "bold":true
            }
          ],
          "type":"p",
          "uid":"llkkj5674hgnbc782378746",
          "attrs":{
           }
        }
      ],
      "type":"doc",
      "uid":"lkjwbhdjdnff77632346",
      "attrs":{
       }
    }
  }
}
```

## Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "title": "Example One",
        "url": "/example-one",
        "json_rte": {
            "children": [
                {
                    "children": [
                        {
                            "text": "Hello world! This is paragraph 1. And it has been updated with new information."
                        }
                    ],
                    "type": "p",
                    "uid": "hjsbhys1234",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 2. "
                        },
                        {
                            "text": "It has good content. ",
                            "bold": true
                        },
                        {
                            "text": "Enjoy the good reading!",
                            "bold": true,
                            "italic": true,
                            "align": "right"
                        }
                    ],
                    "type": "p",
                    "uid": "ashbhushus5678",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 3."
                        }
                    ],
                    "type": "p",
                    "uid": "kjiwueoiu76thyi70",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded entry:",
                            "bold": true
                        },
                        {
                            "uid": "iyriuyeu098hbhdbd654",
                            "type": "reference",
                            "attrs": {
                                "class-name": "embedded-entry redactor-component inline-entry",
                                "content-type-uid": "blog_posts",
                                "display-type": "inline",
                                "entry-uid": "bltf4838a625cd10cc2",
                                "locale": "en-us",
                                "type": "entry"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an entry."
                        }
                    ],
                    "type": "p",
                    "uid": "obmbzxnc34hh6d634",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded asset:",
                            "bold": true
                        },
                        {
                            "uid": "oiweywehbhsgdt64hgyt67",
                            "type": "reference",
                            "attrs": {
                                "asset-link": "https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt3cc74bb0fb71b4dd/60f7153194a85a104e7e5b52/Banner.png",
                                "asset-name": "Banner.png",
                                "asset-type": "image/png",
                                "asset-uid": "blt3cc74bb0fb71b4dd",
                                "class-name": "embedded-asset",
                                "content-type-uid": "sys_assets",
                                "display-type": "display",
                                "inline": true,
                                "type": "asset"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an asset",
                            "bold": true
                        }
                    ],
                    "type": "p",
                    "uid": "llkkj5674hgnbc782378746",
                    "attrs": {}
                }
            ],
            "type": "doc",
            "uid": "lkjwbhdjdnff77632346",
            "attrs": {},
            "_version": 2
        },
        "locale": "en-us",
        "uid": "blt00364931ef487280",
        "created_by": "blte944d180178d0d41",
        "updated_by": "blte944d180178d0d41",
        "created_at": "2021-07-20T18:20:04.857Z",
        "updated_at": "2021-07-20T18:27:01.856Z",
        "ACL": {},
        "_version": 2,
        "tags": [],
        "_in_progress": false
    }
}
```

