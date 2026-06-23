---
title: "Get all terms of a taxonomy"
description: GET /taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}
url: developers/apis/content-management-api/requests/get-all-terms-of-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get all terms of a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}`

The Get all terms of a taxonomy request returns comprehensive information of all the terms within a taxonomy available in a particular stack in your organization.

##### Get a single term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

## Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy terms. If not specified, the master locale is used.
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
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **query** (optional)
  Provide a custom query for the term_uid in string format.
  Default: `{"uid":{"$in":["term_1","term_2"]}}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted terms within a taxonomy.
  Default: `false`
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
            "uid": "data_science",
            "name": "Data Science",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:40.102Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:40.102Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        },
        {
            "uid": "ai",
            "name": "AI",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:23.659Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:23.659Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 1,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 2
}
```

