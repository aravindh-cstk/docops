---
title: "AND Operator [Taxonomy]"
description: /taxonomies/entries?query={"$and": [{ "taxonomies.taxonomy_uid_1" : "term_uid1" }, { "taxonomies.taxonomy_uid_2" : "term_uid2" }]}
url: /and-operator-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:39:46.384Z
updated_at: 2024-07-30T13:25:11.570Z
---

# AND Operator [Taxonomy]

<p></p><p>Get all entries for a specific taxonomy that satisfy all the conditions provided in the “$and” query.</p><p>Your query should be as follows:<br /></p><pre>query={<br />  "$and": [<br />    { "taxonomies.taxonomy_uid_1" : "term_uid1" },<br />    { "taxonomies.taxonomy_uid_2" : "term_uid2" }<br />  ]<br />}</pre><p><strong>Example</strong>: If you want to retrieve entries with the <span class="code">color</span> and <span class="code">category</span> taxonomies applied and linked to the terms <span class="code">black</span> and <span class="code">mobile</span>, respectively.</p><pre>query={<br />  "$and": [<br />      { "taxonomies.color" : "black" },<br />      { "taxonomies.category" : "mobile" }<br />    ]<br />}</pre><h5 id="exists-operator">Exists Operator</h5>

**API Endpoint**: `/taxonomies/entries?query={"$and": [{ "taxonomies.taxonomy_uid_1" : "term_uid1" }, { "taxonomies.taxonomy_uid_2" : "term_uid2" }]}`

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

