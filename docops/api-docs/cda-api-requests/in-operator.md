---
title: "IN Operator"
description: /taxonomies/entries?query={"taxonomies.taxonomy_uid" : { "$in" : ["term_uid1" , "term_uid2" ] }}
url: /in-operator
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:11:03.769Z
updated_at: 2024-07-30T13:15:31.697Z
---

# IN Operator

<p>Get all entries for a specific taxonomy that satisfy the given conditions provided in the "$in" query.</p><p>Your query should be as follows:</p><pre>query={"taxonomies.taxonomy_uid" : { "$in" : ["term_uid1" , "term_uid2" ] }}</pre><p><strong>Example</strong>: If you want to retrieve entries with the <span class="code">color</span> taxonomy applied and linked to the term red and/or yellow.</p><pre>query={"taxonomies.color" : { "$in" : ["red" , "yellow" ] }}</pre><h5 id="or-operator-taxonomy">OR Operator [Taxonomy]</h5>

**API Endpoint**: `/taxonomies/entries?query={"taxonomies.taxonomy_uid" : { "$in" : ["term_uid1" , "term_uid2" ] }}`

**Method**: `GET`

## Query Parameters

- **query** (optional)
  <p>Provide a custom query in the <span class="code">string</span> format.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.&nbsp;</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>

## Response

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

