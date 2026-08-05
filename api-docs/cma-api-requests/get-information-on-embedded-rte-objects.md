---
title: "Get information on embedded RTE objects"
description: /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&include_embedded_items[]=BASE
url: /get-information-on-embedded-rte-objects
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.604Z
updated_at: 2026-07-20T16:51:19.680Z
---

# Get information on embedded RTE objects

<p>The <span data-type='inlineCode'>Get information on embedded RTE objects</span> request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entries.management:read</span> scope. <br />If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the <span data-type='inlineCode'>include_embedded_items[]=BASE</span> query parameter.</p><p>You can view information about the embedded objects under the <span data-type='inlineCode'>_embedded_items</span> parameter in the JSON response body.</p><p class="note"><strong>Note</strong>: Contentstack’s <a href="/docs/headless-cms/fetch-content#fetch-content-using-content-delivery-sdks" target="_self">Content Delivery SDKs</a> help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the frontend however required.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&include_embedded_items[]=BASE`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p></p>
<p>Enter the unique ID of the content type that contains entries with embedded objects. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
<p></p>
- **entry_uid** (required)
  <p></p>
<p>Enter the unique ID of the entry of which you wish to fetch embedded object information.</p>
<p></p>

## Query Parameters

- **locale_code** (optional)
  <p>Enter the code of the language of which the entries need to be included.</p>
- **include_embedded_items[]** (optional)
  <p>Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "entry":{
        "title":"example",
        "url":"/example",
        "rich_text_editor":"<p>This is a sample article:</p><div class=\"redactor-component embedded-entry block-entry\" data-sys-entry-uid=\"blt60e06920a98836a6\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"my_homepage\" sys-style-type=\"block\" type=\"entry\"></div>\n<p>Image for reference:</p><figure class=\"embedded-asset\" data-sys-asset-filelink=\"https://images.contentstack.io/v3/assets/blt38776c9acaa22eh3/bltdd7ea64b0ed4hft3/601154640839e910126d96eg/download\" data-sys-asset-uid=\"bltdd7ea64b0ed4fdb6\" data-sys-asset-filename=\"Sample_Image.png\" data-sys-asset-contenttype=\"image/png\" type=\"asset\" sys-style-type=\"display\"></figure>",
        "tags":[
            
        ],
        "locale":"en-us",
        "uid":"blt39b7fd7860cc900f",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2021-09-17T08:25:07.139Z",
        "updated_at":"2021-09-17T08:25:07.139Z",
        "_version":1,
        "_in_progress":true,
        "_embedded_items":{
            "rich_text_editor":[
                {
                    "title":"Demo Entry",
                    "url":"/demo",
                    "reference":[
                        "blte95c40e1c723e983"
                    ],
                    "tags":[
                        "demo"
                    ],
                    "locale":"en-us",
                    "uid":"blt60e06920a98836a6",
                    "created_by":"blt42e55757d70d5f81026a2b9f",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "created_at":"2020-04-08T03:05:37.254Z",
                    "updated_at":"2021-03-23T09:19:59.878Z",
                    "_content_type_uid":"my_homepage",
                    "ACL":{
                        
                    },
                    "_version":12,
                    "_in_progress":false,
                    "employee_address":[
                        {
                            "rich_text_editor":"<p><img src=\"https://images.contentstack.io/v3/assets/blt38776c9acaae33b3/blt82640f35115b64e7/5e8c6f1505ab2062f3a1b822/download\" data-sys-asset-uid=\"blt82640f35115b64e7\" alt=\"Modular Blocks within Global.png\" style=\"background-color: initial; display: block; margin: auto;\">Sample text.</p>",
                            "_metadata":{
                                "uid":"csc8c89feb26118172"
                            },
                            "boolean":true
                        },
                        {
                            "rich_text_editor":"<p>This is sample text.</p>",
                            "_metadata":{
                                "uid":"cs1d57fbd82e175ba7"
                            },
                            "boolean":true
                        }
                    ],
                    "_workflow":{
                        "uid":"draft",
                        "updated_at":"2021-01-15T07:39:19.361Z",
                        "updated_by":"blt6563a9b067fc1bc9",
                        "version":11,
                        "assigned_to":[
                            
                        ],
                        "assigned_by_roles":[
                            
                        ],
                        "due_date":"2021-01-26"
                    },
                    "publish_details":[
                        {
                            "environment":"blt53fbd8ad11c50150",
                            "locale":"en-us",
                            "time":"2021-04-15T14:01:27.846Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"en-us",
                            "time":"2021-08-25T03:57:47.466Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"en-us",
                            "time":"2021-08-24T05:31:55.910Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"ja-jp",
                            "time":"2021-08-25T03:57:47.481Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"ja-jp",
                            "time":"2021-08-24T05:31:55.917Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"fr-fr",
                            "time":"2021-01-15T07:39:38.340Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":1
                        }
                    ]
                },
                {
                    "uid":"bltdd7ea64b0ed4fdb6",
                    "created_at":"2021-01-27T11:54:12.316Z",
                    "updated_at":"2021-01-27T11:54:12.316Z",
                    "created_by":"blt6563a9b067fc1bc9",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "content_type":"image/png",
                    "file_size":"54478",
                    "tags":[
                        
                    ],
                    "filename":"Sample_Image.png",
                    "url":"https://images.contentstack.io/v3/assets/blt38776c9acaae66r3/bltdd7ea64b0ed4hdr4/601154640839e910126d64r2/download",
                    "ACL":[
                        
                    ],
                    "parent_uid":null,
                    "_version":1,
                    "title":"Sample_Image.png",
                    "_content_type_uid":"sys_assets",
                    "publish_details":[
                        
                    ]
                }
            ]
        },
        "publish_details":[
            
        ]
    }
}
```

