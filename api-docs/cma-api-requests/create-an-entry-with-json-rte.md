---
title: "Create an entry with JSON RTE"
description: /content_types/{content_type_uid}/entries?locale={locale_code}
url: /create-an-entry-with-json-rte
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.095Z
updated_at: 2026-07-20T18:20:06.455Z
---

# Create an entry with JSON RTE

<p>The <span data-type='inlineCode'>Create an entry with JSON RTE</span> request lets you create a new entry for a selected content type that contains a JSON RTE field.</p><p><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth,&nbsp;</span>please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.<br />When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.</p><p>If you selected the <strong>Embed Objects</strong> option while creating the content type, you can embed entries within your JSON RTE field. In the 'Body' section, you need to specify the details of the entry you wish to embed.</p><p class="note"><strong>Note:</strong> When creating an entry with JSON RTE, if a duplicate <span data-type='inlineCode'>doc_uid</span> is detected, the request will throw a "Duplicate UID" error in the response.</p><p>The schema to embed an entry within the JSON RTE field is as follows:</p><pre>  {
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
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"v4_unique_id",
          "attrs":{
          }
        }
</pre><p class="note"><strong>Note:</strong> The <span data-type='inlineCode'>children</span> block should be added while creating an entry with a referenced entry and asset to help point the cursor after embedding an entry or asset. The schema of this block is as follows:</p><pre>{
"children":[
{
"text":""
}
]
}
</pre><p>The schema to embed assets within the JSON RTE field is as follows:</p><pre>{
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
        "content-type-uid":"sys_assets", //System generated typename that points to all referenced assets
        "display-type":"display",
        "inline":false,
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
</pre><p class="note"><strong>Note:</strong> The UID within the block schema can be generated using any online V4 Unique ID generators. This block UID should be unique across the stack.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to create an entry.&nbsp;The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>

## Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in<br>
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
  "entry":{
    "title":"Example One",
    "url":"/example-one",
    "json_rte":{
      "children":[
        {
          "children":[
            {
              "text":"Hello world! This is paragraph 1."
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
                "asset-link":"https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt8c5a3355119db9cc/60334df62e76da7e3b023327/tech.jpg",
                "asset-name":"tech.jpg",
                "asset-type":"image/jpg",
                "asset-uid":"blt8c5a3355119db9cc",
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

## Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Example One",
        "url": "/example-one",
        "json_rte": {
            "children": [
                {
                    "children": [
                        {
                            "text": "Hello world! This is paragraph 1."
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
                                "asset-link": "https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt8c5a3355119db9cc/60334df62e76da7e3b023327/tech.jpg",
                                "asset-name": "tech.jpg",
                                "asset-type": "image/jpg",
                                "asset-uid": "blt8c5a3355119db9cc",
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
            "_version": 1
        },
        "locale": "en-us",
        "uid": "blt00364931ef487280",
        "created_by": "blte944d180178d0d41",
        "updated_by": "blte944d180178d0d41",
        "created_at": "2021-07-20T18:20:04.857Z",
        "updated_at": "2021-07-20T18:20:04.857Z",
        "ACL": {},
        "_version": 1,
        "tags": [],
        "_in_progress": false
    }
}
```

