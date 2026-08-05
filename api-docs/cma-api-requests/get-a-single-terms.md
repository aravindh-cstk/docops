---
title: "Get a single term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /get-a-single-terms
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:17:32.424Z
updated_at: 2025-11-13T18:04:55.478Z
---

# Get a single term

<p>The <span data-type='inlineCode'>Get a single term</span> request returns comprehensive information of a specific term available in a particular taxonomy.</p><h5>Create a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale from which to fetch the taxonomy term. If not specified, the master locale is used.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.</p>
- **include_children_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of child terms available in the parent term.</p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which the term is added.</p>

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

