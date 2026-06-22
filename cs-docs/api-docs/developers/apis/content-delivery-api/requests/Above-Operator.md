---
title: "Above Operator"
description: GET /taxonomies/entries?query={ 'taxonomies.taxonomy_uid': { '$above': 'term_uid', 'levels': 2 }}
url: developers/apis/content-delivery-api/requests/above-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-31
---

# Above Operator


**Method:** `GET`  
**Endpoint:** `/taxonomies/entries?query={ "taxonomies.taxonomy_uid": { "$above": "term_uid", "levels": 2 }}`

Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.

**Note:** If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

```
query = {
  "taxonomies.taxonomy_uid": { "$above": "term_uid", "levels": 2 }
}
```

**Example**: If you wish to match entries with all the terms above the target term navy_blue, excluding navy_blue itself.

```
query = {
  "taxonomies.color": { "$above": "navy_blue" }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| query | {"taxonomies.color": { "$above": "navy_blue" }} | Provide a custom query in the string format. |

**Response (200):**

```json
{
    "entries": [
        {
            "_content_type_uid": "accessories",
            "uid": "blt52423be2c052a545",
            "_version": 1,
            "locale": "en-us",
            "ACL": {},
            "_in_progress": false,
            "created_at": "2023-11-20T11:52:23.701Z",
            "created_by": "bltc2f3e4fad0331975",
            "info3": "",
            "tags": [],
            "taxonomies": [
                {
                    "taxonomy_uid": "sports",
                    "term_uid": "swimming"
                },
                {
                    "taxonomy_uid": "appliances",
                    "term_uid": "tv"
                },
                {
                    "taxonomy_uid": "computers",
                    "term_uid": "desktop"
                },
                {
                    "taxonomy_uid": "computers",
                    "term_uid": "laptop"
                },
                {
                    "taxonomy_uid": "color",
                    "term_uid": "blue"
                },
                {
                    "taxonomy_uid": "color",
                    "term_uid": "green"
                }
            ],
            "title": "Accessories-e1",
            "updated_at": "2023-11-20T11:52:23.701Z",
            "updated_by": "bltc2f3e4fad0331975",
            "publish_details": {
                "time": "2023-11-20T11:54:48.928Z",
                "user": "bltc2f3e4fad0331975",
                "environment": "bltcd8ac33f1617637d",
                "locale": "en-us"
            }
        },
        {
            "_content_type_uid": "electronic",
            "uid": "blt48c591c5ea1f704b",
            "_version": 1,
            "locale": "en-us",
            "ACL": {},
            "_in_progress": false,
            "created_at": "2023-11-20T11:52:09.534Z",
            "created_by": "bltc2f3e4fad0331975",
            "info1": "",
            "tags": [],
            "taxonomies": [
                {
                    "taxonomy_uid": "appliances",
                    "term_uid": "tv"
                },
                {
                    "taxonomy_uid": "computers",
                    "term_uid": "laptop"
                },
                {
                    "taxonomy_uid": "color",
                    "term_uid": "blue"
                }
            ],
            "title": "Electronic-e1",
            "updated_at": "2023-11-20T11:52:09.534Z",
            "updated_by": "bltc2f3e4fad0331975",
            "publish_details": {
                "time": "2023-11-20T11:54:48.975Z",
                "user": "bltc2f3e4fad0331975",
                "environment": "bltcd8ac33f1617637d",
                "locale": "en-us"
            }
        }
    ]
}
```
