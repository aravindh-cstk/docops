---
title: "Above Operator"
description: /taxonomies/entries?query={ "taxonomies.taxonomy_uid": { "$above": "term_uid", "levels": 2 }}
url: /above-operator
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T12:08:01.431Z
updated_at: 2024-07-31T06:10:01.524Z
---

# Above Operator

<p>Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.</p><p class="note"><strong>Note:</strong> If you don't specify&nbsp;the level, the default behavior is to retrieve terms up to <strong>level 10</strong>.</p><pre>query = {<br />  "taxonomies.taxonomy_uid": { "$above": "term_uid", "levels": 2 }<br />}</pre><p><strong>Example</strong>: If you wish to match entries with all the terms above the target term <span class="code">navy_blue</span>, excluding <span class="code">navy_blue</span> itself.</p><pre>query = {<br />  "taxonomies.color": { "$above": "navy_blue" }<br />}</pre>

**API Endpoint**: `/taxonomies/entries?query={ "taxonomies.taxonomy_uid": { "$above": "term_uid", "levels": 2 }}`

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

