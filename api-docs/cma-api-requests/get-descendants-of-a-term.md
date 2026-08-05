---
title: "Get descendants of a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants
url: /get-descendants-of-a-term
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:48:53.702Z
updated_at: 2025-11-13T18:14:06.181Z
---

# Get descendants of a term

<p>The <span data-type='inlineCode'>Get descendants of a term</span> request returns all the child terms of a specific term available in a particular taxonomy.</p><h5>Get ancestors of a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale from which to fetch the descendant taxonomy terms. If not specified, the master locale is used.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.</p>
- **depth** (optional)
  <p>The response includes terms beginning at the root level and continuing to the specified depth.</p>
- **include_children_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of child terms available in the parent term.</p><p></p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which the term is added.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.</p>
- **include_order** (optional)
  <p>Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.</p>
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
- **branch** (optional)
  <p>Specify the target branch when using the <span data-type='inlineCode'>include_fallback</span> parameter. If not specified, the system uses the <span data-type='inlineCode'>main</span> branch by default.</p>

## Response

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

