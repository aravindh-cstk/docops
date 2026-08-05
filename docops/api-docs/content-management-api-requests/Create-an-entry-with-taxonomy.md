---
title: "Create an entry with taxonomy"
description: POST /content_types/{content_type_uid}/entries
url: developer-apis/content-management-api-requests/create-an-entry-with-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-11-28
---

# Create an entry with taxonomy

**POST** `/content_types/{content_type_uid}/entries`

The Create an entry with taxonomy request lets you create a new entry for a selected content type that contains a taxonomy field.

In the “Body” section, you need to provide the content of your entry based on the content type created and the details of the taxonomy for the specified content type as follows:

```
{
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_1"
      },
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_3"
      }
   ]
}
```

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ]
    }
}
```

## Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ],
        "locale": "en-us",
        "uid": "bltad7a2b9d5597c54c",
        "created_by": "blt4011095e7bc75796",
        "updated_by": "blt4011095e7bc75796",
        "created_at": "2023-11-20T09:58:35.207Z",
        "updated_at": "2023-11-20T09:58:35.207Z",
        "ACL": {},
        "_version": 1,
        "tags": [],
        "_in_progress": false
    }
}
```

