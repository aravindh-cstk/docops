---
title: "Get all terms across all taxonomies"
description: /taxonomies/$all/terms?typeahead={term}
url: /get-all-terms-across-all-taxonomies
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T12:05:41.313Z
updated_at: 2025-11-13T18:18:36.312Z
---

# Get all terms across all taxonomies

<p>The <span data-type='inlineCode'>Get all terms across all taxonomies</span> request returns comprehensive information of all the terms across all taxonomy available in a particular stack in your organization.</p><div class="note"><strong>Note</strong>:<ul><li>The parameter $all in the URL is a reserved keyword in this context. It is used to refer to all taxonomies.</li><li>In the Query Parameters section, you must pass either the <span data-type='inlineCode'>query</span> or <span data-type='inlineCode'>typeahead</span> parameter.</li></ul></div>

**API Endpoint**: `/taxonomies/$all/terms?typeahead={term}`

**Method**: `GET`

## Query Parameters

- **locale** (optional)
  <p>Specifies the locale from which to fetch the terms. If not provided, the system uses the master locale.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.</p>
- **include_children_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of child terms available in the parent term.</p><p></p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which the term is added.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.</p>
- **query** (optional)
  <p>Provide a custom query for the <span data-type='inlineCode'>taxonomy_uid</span> and <span data-type='inlineCode'>term_uid</span> in <span data-type='inlineCode'>string</span> format.</p>
- **typeahead** (optional)
  <p> Retrieves responses that match the provided string.</p>
- **limit** (optional)
  <p>Enter the maximum number of terms to be returned.</p>
- **skip** (optional)
  <p>Enter the number of terms to be skipped from the response body.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

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

