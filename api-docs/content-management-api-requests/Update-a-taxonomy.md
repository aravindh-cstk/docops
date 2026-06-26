---
title: "Update a taxonomy"
description: PUT /taxonomies/{taxonomy_uid}
url: developer-apis/content-management-api-requests/update-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Update a taxonomy

**PUT** `/taxonomies/{taxonomy_uid}`

The Update a taxonomy request is used to update the details of an existing taxonomy available in a particular stack.

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

## Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
  "taxonomy": {
    "name": "Updated Sample One",
    "description": "Updated description for the sample one taxonomy."
  }
}
```

## Sample Response

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

