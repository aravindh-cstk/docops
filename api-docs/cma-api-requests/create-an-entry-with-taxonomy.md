---
title: "Create an entry with taxonomy"
description: /content_types/{content_type_uid}/entries
url: /create-an-entry-with-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-20T10:16:44.357Z
updated_at: 2023-11-28T10:36:18.941Z
---

# Create an entry with taxonomy

<p>The <span data-type='inlineCode'>Create an entry with taxonomy</span> request lets you create a new entry for a selected content type that contains a taxonomy field.</p><p>In the “Body” section, you need to provide the content of your entry based on the content type created and the details of the taxonomy for the specified content type as follows:</p><pre>{<br />   "taxonomies":[<br />      {<br />         "taxonomy_uid":"taxonomy_uid_1",<br />         "term_uid":"term_uid_1"<br />      },<br />      {<br />         "taxonomy_uid":"taxonomy_uid_1",<br />         "term_uid":"term_uid_2"<br />      },<br />      {<br />         "taxonomy_uid":"taxonomy_uid_2",<br />         "term_uid":"term_uid_2"<br />      },<br />      {<br />         "taxonomy_uid":"taxonomy_uid_2",<br />         "term_uid":"term_uid_3"<br />      }<br />   ]<br />}<br /></pre>

**API Endpoint**: `/content_types/{content_type_uid}/entries`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
- **Content-Type** (required)

## Request Body

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

## Response

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

