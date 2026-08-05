---
title: "Include all references"
description: /content_types/{content_type_uid}/entries?include_all=true&include_all_depth=3
url: /include-all-references
product: Contentstack
doc_type: api-request
created_at: 2024-10-23T08:59:53.533Z
updated_at: 2025-11-06T12:50:37.532Z
---

# Include all references

<p>When fetching an entry or a list of entries, the referenced entries are not included in the response by default—you only get their UIDs.</p><p>To retrieve the content of referenced entries (up to <strong>depth 1</strong>), use the <span class="code">include_all=true</span> parameter. To fetch deeper references, use the <span class="code">include_all_depth</span> parameter to specify the depth (up to <strong>5 levels</strong>).</p><p>Each level reflects a reference chain—for example, an entry referencing a blog (level 1), which references articles (level 2), and further, articles linking to authors (level 3).</p><div class="note"><strong>Note</strong>:<ul><li>The maximum allowed depth of <strong>5</strong> is applicable throughout your organization; exceeding this limit will result in an error.</li><li>The maximum number of reference paths that can be retrieved in a single request is <strong>100</strong>, regardless of the depth specified. If the number of reference paths exceeds 100, the API returns an error. To avoid this, reduce the value of the <span class="code">include_all_depth</span> parameter and try again.</li><li>The <span class="code">include_all</span> parameter functions only with a delivery token.</li></ul></div><p><strong>Example API Request</strong>:</p><pre class="prettyprint">https://cdn.contentstack.io/v3/content_types/home/entries/?include_all=true&amp;include_all_depth=3</pre>

**API Endpoint**: `/content_types/{content_type_uid}/entries?include_all=true&include_all_depth=3`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type in which you wish to search for entries.</p>

## Query Parameters

- **include_all** (required)
  <p>Set this to <span class="code">true</span> to include referenced entries.</p>
- **include_all_depth** (optional)
  <p>Enter a value between 1 to 5 to specify levels of referenced entries to include in the response.</p>
- **locale** (optional)
  <p><span style="background-color: initial;">Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.</span></p>
- **include_branch** (optional)
  <p> Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "entries": [
        {
            "uid": "blt7c8c0ba8b6cd6cc8",
            "_version": 2,
            "locale": "en-us",
            "ACL": {},
            "_in_progress": false,
            "blog_list": [
                {
                    "_content_type_uid": "blog",
                    "uid": "blt264df199fd36c703",
                    "title": "Blog Landing Page",
                    "article_list": [
                        {
                            "_content_type_uid": "article",
                            "uid": "blt6203ac40fb15299b",
                            "title": "Article Landing Page",
                            "author": [
                                {
                                    "_content_type_uid": "author",
                                    "uid": "blt268a4358bbea44fb",
                                    "title": "Author Profile",
                                    "tags": [],
                                    "locale": "en-us",
                                    "created_by": "blte93d4119f79db761",
                                    "updated_by": "blte93d4119f79db761",
                                    "created_at": "2024-10-24T05:54:27.194Z",
                                    "updated_at": "2024-10-24T05:54:27.194Z",
                                    "ACL": {},
                                    "_version": 1,
                                    "_in_progress": false,
                                    "publish_details": {
                                        "time": "2024-10-24T05:54:46.614Z",
                                        "user": "blte93d4119f79db761",
                                        "environment": "blta39a4441696e35e0",
                                        "locale": "en-us"
                                    }
                                }
                            ],
                            "tags": [],
                            "locale": "en-us",
                            "created_by": "blte93d4119f79db761",
                            "updated_by": "blte93d4119f79db761",
                            "created_at": "2024-10-24T05:54:07.348Z",
                            "updated_at": "2024-10-24T05:54:31.465Z",
                            "ACL": {},
                            "_version": 2,
                            "_in_progress": false,
                            "publish_details": {
                                "time": "2024-10-24T05:54:46.511Z",
                                "user": "blte93d4119f79db761",
                                "environment": "blta39a4441696e35e0",
                                "locale": "en-us"
                            }
                        }
                    ],
                    "tags": [],
                    "locale": "en-us",
                    "created_by": "blte93d4119f79db761",
                    "updated_by": "blte93d4119f79db761",
                    "created_at": "2024-10-24T05:53:45.648Z",
                    "updated_at": "2024-10-24T05:54:10.953Z",
                    "ACL": {},
                    "_version": 2,
                    "_in_progress": false,
                    "publish_details": {
                        "time": "2024-10-24T05:54:46.144Z",
                        "user": "blte93d4119f79db761",
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us"
                    }
                }
            ],
            "created_at": "2024-10-24T05:53:29.549Z",
            "created_by": "blte93d4119f79db761",
            "tags": [],
            "title": "Home Page",
            "updated_at": "2024-10-24T05:53:52.932Z",
            "updated_by": "blte93d4119f79db761",
            "publish_details": {
                "time": "2024-10-24T05:54:46.012Z",
                "user": "blte93d4119f79db761",
                "environment": "blta39a4441696e35e0",
                "locale": "en-us"
            },
            "_embedded_items": {}
        }
    ]
}
```

