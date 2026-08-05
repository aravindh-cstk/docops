---
title: "OR Operator [Taxonomy]"
description: GET /taxonomies/entries?query={'$or': {'taxonomies.taxonomy_uid_1' : 'term_uid1' }, {'taxonomies.taxonomy_uid_2' : 'term_uid2' }]}
url: developer-apis/content-delivery-api-requests/or-operator-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-30
---

# OR Operator [Taxonomy]

**GET** `/taxonomies/entries?query={"$or": {"taxonomies.taxonomy_uid_1" : "term_uid1" }, {"taxonomies.taxonomy_uid_2" : "term_uid2" }]}`

Get all entries for a specific taxonomy that satisfy at least one of the given conditions provided in the “$or” query.

Your query should be as follows:

```
query={
  "$or": [
    { "taxonomies.taxonomy_uid_1" : "term_uid1" },
    { "taxonomies.taxonomy_uid_2" : "term_uid2" }
  ]
}
```

**Example**: If you want to retrieve entries with either the color or size taxonomy applied and linked to the terms black and small, respectively.

```
query={
  "$or": [
      { "taxonomies.color" : "black" },
      { "taxonomies.size" : "small" }
    ]
}
```

##### AND Operator [Taxonomy]

## Query Parameters

- **query** (optional)
  Provide a custom query in the string format.
  Default: `{"$or": [{ "taxonomies.color" : "black" },{ "taxonomies.size" : "small" }]}`

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

