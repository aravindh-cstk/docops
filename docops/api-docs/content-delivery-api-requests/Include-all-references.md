---
title: "Include all references"
description: GET /content_types/{content_type_uid}/entries?include_all=true&include_all_depth=3
url: developer-apis/content-delivery-api-requests/include-all-references
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-06
---

# Include all references

**GET** `/content_types/{content_type_uid}/entries?include_all=true&include_all_depth=3`

When fetching an entry or a list of entries, the referenced entries are not included in the response by default—you only get their UIDs.

To retrieve the content of referenced entries (up to **depth 1**), use the include_all=true parameter. To fetch deeper references, use the include_all_depth parameter to specify the depth (up to **5 levels**).

Each level reflects a reference chain—for example, an entry referencing a blog (level 1), which references articles (level 2), and further, articles linking to authors (level 3).

**Note**:

- The maximum allowed depth of 5 is applicable throughout your organization; exceeding this limit will result in an error.
- The maximum number of reference paths that can be retrieved in a single request is 100, regardless of the depth specified. If the number of reference paths exceeds 100, the API returns an error. To avoid this, reduce the value of the include_all_depth parameter and try again.
- The include_all parameter functions only with a delivery token.

**Example API Request**:

```
https://cdn.contentstack.io/v3/content_types/home/entries/?include_all=true&include_all_depth=3
```

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you wish to search for entries.
  Default: `home`

## Query Parameters

- **include_all** (required)
  Set this to true to include referenced entries.
  Default: `true`
- **include_all_depth** (optional)
  Enter a value between 1 to 5 to specify levels of referenced entries to include in the response.
  Default: `3`
- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

