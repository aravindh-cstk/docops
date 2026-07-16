---
title: "AND Operator [Taxonomy]"
description: GET /taxonomies/entries?query={'$and': [{ 'taxonomies.taxonomy_uid_1' : 'term_uid1' }, { 'taxonomies.taxonomy_uid_2' : 'term_uid2' }]}
url: developer-apis/content-delivery-api-requests/and-operator-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-30
---

# AND Operator [Taxonomy]

**GET** `/taxonomies/entries?query={"$and": [{ "taxonomies.taxonomy_uid_1" : "term_uid1" }, { "taxonomies.taxonomy_uid_2" : "term_uid2" }]}`

Get all entries for a specific taxonomy that satisfy all the conditions provided in the “$and” query.

Your query should be as follows:

```
query={
  "$and": [
    { "taxonomies.taxonomy_uid_1" : "term_uid1" },
    { "taxonomies.taxonomy_uid_2" : "term_uid2" }
  ]
}
```

**Example**: If you want to retrieve entries with the color and category taxonomies applied and linked to the terms black and mobile, respectively.

```
query={
  "$and": [
      { "taxonomies.color" : "black" },
      { "taxonomies.category" : "mobile" }
    ]
}
```

##### Exists Operator

## Query Parameters

- **query** (optional)
  Provide a custom query in the string format.
  Default: `{"$and": [{"taxonomies.color" : "black" }, { "taxonomies.category" : "mobile" }]}`

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
        }
    ]
}
```

