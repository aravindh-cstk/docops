---
title: "Update a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /update-a-term
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:44:30.816Z
updated_at: 2025-11-13T18:10:03.160Z
---

# Update a term

<p>The <span data-type='inlineCode'>Update a term</span> request is used to update the details of an existing term available in a particular taxonomy.</p><h5>Localize a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `PUT`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term you want to update. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale in which to update the taxonomy term. If not specified, the master locale is used.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Request Body

```json
{
  "term": {
    "name": "Updated Term A"
  }
}
```

## Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-18T03:59:01.121Z",
        "updated_by": "b****************44"
    }
}
```

