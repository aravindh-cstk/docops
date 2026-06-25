---
title: "CDA | Taxonomy"
description: Retrieve taxonomy data and term assignments for organizing delivered content.
url: https://www.contentstack.com/docs/developer-apis/content-delivery-api/taxonomy
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CDA | Taxonomy

Taxonomy, simplifies the process of organizing content in your system, making it effortless to find and retrieve information. It allows you to arrange your web properties in a hierarchy according to your specific needs, whether it's their purpose, intended audience, or other aspects of your business.

**Note**: Refer to the [Taxonomy Queries](../../../api-detail/content-delivery-api.md#taxonomy-queries) section for more query filters.

## Get all taxonomies

### Get all taxonomies

**GET** `/taxonomies`

The Get all taxonomies request retrieves all published taxonomies for the given environment.

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "taxonomies": [
    {
      "uid": "categories",
      "name": "Categories",
      "description": "All categories for products.",
      "publish_details": {
        "time": "2025-09-01T13:19:28.365Z",
        "user": "blt368bfe4e50023d0e",
        "environment": "bltd7f8cacaf649b485",
        "locale": "en-us"
      }
    }
  ],
  "count": 1
}
```




## Get a single taxonomy

### Get a single taxonomy

**GET** `/taxonomies/{taxonomy_uid}`

The Get a single taxonomy request retrieves details of a single published taxonomy.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "taxonomy": {
    "uid": "categories",
    "name": "Categories",
    "description": "All categories for products.",
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```




## Get all terms

### Get all terms

**GET** `/taxonomies/{taxonomy_uid}/terms`

The Get all terms request retrieves all published terms in a taxonomy for the specified environment and locale.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`
- **depth** (optional)
  Depth of term hierarchy to retrieve.
  Default: `2`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "terms": [
    {
      "uid": "california",
      "name": "California",
      "parent_uid": "usa",
      "taxonomy_uid": "regions",
      "order": 1,
      "locale": "en-us",
      "created_at": "2024-02-01T10:30:00.000Z",
      "updated_at": "2024-02-01T10:30:00.000Z",
      "created_by": "admin",
      "updated_by": "admin"
    }
  ],
  "count": 1
}
```




## Get a single term

### Get a single term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request retrieves a specific published term within a taxonomy.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`
- **depth** (optional)
  Depth of term hierarchy to retrieve.
  Default: `2`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "term": {
    "uid": "gaming_laptops",
    "name": "Gaming Laptops",
    "parent_uid": "laptops",
    "order": 1,
    "locale": "en-us",
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```




## Get a single term in all locales

### Get a single term in all locales

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/locales`

The Get a single term in all locales request retrieves all localized versions of a published term.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "terms": [
    {
      "uid": "gaming_laptops",
      "name": "Gaming Laptops",
      "locale": "en-us",
      "publish_details": {
        "time": "2025-09-01T13:19:28.365Z",
        "user": "blt368bfe4e50023d0e",
        "environment": "bltd7f8cacaf649b485",
        "locale": "en-us"
      }
    },
    {
      "uid": "gaming_laptops",
      "name": "Ordinateurs Portables de Jeu",
      "locale": "fr-fr",
      "publish_details": {
        "time": "2025-09-01T13:25:00.000Z",
        "user": "blt368bfe4e50023d0e",
        "environment": "bltd7f8cacaf649b485",
        "locale": "fr-fr"
      }
    }
  ]
}
```




## Get descendants of a term

### Get descendants of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request retrieves all descendant terms of a given term.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`
- **depth** (optional)
  Depth of term hierarchy to retrieve.
  Default: `2`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "term": {
    "uid": "electronics",
    "name": "Electronics",
    "parent_uid": null,
    "order": 1,
    "locale": "en-us",
    "descendants": [
      {
        "uid": "laptops",
        "name": "Laptops",
        "parent_uid": "electronics",
        "order": 1,
        "locale": "en-us"
      }
    ]
  }
}
```




## Get ancestors of a term

### Get ancestors of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors`

The Get ancestors of a term request retrieves all ancestor terms of a given term up to the root.

#### URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

#### Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`
- **depth** (optional)
  Depth of term hierarchy to retrieve.
  Default: `2`

#### Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

#### Sample Response

```json
{
  "term": {
    "uid": "gaming_laptops",
    "name": "Gaming Laptops",
    "parent_uid": "laptops",
    "order": 1,
    "locale": "en-us",
    "ancestors": [
      {
        "uid": "laptops",
        "name": "Laptops",
        "parent_uid": "electronics",
        "order": 1,
        "locale": "en-us"
      },
      {
        "uid":"electronics",
        "name": "Electronics",
        "parent_uid": null,
        "order": 1,
        "locale": "en-us"
      }
    ]
  }
}
```

