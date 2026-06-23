---
title: "Get descendants of a term"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants
url: developers/apis/content-management-api/requests/get-descendants-of-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get descendants of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request returns all the child terms of a specific term available in a particular taxonomy.

##### Get ancestors of a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

## Query Parameters

- **locale** (optional)
  Locale from which to fetch the descendant taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **depth** (optional)
  The response includes terms beginning at the root level and continuing to the specified depth.
  Default: `3`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **include_order** (optional)
  Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.
  Default: `true`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

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
    "terms": [
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-17T12:58:35.427Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:58:35.427Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
"referenced_entries_count": 2
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T06:00:09.621Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:36:27.508Z",
            "updated_by": "blt812144cf5a0eaada",
            "children_count": 3,
            "order": 3
        }
    ],
    "count": 2
}
```

