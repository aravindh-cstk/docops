---
title: "Get information on embedded RTE objects"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}?&locale={locale_code}&include_embedded_items[]=BASE
url: developers/apis/content-delivery-api/requests/get-information-on-embedded-rte-objects
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-21
---

# Get information on embedded RTE objects


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}?&locale={locale_code}&include_embedded_items[]=BASE`

The Get information on embedded RTE objects request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.

If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the include_embedded_items[]=BASE query parameter.

You can view information about the embedded objects under the _embedded_items parameter in the JSON response body.

**Note**: Contentstack’s [Content Delivery SDKs](/docs/developers/fetch-content#fetch-content-using-content-delivery-sdks) help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the front end however required.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you want to retrieve the entries. The content type UID is often based on the title of the content type and it i |

| entry_uid | blta250054cfa4f5aab | Enter the unique ID of the entry that you want to fetch. |

| locale | en-us | Enter the code of the language of which you want to include the entries. |

| include_embedded_items[] | BASE | Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
    "entry": {
        "title": "Sample One",
        "tags": [],
        "locale": "en-us",
        "uid": "blte16f93640bfa7f93",
        "created_by": "blt3cs27664f6b61df3",
        "updated_by": "blt3df27964f6b61df3",
        "created_at": "2022-11-30T05:43:01.357Z",
        "updated_at": "2022-12-02T07:26:27.624Z",
        "ACL": {},
        "_version": 4,
        "_in_progress": false,
        "_embedded_items": {
            "rich_text_editor": [
                {
                    "title": "Test Entry",
                    "json_rte": {
                        "type": "doc",
                        "attrs": {},
                        "uid": "40d2bcb7222f4712a27cbd906295b437",
                        "children": [
                            {
                                "type": "p",
                                "uid": "78ca555c91aa4bbbaa93fd13b1974649",
                                "attrs": {},
                                "children": [
                                    {
                                        "text": "Sample blog content."
                                    }
                                ]
                            }
                        ],
                        "_version": 2
                    },
                    "rich_text_editor": "<span>Sample blog content.</span>",
                    "modular_blocks": [
                        {
                            "block_1": {
                                "rich_text_editor": "<span>Sample blog content.</span>",
                                "_metadata": {
                                    "uid": "cs5a4e5837bbac8516"
                                }
                            }
                        }
                    ],
                    "tags": [],
                    "locale": "en-us",
                    "uid": "bltdf3d45019b5ef76c",
                    "created_by": "blt3cf27834e6b61df3",
                    "updated_by": "blt3cf37864e6b61df3",
                    "created_at": "2022-11-29T11:12:23.183Z",
                    "updated_at": "2022-12-02T07:25:54.847Z",
                    "_content_type_uid": "sample",
                    "ACL": {},
                    "_version": 2,
                    "_workflow": {
                        "uid": "blt1198186676a58926",
                        "updated_at": "2022-11-29T11:12:23.183Z",
                        "updated_by": "blt3cf27864e6b61df3",
                        "version": 1
                    },
                    "_in_progress": false
                },
                {
                    "uid": "blt3324e18f48c4d71c",
                    "created_at": "2022-08-17T06:11:07.365Z",
                    "updated_at": "2022-08-17T06:11:54.542Z",
                    "created_by": "blt3cf27864e6b61df3",
                    "updated_by": "blt3cf27864e6b61df3",
                    "content_type": "image/jpeg",
                    "file_size": "1161714",
                    "tags": [],
                    "filename": "1.jpg",
                    "url": "https://images.contentstack.io/v3/assets/blta8a5690107d35d6e/blt3324e18f48c4d71c/62fc867b9b71c064a0584583/1.jpg",
                    "ACL": [],
                    "parent_uid": null,
                    "_version": 2,
                    "title": "1.jpg",
                    "_content_type_uid": "sys_assets"
                }
            ]
        },
        "rich_text_editor": "<p>This is a sample article.</p><div class=\"embedded-entry redactor-component block-entry\" type=\"entry\" data-sys-entry-uid=\"bltdf3d97019a5ef76c\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample\" sys-style-type=\"block\"></div><p></p><figure class=\"embedded-asset\" content-type-uid=\"sys_assets\" type=\"asset\" data-sys-asset-filelink=\"https://images.contentstack.io/v3/assets/blta8a5690107d35d6e/blt3324e18f48c4d71c/62fc867b9b71c064a0584583/1.jpg\" data-sys-asset-uid=\"blt3324e18f48c4d71c\" data-sys-asset-filename=\"1.jpg\" data-sys-asset-contenttype=\"image/jpeg\" sys-style-type=\"display\"></figure>"
    }
}
```
