---
title: "CMA | Entries"
description: Create, update, fetch, publish, localize, and manage entries with Contentstack management endpoints.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/entries
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Entries

An [entry](/docs/content-managers/author-content/) is the actual piece of content created using one of the defined [content types](../../../../cs-docs/developers/create-content-types/about-content-types.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Get all Entries

### Get all entries

**GET** `/content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get all entries API retrieves all entries for a specified content type in a stack. The response returns entry data in JSON format. You can also specify parameters such as locale, environment, workflow details, and draft merging to customize the results.

If you are using OAuth authentication, include the cm.entries.management:read scope to configure the required permissions for this request.

Use the apply_draft query parameter to merge draft entries with their corresponding base entries. Draft entries are treated as a special type of variant and are merged using the existing entry variant infrastructure while preserving draft-specific metadata.

To include metadata associated with entries, pass the include_metadata query parameter and set its value to true. The response includes entry metadata under the _metadata key, associated with the relevant extension UID.

Example structure:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

You can also extend this API request by adding queries to filter or refine results. Use the query parameter in the URL and provide the query in JSON format.

**Additional Resource**: For more information about supported queries, refer to the [Queries](../../../api-detail/content-delivery-api.md#queries) section of the Content Delivery API documentation.

For example, to retrieve entries in a specific workflow stage, pass a query using _workflow.uid, where uid is the workflow stage UID.

**Tip**: This request returns the first **100 entries** for the specified content type. To retrieve additional entries, use [pagination](../../../api-detail/content-delivery-api.md#pagination).

#### URL Parameters

- **content_type_uid** (required)
  The unique ID of the content type whose entries you want to retrieve. The UID is generated from the title of the content type and is unique within a stack.
  Default: `product`

#### Query Parameters

- **apply_draft** (optional)
  Set to true to retrieve and merge the draft entry (if it exists) with the base entry.
  Default: `true`
- **locale** (optional)
  Specify the locale from which to retrieve entries. If not provided, the master locale is used.
  Default: `en-us`
- **include_workflow** (optional)
  Set to true to include workflow details for each entry in the response.
  Default: `false`
- **include_publish_details** (optional)
  Set to true to include publish details for each entry.
  Default: `true`
- **include_branch** (optional)
  Set to true to include the _branch top-level key in the response. This key contains the unique ID of the branch where the entry resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "entries": [
        {
            "title": "Navigate the Heart of London via the Iconic London Tube",
            "url": "/navigate-the-heart-of-london-via-the-iconic-london-tube",
            "summary": "Immerse yourself in the vibrant energy of London as you navigate the world-famous London Tube. With its extensive network of underground lines, the Tube is not just a means of transportation but an integral part of the city's identity. Join us as we delve into the history, efficiency, and cultural significance of the London Tube, guiding you through an exciting exploration of the heart of London.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "d6e2********************ad5afb25",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "49a5********************6b8b4ce9",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt8c734851da83deb2",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:05:35.848Z",
            "updated_at": "2026-03-16T19:05:35.848Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        },
        {
            "title": "Unleash the Speed: Japan's Bullet Train (Shinkansen)",
            "url": "/unleash-the-speed-japan-s-bullet-train-shinkansen-",
            "summary": "Get ready to experience the marvel of Japanese engineering as you board the legendary Bullet Train, also known as the Shinkansen. Zooming across the picturesque landscapes of Japan, the Shinkansen offers a thrilling, efficient, and comfortable mode of transportation. Join us as we embark on a high-speed adventure through the Land of the Rising Sun, exploring the wonders and convenience of Japan's iconic Bullet Train.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "620b********************c7a8f9a",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "0e70********************db02b32",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt0234e367de96772b",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:02:22.337Z",
            "updated_at": "2026-03-16T19:02:22.337Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        }
    ]
}
```




## Get a Single Entry

### Get a single entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get a single entry request fetches a particular entry of a content type.

The content of the entry is returned in JSON format. You can also specify the environment and locale of which you wish to retrieve the entries.

To configure the permissions for your application via OAuth, please include the cm.entries.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. In addition to entry publish details, the include_publish_details parameter also fetches the entry metadata publishing details in the response.

**Tip: **Also, if no version is mentioned, this request will retrieve the latest published version of the entry. To retrieve a specific version, make use of the version parameter.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **version** (optional)
  Enter the version number of the entry that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the environment parameter blank.
  Default: `2`
- **locale** (optional)
  Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **include_workflow** (optional)
  Enter 'true' to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: ` [Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"version": 1,
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```




## Create an Entry

### Create an entry

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry call creates a new entry for the selected content type.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

Here are some important scenarios when creating an entry.

**Scenario 1:** If you have a reference field in your content type, here's the format you need to follow to add the data in the ‘Body’ section

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "reference_field_uid": [{
            "uid": "blt111000d1e110b001",
            "_content_type_uid": "referred_content_type_uid"
        }]
    }
}
```

**Scenario 2:** If you need to create an entry that contains asset files, you need to provide the asset UID(s) in the ‘Body’ section.

To add a single file, enter a single UID (file_field_uid). For multiple asset files, enter the asset files’ UIDs (file_field_uid_multiple) in an array. You need to use only one of the following formats.

Here's the JSON schema for both the cases:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "file_field_uid": "asset_uid", // ‘File’ field marked ‘Single’
        "file_field_uid_multiple": ["asset_uid1", "asset_uid2, ..."], // ‘File’ field marked ‘Multiple’
    }
}
```

**Scenario 3:** If you need to add your asset file within a Rich Text Editor, use the following JSON schema:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "rte_field_uid": "

"
    }
}
```

**Note**: In the above code, in place of rte-field-uid, you need to provide the UID of the Rich Text Editor field.

##### Create an Entry with JSON RTE

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`

#### Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"title": "example",
		"url": "/example"
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
                "_in_progress": true
	}
}
```


### Create an entry with JSON RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with JSON RTE request lets you create a new entry for a selected content type that contains a JSON RTE field.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

If you selected the **Embed Objects** option while creating the content type, you can embed entries within your JSON RTE field. In the 'Body' section, you need to specify the details of the entry you wish to embed.

**Note:** When creating an entry with JSON RTE, if a duplicate doc_uid is detected, the request will throw a "Duplicate UID" error in the response.

The schema to embed an entry within the JSON RTE field is as follows:

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
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"v4_unique_id",
          "attrs":{
          }
        }
```

**Note:** The children block should be added while creating an entry with a referenced entry and asset to help point the cursor after embedding an entry or asset. The schema of this block is as follows:

```
{
"children":[
{
"text":""
}
]
}
```

The schema to embed assets within the JSON RTE field is as follows:

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
```

**Note:** The UID within the block schema can be generated using any online V4 Unique ID generators. This block UID should be unique across the stack.

##### Create an Entry with Master Locale

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in
  Default: `locale_code`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

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

#### Sample Response

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


### Create an entry with master locale

**POST** `/content_types/{content_type_uid}/entries`

The Create an entry with master locale request lets you create an entry in the master language of your stack if it does not already exist or has been deleted. You can use the UID of a [localized entry](../../../../cs-docs/developers/multilingual-content/localize-an-entry.md) to convert it into a [master language entry](../../../../cs-docs/developers/multilingual-content/set-the-master-language.md).

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
If the master language is not accessible or does not exist, a custom user role can still create an entry in any of the other available locales. However, the entry in the master language remains non-existent.

In such a scenario, roles with access to the master locale can create an entry in the master language using the UID of the localized entry and the copy_to_master query parameter. The copy_to_master parameter allows you to copy content from the localized entry to the master language entry version of the stack.

When executing the API call, in the ‘Body’ section, you need to provide the content of your entry based on the content type created. You also need to specify the UID of the localized entry for which you want to create an entry in the master locale.

Here’s what your request body should look like:

```
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "localized_entry_uid"
    }
}
```

##### Create an entry with custom asset field

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **copy_to_master** (required)
  Set this parameter to true to copy content from a localized entry to the master language.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "blta1f4ca9e3a6cd764"
    }
}
```

#### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "locale": "en-us",
        "uid": "blta1f4ca9e3a6cd764",
        "created_by": "bltb2472ae3265037b1",
        "updated_by": "bltb2472ae3265037b1",
        "created_at": "2021-11-24T10:10:14.067Z",
        "updated_at": "2021-11-24T10:10:14.067Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```


### Create an entry with custom asset field

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with custom asset field request is used to create an entry with a custom field that accepts data of type asset.

##### Create an entry with taxonomy

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Request

```json
{
  "entry":{
    "title":"Sample Entry",
    "asset_field":{
      "uid":"bltcdc098dc1a665a96",
      "_content_type_uid":"customassetfieldct",
      "unique_identifier":"3344f31f-5f30-428b-b3b5-0305f5db1026",
      "metadata":{
        "preset":{
          "uid":"3344f31f-5f30-428b-b3b5-0305f5db1026",
          "name":"Preset1",
          "options":{
            
          }
        }
      }
    },
    "tags":[
      
    ]
  }
}
```

#### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry",
        "asset_field": {
            "uid": "bltcdc098dc1a665a96",
            "_content_type_uid": "customassetfieldct",
            "unique_identifier": "3344f31f-5f30-428b-b3b5-0305f5db1026",
            "metadata": {
                "preset": {
                    "uid": "3344f31f-5f30-428b-b3b5-0305f5db1026",
                    "name": "Preset1",
                    "options": {}
                }
            },
            "asset": {
                "uid": "bltcdc098dc1a665a96",
                "created_at": "2022-01-04T05:25:59.097Z",
                "updated_at": "2022-01-25T10:37:18.732Z",
                "created_by": "blt3cfef289de5d0c73",
                "updated_by": "blt3cfef289de5d0c73",
                "content_type": "image/jpeg",
                "file_size": "62181",
                "tags": [],
                "filename": "crop_area.jpg",
                "url": "https://dev16-images.contentstack.com/v3/assets/blt7a70757799323168/bltcdc098dc1a665a96/61d3da670c93ef0831bae4dd/crop_area.jpg",
                "ACL": [],
                "is_dir": false,
                "parent_uid": null,
                "_version": 2,
                "title": "crop_area.jpg"
            }
        },
        "tags": [],
        "locale": "en-us",
        "uid": "blt23cda66735c63ad7",
        "created_by": "bltf37273e0002a02fe",
        "updated_by": "bltf37273e0002a02fe",
        "created_at": "2022-02-23T19:17:39.646Z",
        "updated_at": "2022-02-23T19:17:39.646Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```


### Create an entry with taxonomy

**POST** `/content_types/{content_type_uid}/entries`

The Create an entry with taxonomy request lets you create a new entry for a selected content type that contains a taxonomy field.

In the “Body” section, you need to provide the content of your entry based on the content type created and the details of the taxonomy for the specified content type as follows:

```
{
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_1"
      },
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_3"
      }
   ]
}
```

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ]
    }
}
```

#### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ],
        "locale": "en-us",
        "uid": "bltad7a2b9d5597c54c",
        "created_by": "blt4011095e7bc75796",
        "updated_by": "blt4011095e7bc75796",
        "created_at": "2023-11-20T09:58:35.207Z",
        "updated_at": "2023-11-20T09:58:35.207Z",
        "ACL": {},
        "_version": 1,
        "tags": [],
        "_in_progress": false
    }
}
```




## Update an Entry

### Update an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update an entry call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the “Body” section, to update the taxonomy fields, use the following code:

```
{
   "entry":{
      "title":"example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}
```

**Note**: The Update an entry call does not allow you to update the workflow stage for an entry. To update the workflow stage for the entry, use the [Set Entry Workflow Stage](#set-entry-workflow-stage) call.

#####

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update.
  Default: `enter your entry uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entry you need to update.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}
```

#### Sample Response

```json
{
   "notice":"Entry updated successfully.",
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ],
      "tags":[
         
      ],
      "locale":"en-us",
      "uid":"blt797597f83fafc900",
      "created_by":"bltefbae0de565c0a44",
      "updated_by":"blt4011095e7bc75796",
      "created_at":"2023-11-20T11:26:00.698Z",
      "updated_at":"2024-07-01T12:36:50.925Z",
      "ACL":{
         
      },
      "_version":18,
      "_in_progress":false
   }
}
```


### Update an entry with JSON RTE

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

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update
  Default: `your_entry_uid`

#### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in
  Default: `locale_code`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

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

#### Sample Response

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




## Atomic Updates to Entries

Atomic operations are particularly useful when we do not want content collaborators to overwrite data. Though it works efficiently for singular fields, these operations come handy especially in case of fields that are marked as “Multiple”.

To achieve data atomicity, we have provided support for following atomic operators: PUSH, PULL, UPDATE, ADD, and SUB.

##### PUSH Operation

### PUSH Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The PUSH operation allows you to “push” (or append) data into an array without overriding an existing value.

For example, you have an entry with a Number field (named “Multiple Number”), marked as “Multiple” and with the data, “1,” “4,” “5,” and you need to add “2” and “3” to it. In this case, you need to use the PUSH operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PUSH": {
                "data": [
                    2,
                    3
                ]
            }
        }
    }
}
```

Say you need to push specific data (say “abc”) into a field named “Demo Field” which is within a “Group” field marked as “Multiple”. You need to use the “PUSH” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PUSH": {
                "data": {
                    "demo_field": "abc"
                }
            }
        }
    }
}
```

##### PULL Operation

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"PUSH": {
				"data": [
					2,
					3
				]
			}
		},
		"multiple_group": {
			"PUSH": {
				"data": {
					"demo_field": "abc"
				}
			}
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "No Description",
		"call_to_action_link": {
			"title": "Click here",
			"href": "https://www.contentstack.com/docs"
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:55:35.708Z",
		"_version": 2,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": [{
			"demo_field": "abc"
		}]
	}
}
```


### PULL Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

ThePULL operationallows you to pull data from an array field based on a query passed.

For example, you have an entry with a “Number” field named “Multiple Number” which has the values, “1,” “2,” “3,” “4,” and “5”, and you need to remove “2” and “ 3”. You need to use the PULL operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PULL": {
                "query": {
                    "$in": [
                        2,
                        3
                    ]
                }
            }
        }
    }
}
```

Another example is if you need to pull specific field data from a field (say a “Group” field) marked as “Multiple,” where the field name is “Demo Field” and the specific value to be pulled is “abc”. You need to use the “PULL” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PULL": {
                "query": {
                    "demo_field": {
                        "$in": ["abc"]
                    }
                }
            }
        }
    }
}
```

**Note:** Here are certain limitations to the PULL request:  
1. Currently, a PULL operation on multiple fields will retrieve the result of only ONE field i.e., if you include multiple fields in your PULL request, you will be able to retrieve the data of only the first mentioned field.  
2. PULL query does not work on Nested Group fields.

##### UPDATE Operation

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"PULL": {
				"query": {
					"$in": [
						2,
						3
					]
				}
			}
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 4,
		"_in_progress": true,
		"multiple_number": [
			1,
			4,
			5
		]
	}
}
```


### UPDATE Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The UPDATE operation allows you to update data at a specific index. This operation works for both singular fields and fields marked “Multiple”.

For example, you have an entry with a “Number” (named “Multiple Number”) field which has the values, “6,” “2,” “3,” “4,” and “5”, and you need to replace the number at the first index (a[0]) i.e., “6” with “1”. In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "UPDATE": {
                "index": 0,
                "data": 1
            }
        }
    }
}
```

#### UPDATE Operation for Group Field

For example, consider a multi-group field - "banner" with 2 instances, and with titles “banner 1” and “banner 2”.  Using the update operation, to replace the title at the second instance (a[1]) i.e., “Banner 2” with “New update” and link title at the second index with "New level 2 update through CMA call". In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": { 
        "group": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "title": "New update",
                    "link": {
                        "UPDATE": {
                            "data": {
                                "title": "New level 2 update through CMA call"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation you can update a single/multi-level group field without sending the whole object array. 

#### UPDATE Operation for Nested Modular Blocks

For example, consider the following modular blocks nesting scenario:

Within "content_container" modular blocks, there is a "link_module" block. Within the link_module block, there are "link_components" modular blocks. Within the link_components modular blocks, there is a "link_component" block. In such nested modular blocks scenario, single line fields can be updated with the following Update operation:

```
{
    "entry": {
        "title": "example",
        "content_container": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "link_module": {
                        "module_title": "test link module 2 Updated testing 2 new",
                        "link_components": {
                            "UPDATE": {
                                "index": 1,
                                "data": {
                                    "link_component": {
                                        "teaser": "updated Nested Module teaser using CMA call"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation, you can update single/multi-level fields within the nested modular blocks without sending the whole object array.

#### Atomic Operators for Number Fields

Contentstack provides support for atomic operators that will specifically help you to work with “Number” fields. These atomic operators include ADD and SUB.

##### ADD Operation

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"UPDATE": {
				"index": 0,
				"data": 1
			}
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```


### ADD Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The ADD operation reads the latest value of a “Number” field and increments it by a numeric passed along with the operator. The increment occurs irrespective of what the current value of the field is.

For example, you have a “Number” field and you want to increment the value of the field by one. In this case, you need to use the "ADD":1 operation. This operation reads the latest value of the field, increments it by 1, and replaces the existing value of the field with the new value.

##### SUB Operation

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"number": {
			"ADD": 1
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 9,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```


### SUB Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The SUB operation works the opposite of ADD. It reads the latest value of a “Number” field and decrements it by a numeric value passed along with the operator.

For example, you have a “Number” field and you want to decrease the value of the field by one. In this case, you need to use the "SUB":1 operation. This operation reads the latest value of the field, decrements it by 1, and replaces the existing value of the field with the new value.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"number": {
			"SUB": 2
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 7,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```




## Delete an Entry

### Delete an entry

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}`

The Delete an entry request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple localized entries.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

This API Request supports the following actions as well:

- Delete specific localized entry: For this request, you need to only specify the locale code of the language in the locale query parameter. If the locale parameter is not been specified, by default, the master language entry will be deleted.
- Delete master language along with all its localized entries: For this request, instead of the locale query parameter, you need to pass the delete_all_localized:true query parameter.Note: The delete_all_localized parameter will work only if you are deleting localized versions from the master language.
- Delete multiple localized entry: Additionally, you can delete specific localized entries by passing the locale codes in the Request body using the locales key as follows:

```
{
  "entry": {
    "locales": ["hi-in", "mr-in", "es"]
  }
}
```

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to delete the entry. The content type UID is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to delete.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entry needs to be deleted.
  Default: `en-us`
- **delete_all_localized** (optional)
  Set the "delete_all_localized" parameter to "true" to delete all the localized versions of the entry.
  Default: `true`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Entry deleted successfully."
}
```




## Entry Versions

Entry versions provide a history of changes made to an entry over time. You can view metadata for each version and assign custom names to specific versions to help identify key milestones or changes.

To learn how to assign a name to a version, refer to the [Name Entry Version](../../../../cs-docs/content-managers/author-content/name-entry-versions.md) documentation.

##### Set Version Name for Entry

### Set Version Name for Entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Set Version Name for Entry request allows you to assign a name to a specific version of an entry.

In the request body, you need to specify the version name to be assigned and the locale of the entry.

To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Tip**: You can add an additional parameter force:true to force update the version name of the master entry.

##### Get Details of All Versions of an Entry

#### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry version to which you want to assign a specific name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry to which you want to assign a specific version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry to which you want to assign a name.
  Default: `1`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"_version_name": "Test version",
		"locale": "fr-fr",
		"force": true
	}
}
```

#### Sample Response

```json
{
	"notice": "Version name assigned successfully"
}
```


### Get Details of All Versions of an Entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Entry request returns comprehensive information of all the versions of a specific entry within a content type.

**Note**:

- If the entry is unlocalized, version details for entries published in the master locale are returned.
- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Entry request.
- When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

##### Delete Version Name of Entry

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry whose version history you want to retrieve.
  Default: `your_entry_uid`

#### Query Parameters

- **named** (optional)
  Set this parameter to 'true' to include in response only the named versions of the specified entry.
  Default: `false`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **include_updated_at** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_updated_by** (optional)
  Set this parameter to 'true' to include in response the UID of the user who updated each version.
  Default: `true`

#### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "versions": [
        {
            "_version": 10,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:45:32.678Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 9,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:54.163Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 8,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:10.914Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 7,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:36:55.607Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 6,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:55.104Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 5,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:27.080Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 4,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:05.469Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 3,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:32:09.120Z",
            "updated_by": "blt3cf27864e6b61df3"
        },
        {
            "_version": 2,
            "locale": "en-us",
            "updated_at": "2025-04-21T16:01:05.721Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 1,
            "locale": "en-us",
            "updated_at": "2025-04-21T15:59:48.020Z",
            "updated_by": "blt**************l3"
        }
    ],
    "count": 10
}
```


### Delete Version Name of Entry

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Delete Version Name of Entry request allows you to delete the name assigned to a specific version of an entry. This request resets the name of the entry version to the version number.   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to delete the version name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to delete the version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry that you want to delete.
  Default: `1`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Request

```json
{
	"entry": {
		"locale": "en-us"
	}
}
```

#### Sample Response

```json
{
	"notice": "Version name deleted successfully"
}
```




## Entry References

##### Get references of an entry

### Get references of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/references`

The Get references of an entry request retrieves a list of entries and content types that reference the specified entry.

When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

To include publish-related metadata for the referenced entry, set the include_publish_details query parameter to true. This metadata includes:

- _version_name: Name assigned to the latest version (if available)
- _version: Latest version number of the specified entry.
- publish_details: An array of objects containing:environment: UID of the environment where the entry is published
- locale: Locale of the published entry
- time: Timestamp of when the entry was published
- user: UID of the user who performed the publishing action
- version: Version number that was published
- version_name: Metadata about the published version, including title, updated_by, and updated_at

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry to find where it is referenced across entries and content types.
  Default: `blt**************ba`

#### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **deleted** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_branch** (optional)
  Set this parameter to 'true' to include the _branch top-level key in the response.
  Default: `true`
- **include_publish_details** (optional)
  Set this parameter to 'true' to include publish-related metadata for each referenced entry in the response.
  Default: `true`

#### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "references": [
    {
      "entry_uid": "blt**************2e",
      "content_type_uid": "ref_parent",
      "locale": "en-us",
      "_version": 8,
      "_version_name": {
        "title": "V8",
        "updated_by": "blt**************d8",
        "updated_at": "2025-05-29T08:21:57.731Z"
      },
      "title": "parent entry v8",
      "content_type_title": "Ref Parent",
      "publish_details": [
        {
          "environment": "blt**************26",
          "locale": "en-us",
          "time": "2025-05-14T18:34:49.591Z",
          "user": "blt**************d8",
          "version": 7,
          "version_name": {
            "title": "V7",
            "updated_by": "blt**************d8",
            "updated_at": "2025-05-29T08:18:08.978Z"
          }
        }
      ]
    }
  ],
  "count": 1
}
```




## Entry Languages

### Get languages of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/locales`

The Get languages of an entry call returns the details of all the languages that an entry exists in.   
To configure the permissions for your application via OAuth, please include the cm.entry:read scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "locales": [
    {
      "code": "ja-jp",
      "localized": true
    }
  ]
}
```




## Localize an Entry

### Localize an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Localize an entry request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Note**: When localizing an entry, if a **Group**, **Modular Blocks**, or **Global** field instance contains a field that is marked as non-localizable, you must include _metadata.uid for the field in the request payload to map that instance in child locale. This ensures that the non-localizable field retains its value from the master locale. You can find the metadata UID for each non-localizable field by using the [Get a Single Entry](../../../api-detail/content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

**Note:** This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

**Additional Resource:** Refer the [Localization](../../../../cs-docs/developers/multilingual-content/localize-an-entry.md) docs for more information.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to localize.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (required)
  Enter the code of the language to localize the entry of that particular language.
  Default: `fr-fr`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

#### Sample Response

```json
{
    "notice": "Entry localized successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```




## Update a Localized Entry

### Update a localized entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update a localized entry request allows you to modify the localized version of an entry. This request is used when you want to update content specific to a locale that is independent of the fallback (master) language.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Important**: If a **Modular Blocks**, **Group**, or **Global** field (marked as multiple) contains a field marked as non-localizable, you must include both _metadata.uid and "non_localizable_content": true for that instance in the request payload. This ensures the non-localizable content continues to retrieve its value from the master locale. You can find the metadata UID for each instance by using the [Get a Single Entry](../../../api-detail/content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
  "entry": {
    "title": "Localized Entry Title",
    "group": [
      {
        "single_line": "Master French",
        "_metadata": {
          "uid": "csc5bebf39cfc99787",
          "non_localizable_content": true
        },
        "multi_line": "Localized French Text"
      }
    ],
    "single_line": "Localized single line text",
    "tags": []
  }
}
```

In this example, the group field is marked as multiple and contains a field (single_line) that is non-localizable. The non_localizable_content: true along with _metadata.uid ensures that the single_line field continues to pull its value from the master locale, while allowing updates to other fields like multi_line.

**Note:** This request will only update the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

**Additional Resource:** Refer the [Localization](../../../../cs-docs/developers/multilingual-content/localize-an-entry.md) docs for more information.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to localize.
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (required)
  Enter the code of the language to localize the entry of that particular language.
  Default: `fr-fr`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b",
                "non_localizable_content": true
                }
            }],
        "single_line":"Update localizable single line textbox",
        "tags":[]
    }
}
```

#### Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```




## Unlocalize Entry

### Unlocalize an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}`

The Unlocalize an entry request is used to unlocalize an existing entry. Read more about [Unlocalization](../../../../cs-docs/developers/multilingual-content/unlocalize-an-entry.md).   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (required)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `fr-fr`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Entry unlocalized successfully."
}
```




## Export Entry

### Export an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}`

The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file.The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.entries:export scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"title": "example",
	"url": "/example",
	"tags": [],
	"locale": "en-us",
	"uid": "abcdefhgi1234567890",
	"created_by": "1234567890abcdefghijklmnopq",
	"updated_by": "1234567890abcdefghijklmnopq",
	"created_at": "2015-01-08T15:07:53.495Z",
	"updated_at": "2015-01-08T15:07:53.495Z",
	"ACL": {},
	"_version": 1,
	"_in_progress": false,
	"reference": [
		"bltf123123123123de"
	]
}
```




## Import Entry

The Import Entry calls given below help you to import entries by uploading JSON files.

**Tip:** You can try the call manually in any REST API client, such as Postman. You can export the required entry's JSON file, make the necessary changes to the data and then import the entry. While importing, you need to pass a form-data parameter named entry and select the input type as 'File'. Then, select the JSON file of the entry that you wish to import.

### Import an entry

**POST** `/content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}`

The Import an entry call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language to import the entry of that particular language.
  Default: `en-us`
- **overwrite** (optional)
  Select 'true' to replace an existing entry with the imported entry file.
  Default: `false`
- **inclue_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"_in_progress": false
	}
}
```


### Import an existing entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}`

The Import an existing entry call will import a new version of an existing entry. You can create multiple versions of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of an entry that you wish to import. **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language to import the entry of that particular language.
  Default: `en-us`
- **overwrite** (optional)
  Select 'true' to replace an existing entry with the imported entry file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 2,
		"tags": [],
		"_in_progress": false
	}
}
```




## Publish Entry

### Publish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish an entry request lets you publish an entry either immediately or schedule it for a later date/time.

**Note:** When you publish an entry, the associated metadata of that entry will also get published. However, when publishing entries in bulk, the associated metadata of the entries will not get published.

To configure the permissions for your application via OAuth, please include the cm.entry:publish scope.

In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the "Body", the following actions take place:

- If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and are published.
- If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a Bulk Publish operation.

The locale and environment details should be specified in the ‘entry’ parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically.

Along with the above details, you also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To publish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to publish **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"environments": ["development"],
		"locales": ["en-us"]
	},
	"locale": "en-us",
	"version": 1,
	"scheduled_at": "2019-02-14T18:30:00.000Z"
}
```

#### Sample Response

```json
{
	"notice": "The requested action has been performed."
}
```


### Publish an entry with references

**POST** `/bulk/publish?x-bulk-action=publish`

The Publish an Entry With References request allows you to publish an entry along with all its references at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:** At a time, you can publish an entry in up to **50 languages** and on **10 environments.**

In the “Body” section, you need to specify the following parameters:

- entries: Pass the details of the main entry i.e., its entry UID, content type UID, the locale code, and the version that you want to publish.
- locales: Pass the locale codes in which you want to publish your entry and its references. If you do not specify a source locale, the entries will be published in the master locale automatically.
- environments: Pass the UIDs of the environments to which you want to publish the entries. You can get the UIDs from Get all environments request.

Here are some additional parameters that you need to pass in the “Request Body”:

- "publish_with_reference": true: Pass this parameter to publish an entry along with its references.Note: Only one level of referenced entries will be published using this API Request.
- skip_workflow_stage_check: true: Pass this parameter to skip those entries that do not satisfy the workflow stage of their publishing rule(s) and publish the rest of them.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries fails to satisfy the set conditions, NONE of the entries will be sent for publishing.
- approvals: true: Pass this parameter to publish only those entries that have been approved by the designated approver, and skip the rest that have not yet been approved.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries is not approved by the Approver, NONE of the entries will be sent for publishing.

#### Query Parameters

- **approvals** (optional)
  Set this to “true” to publish the entries that do not require an approval to be published.
  Default: `true`
- **x-bulk-action** (required)
  Pass “publish” as the value of this parameter in order to publish an entry with all references.
  Default: `publish`
- **skip_workflow_stage_check** (optional)
  Set this to “true” to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`

#### Headers

- **api_key** (required)
  Default: `blt02f7b45378b008ee`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entries": [{
		"uid": "{entry_uid}",
		"content_type": "{content_type_uid}",
		"version": 1,
		"locale": "{entry_locale_code}"
	}],
	"locales": [
		"{publish_locale}"
	],
	"environments": [
		"{environment_uid}"
	],
	"publish_with_reference": true,
	"skip_workflow_stage_check": true
}
```

#### Sample Response

```json
{
	"notice": "Your bulk publish request is in progress. Please check publish queue for more details."
}
```




## Unpublish Entry

### Unpublish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish an entry call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time.

To configure the permissions for your application via OAuth, please include the cm.entry:unpublish scope.

In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the ‘entry’ parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically.

You also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Unpublishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To unpublish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to import **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"entry": {
		"environments": ["development"],
		"locales": ["en-us"]
	},
	"locale": "en-us",
	"version": 1,
	"scheduled_at": "2019-02-14T18:30:00.000Z"
}
```

#### Sample Response

```json
{
	"notice": "The requested action has been performed."
}
```

