---
title: "OR Operator [Taxonomy]"
description: /taxonomies/entries?query={"$or": {"taxonomies.taxonomy_uid_1" : "term_uid1" }, {"taxonomies.taxonomy_uid_2" : "term_uid2" }]}
url: /or-operator-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:22:19.012Z
updated_at: 2024-07-30T13:20:42.686Z
---

# OR Operator [Taxonomy]

<p>Get all entries for a specific taxonomy that satisfy at least one of the given conditions provided in the “$or” query.</p><p>Your query should be as follows:</p><pre>query={<br />  "$or": [<br />    { "taxonomies.taxonomy_uid_1" : "term_uid1" },<br />    { "taxonomies.taxonomy_uid_2" : "term_uid2" }<br />  ]<br />}</pre><p><strong>Example</strong>: If you want to retrieve entries with either the <span class="code">color</span> or <span class="code">size</span> taxonomy applied and linked to the terms <span class="code">black</span> and <span class="code">small</span>, respectively.</p><pre>query={<br />  "$or": [<br />      { "taxonomies.color" : "black" },<br />      { "taxonomies.size" : "small" }<br />    ]<br />}</pre><h5 id="and-operator-taxonomy">AND Operator [Taxonomy]</h5>

**API Endpoint**: `/taxonomies/entries?query={"$or": {"taxonomies.taxonomy_uid_1" : "term_uid1" }, {"taxonomies.taxonomy_uid_2" : "term_uid2" }]}`

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

