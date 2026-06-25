---
title: "Exists Operator"
description: GET /taxonomies/entries?query={{'taxonomies.taxonomy_uid' : { '$exists': true }}
url: developer-apis/content-delivery-api-requests/exists-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-11-20
---

# Exists Operator

**GET** `/taxonomies/entries?query={{"taxonomies.taxonomy_uid" : { "$exists": true }}`

Get all entries for a specific taxonomy that if the value of the field, mentioned in the condition, exists.

Your query should be as follows:

```
query={"taxonomies.taxonomy_uid" : { "$exists": true }}
```

**Example**: If you want to retrieve entries with the color taxonomy applied.

```
query={"taxonomies.color" : { "$exists": true }}
```

##### Equal and Below Operator

## Query Parameters

- **query** (optional)
  Provide a custom query in the string format.
  Default: `{"taxonomies.color" : { "$exists": true }}`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`

## Sample Response

```json
{
    "entries": [
        {
            "_content_type_uid": "complex",
            "uid": "blt6002475158e575ee",
            "_version": 1,
            "locale": "en-us",
            "ACL": {},
            "_in_progress": false,
            "created_at": "2023-11-20T11:52:40.997Z",
            "created_by": "bltc2f3e4fad0331975",
            "file": [
                {
                    "uid": "blt282b7b1e881cb457",
                    "_version": 1,
                    "title": "asset1",
                    "description": "",
                    "parent_uid": null,
                    "tags": [],
                    "created_by": "bltc2f3e4fad0331975",
                    "updated_by": "bltc2f3e4fad0331975",
                    "created_at": "2023-11-20T11:52:28.913Z",
                    "updated_at": "2023-11-20T11:52:28.913Z",
                    "content_type": "image/jpeg",
                    "file_size": "10541",
                    "filename": "JPG_validation.jpg",
                    "ACL": {},
                    "is_dir": false,
                    "publish_details": {
                        "time": "2023-11-20T11:54:49.407Z",
                        "user": "bltc2f3e4fad0331975",
                        "environment": "bltcd8ac33f1617637d",
                        "locale": "en-us"
                    },
                    "url": "https://stag-images.csnonprod.com/v3/assets/blt95ad1e743a5335c1/blt282b7b1e881cb457/655b487c904de053109e5133/JPG_validation.jpg"
                }
            ],
            "info4": "",
            "jrte": {
                "type": "doc",
                "attrs": {},
                "uid": "2c565072f9e6470da13a7298444078f5",
                "children": [
                    {
                        "uid": "9594009758804659bd7df88a28c39d72",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "bltc9669cb0d5217dfc",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://stag-images.csnonprod.com/v3/assets/blt95ad1e743a5335c1/bltc9669cb0d5217dfc/655b4885bb1c8d0dbba2f218/Png_01.png",
                            "asset-name": "asset3",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "alt": "image/png",
                            "asset-alt": "image/png",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {
                            "style": {},
                            "redactor-attributes": {},
                            "dir": "ltr"
                        },
                        "uid": "c6abcb47cdaa40d18ca48d2b07899baf",
                        "children": [
                            {
                                "text": ""
                            },
                            {
                                "uid": "61f51558176f4a7b9696fba9ab43b15b",
                                "type": "reference",
                                "attrs": {
                                    "display-type": "inline",
                                    "type": "entry",
                                    "class-name": "embedded-entry redactor-component inline-entry",
                                    "entry-uid": "blt1934bf0caa658521",
                                    "locale": "en-us",
                                    "content-type-uid": "electronic"
                                },
                                "children": [
                                    {
                                        "text": ""
                                    }
                                ]
                            },
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "rte": "<p></p><figure class=\"embedded-asset\" content-type-uid=\"sys_assets\" alt=\"asset2\" asset-alt=\"asset2\" type=\"asset\" data-sys-asset-filelink=\"https://stag-assets.csnonprod.com/v3/assets/blt95ad1e743a5335c1/bltf69e9216616b6f36/655b488019d7914f0dd61163/PDF_validation.pdf\" data-sys-asset-uid=\"bltf69e9216616b6f36\" data-sys-asset-filename=\"asset2\" data-sys-asset-contenttype=\"application/pdf\" data-sys-asset-alt=\"asset2\" sys-style-type=\"download\"></figure><div class=\"embedded-entry redactor-component block-entry\" type=\"entry\" data-sys-entry-uid=\"blt48c591c5ea1f704b\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"electronic\" sys-style-type=\"block\"></div>",
            "tags": [],
            "taxonomies": [
                {
                    "taxonomy_uid": "color",
                    "term_uid": "navy_blue"
                }
            ],
            "title": "Complex-e1",
            "updated_at": "2023-11-20T11:52:40.997Z",
            "updated_by": "bltc2f3e4fad0331975",
            "publish_details": {
                "time": "2023-11-20T11:54:48.407Z",
                "user": "bltc2f3e4fad0331975",
                "environment": "bltcd8ac33f1617637d",
                "locale": "en-us"
            }
        }
    ]
}
```

