---
title: "Get all terms of a taxonomy"
description: /taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}
url: /get-all-terms-of-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:13:20.015Z
updated_at: 2025-11-13T18:03:15.489Z
---

# Get all terms of a taxonomy

<p>The <span class="code">Get all terms of a taxonomy</span> request returns comprehensive information of all the terms within a taxonomy available in a particular stack in your organization.</p><h5>Get a single term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale from which to fetch the taxonomy terms. If not specified, the master locale is used.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.</p>
- **depth** (optional)
  <p>The response includes terms beginning at the root level and continuing to the specified depth.</p>
- **include_children_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of child terms available in the parent term.</p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which the term is added.</p>
- **include_count** (optional)
  <p> Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.</p>
- **include_order** (optional)
  <p>Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.</p>
- **asc** (optional)
  <p>Sort the response in ascending order.</p>
- **desc** (optional)
  <p>Sort the response in descending order.</p>
- **query** (optional)
  <p>Provide a custom query for the <span data-type='inlineCode'>term_uid</span> in <span data-type='inlineCode'>string</span> format.</p>
- **typeahead** (optional)
  <p>Retrieves responses that match the provided <span data-type='inlineCode'>string</span>.</p>
- **deleted** (optional)
  <p>Set this parameter to 'true' to retrieve only deleted terms within a taxonomy. </p>
- **limit** (optional)
  <p><span style='font-size: 12pt;'>Enter the maximum number of terms to be returned.</span></p>
- **skip** (optional)
  <p>Enter the number of terms to be skipped from the response body.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Specify the target branch when using the <span data-type='inlineCode'>include_fallback</span> parameter. If not specified, the system uses the <span data-type='inlineCode'>main</span> branch by default.</p>

## Response

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

