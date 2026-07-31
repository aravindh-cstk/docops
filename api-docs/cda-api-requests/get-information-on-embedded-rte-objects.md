---
title: "Get information on embedded RTE objects"
description: /content_types/{content_type_uid}/entries/{entry_uid}?&locale={locale_code}&include_embedded_items[]=BASE
url: /get-information-on-embedded-rte-objects
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.893Z
updated_at: 2026-07-20T16:51:17.399Z
---

# Get information on embedded RTE objects

<p>The <span data-type="inlineCode">Get information on embedded RTE objects</span> request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.</p>
<p>If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the <span data-type="inlineCode">include_embedded_items[]=BASE</span> query parameter.</p>
<p>You can view information about the embedded objects under the <span data-type="inlineCode">_embedded_items</span> parameter in the JSON response body.</p>
<p class="note"><strong>Note</strong>: Contentstack’s <a href="/docs/headless-cms/fetch-content#fetch-content-using-content-delivery-sdks">Content Delivery SDKs</a> help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the front end however required.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?&locale={locale_code}&include_embedded_items[]=BASE`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you want to retrieve the entries. The content type UID is often based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you want to fetch.&nbsp;</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language of which you want to include&nbsp;the entries.&nbsp;</p>
- **include_embedded_items[]** (optional)
  <p></p>
<p>Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field.</p>
<p></p>
- **include_branch** (optional)
  <p>Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Enter the API key of your stack.</span></p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

