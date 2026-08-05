---
title: "Update a taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /update-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T10:48:08.600Z
updated_at: 2025-11-13T17:56:16.330Z
---

# Update a taxonomy

<p>The <span class="code">Update a taxonomy</span> request is used to update the details of an existing taxonomy available in a particular stack.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `PUT`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale in which to update the taxonomy. If not specified, the master locale is used.</p>

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
  "taxonomy": {
    "name": "Updated Sample One",
    "description": "Updated description for the sample one taxonomy."
  }
}
```

## Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Updated Sample One",
        "description": "Updated description for the sample one taxonomy.",
      "locale": "es-es",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T07:54:42.373Z",
        "updated_by": "b****************44"
    }
}
```

