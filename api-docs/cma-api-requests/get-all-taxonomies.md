---
title: "Get all taxonomies"
description: /taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}
url: /get-all-taxonomies
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T10:22:13.367Z
updated_at: 2025-11-13T17:47:33.472Z
---

# Get all taxonomies

<p>The <span class="code">Get all taxonomies</span> request returns comprehensive information of all the taxonomies available in a particular stack in your organization.</p>

**API Endpoint**: `/taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}`

**Method**: `GET`

## Query Parameters

- **locale** (optional)
  <p>Locale from which to fetch the taxonomies. If not specified, the default locale is used.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.</p>
- **include_terms_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.</p>
- **include_referenced_terms_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).</p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which terms are added.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of taxonomies available in a stack.</p>
- **deleted** (optional)
  <p> Set this parameter to 'true' to retrieve only deleted taxonomies within a stack. </p>
- **asc** (optional)
  <p>Sort the response in ascending order.</p>
- **desc** (optional)
  <p>Sort the response in descending order.</p>
- **query** (optional)
  <p>Provide a custom query for the <span class="code">taxonomy_uid</span> in <span class="code">string</span> format.</p>
- **typeahead** (optional)
  <p>Retrieves responses that match the provided <span data-type='inlineCode'>string</span>.</p>
- **limit** (optional)
  <p>Enter the maximum number of taxonomies to be returned.</p>
- **skip** (optional)
  <p>Enter the number of taxonomies to be skipped from the response body.</p>

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
    "taxonomies": [
        {
            "uid": "sample_four",
            "name": "Sample Four",
            "description": "Description for the sample four taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:18.832Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:18.832Z",
            "updated_by": "b****************44",
            "terms_count": 7,

        },
        {
            "uid": "sample_three",
            "name": "Sample Three",
            "description": "Description for the sample three taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:04.229Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:04.229Z",
            "updated_by": "b****************44",
            "terms_count": 2
        },
        {
            "uid": "sample_two",
            "name": "Sample Two",
            "description": "Description for the sample two taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:56:39.064Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:56:39.064Z",
            "updated_by": "b****************44",
            "terms_count": 6,

        },
        {
            "uid": "sample_one",
            "name": "Sample One",
            "description": "Description for the sample one taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:30:20.509Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:30:20.509Z",
            "updated_by": "b****************44",
            "terms_count": 2
        }
    ],
    "count": 4
}
```

