---
title: "Get all terms across all taxonomies"
description: GET /taxonomies/$all/terms?typeahead={term}
url: developers/apis/content-management-api/requests/get-all-terms-across-all-taxonomies
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get all terms across all taxonomies

**GET** `/taxonomies/$all/terms?typeahead={term}`

The Get all terms across all taxonomies request returns comprehensive information of all the terms across all taxonomy available in a particular stack in your organization.

**Note**:

- The parameter $all in the URL is a reserved keyword in this context. It is used to refer to all taxonomies.
- In the Query Parameters section, you must pass either the query or typeahead parameter.

## Query Parameters

- **locale** (optional)
  Specifies the locale from which to fetch the terms. If not provided, the system uses the master locale.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **query** (optional)
  Provide a custom query for the taxonomy_uid and term_uid in string format.
  Default: `{"$or":[{"taxonomy_uid":"taxonomy_1","uid":{"$in":["term_1", “term_2”]}}]}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
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

## Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a2_1",
            "name": "Term A2.1",
            "locale": "en-us",
            "parent_uid": "term_a2",
            "depth": 3,
            "created_at": "2023-10-15T05:58:46.769Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:46.769Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                },
                {
                    "uid": "term_a2",
                    "name": "Term A2"
                }
            ]
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:16.921Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:16.921Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:36.476Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:36.476Z",
            "updated_by": "b****************44",
            "children_count": 1,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a",
            "name": "Term A",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:57:34.775Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:34.775Z",
            "updated_by": "b****************44",
            "children_count": 3,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 17
}
```

