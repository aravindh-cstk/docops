---
title: "Get a single term"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-management-api/requests/get-a-single-terms
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get a single term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request returns comprehensive information of a specific term available in a particular taxonomy.

##### Create a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

## Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy term. If not specified, the master locale is used.
  Default: `es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

## Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:59:54.988Z",
        "updated_by": "b****************44",
        "children_count": 3,
        "referenced_entries_count": 2
    }
}
```

