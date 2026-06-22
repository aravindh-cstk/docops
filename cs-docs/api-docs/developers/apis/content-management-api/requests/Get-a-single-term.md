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


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request returns comprehensive information of a specific term available in a particular taxonomy.

##### Create a term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies] |

| term_uid | term_a | Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-ter |

| locale | es | Locale from which to fetch the taxonomy term. If not specified, the master locale is used. |

| include_fallback | true | Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale. |

| include_children_count | true | Set this parameter to 'true' to include in response the total count of child terms available in the parent term. |

| include_referenced_entries_count | true | Set this parameter to 'true' to include in response the total count of entries in which the term is added. |

**Response (200):**

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
