---
title: "IN Operator"
description: GET /taxonomies/entries?query={'taxonomies.taxonomy_uid' : { '$in' : ['term_uid1' , 'term_uid2' ] }}
url: developers/apis/content-delivery-api/requests/in-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-30
---

# IN Operator


**Method:** `GET`  
**Endpoint:** `/taxonomies/entries?query={"taxonomies.taxonomy_uid" : { "$in" : ["term_uid1" , "term_uid2" ] }}`

Get all entries for a specific taxonomy that satisfy the given conditions provided in the "$in" query.

Your query should be as follows:

```
query={"taxonomies.taxonomy_uid" : { "$in" : ["term_uid1" , "term_uid2" ] }}
```

**Example**: If you want to retrieve entries with the color taxonomy applied and linked to the term red and/or yellow.

```
query={"taxonomies.color" : { "$in" : ["red" , "yellow" ] }}
```

##### OR Operator [Taxonomy]

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| query | {"taxonomies.color" : { "$in" : ["red" , "yellow" ] }} | Provide a custom query in the string format. |

**Response (200):**

```json
{
    "entries": [
        {
            "_content_type_uid": "electronic",
            "uid": "blt1934bf0caa658521",
            "_version": 1,
            "locale": "en-us",
            "ACL": {},
            "_in_progress": false,
            "created_at": "2023-11-20T11:52:16.469Z",
            "created_by": "bltc2f3e4fad0331975",
            "info1": "",
            "tags": [],
            "taxonomies": [
                {
                    "taxonomy_uid": "appliances",
                    "term_uid": "ac"
                },
                {
                    "taxonomy_uid": "appliances",
                    "term_uid": "fridge"
                },
                {
                    "taxonomy_uid": "computers",
                    "term_uid": "desktop"
                },
                {
                    "taxonomy_uid": "computers",
                    "term_uid": "hard_drive"
                },
                {
                    "taxonomy_uid": "color",
                    "term_uid": "green"
                },
                {
                    "taxonomy_uid": "color",
                    "term_uid": "yellow"
                }
            ],
            "title": "Electronic-e2",
            "updated_at": "2023-11-20T11:52:16.469Z",
            "updated_by": "bltc2f3e4fad0331975",
            "publish_details": {
                "time": "2023-11-20T11:54:48.965Z",
                "user": "bltc2f3e4fad0331975",
                "environment": "bltcd8ac33f1617637d",
                "locale": "en-us"
            }
        }
    ]
}
```
