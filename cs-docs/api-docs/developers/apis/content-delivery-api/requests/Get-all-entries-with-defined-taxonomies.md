---
title: "Get all entries with defined taxonomies"
description: GET /taxonomies/entries?query={'taxonomies.taxonomy_uid': 'term_uid'}
url: developers/apis/content-delivery-api/requests/get-all-entries-with-defined-taxonomies
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get all entries with defined taxonomies

**GET** `/taxonomies/entries?query={"taxonomies.taxonomy_uid": "term_uid"}`

The Get all entries with defined taxonomies request returns comprehensive information of all the entries associated with a specific taxonomy or term available in a particular stack in your organization.

To retrieve entries that match only taxonomy and term UID and belong to a specific content type.

```
query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": "_content_type_uid"
}
```

**Example**: If you want to match entries with the term red from the products content type.

```
query={
  "taxonomies.color" : "red",
  "_content_type_uid": "products"
}
```

To retrieve entries that match only taxonomy and term UID and belong to multiple content types.

```
query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": { "$in" : ["_content_type_uid1", "_content_type_uid2"] }
}
```

**Example**: If you want to match entries with the term red from the products or blogs content types.

```
query={
  "taxonomies.color" : "red",
  "_content_type_uid": { "$in" : ["products", "blogs"] }
}
```

**Note**: Refer to the [Taxonomy Queries](/docs/developers/apis/content-delivery-api#taxonomy-queries) section for more query filters.

## Query Parameters

- **query** (optional)
  Provide a custom query in string format.
  Default: `{"taxonomies.taxonomy_uid" : "term_uid"}`
- **resolve_terms** (optional)
  If true, includes resolved term metadata (name, depth, order) for each taxonomy field.
  Default: `true`

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
      "uid": "entry_uid_1",
      "title": "Summer Hat",
      "color": [
        {
          "uid": "yellow",
          "name": "Yellow",
          "depth": 1,
          "order": 2
        }
      ],
      "_content_type_uid": "accessories"
    }
  ]
}
```

