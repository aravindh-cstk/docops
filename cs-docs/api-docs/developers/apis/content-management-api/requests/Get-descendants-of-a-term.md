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


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request returns all the child terms of a specific term available in a particular taxonomy.

##### Get ancestors of a term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies] |

| term_uid | term_a | Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-ter |

| locale | en-us | Locale from which to fetch the descendant taxonomy terms. If not specified, the master locale is used. |

| include_fallback | true | Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale. |

| depth | 3 | The response includes terms beginning at the root level and continuing to the specified depth. |

| include_children_count | true | Set this parameter to 'true' to include in response the total count of child terms available in the parent term. |

| include_referenced_entries_count | true | Set this parameter to 'true' to include in response the total count of entries in which the term is added. |

| include_count | true | Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy. |

| include_order | true | Set this parameter to 'true' to include in response the order of the terms available in a taxonomy. |

| limit | 2 | Enter the maximum number of terms to be returned. |

| skip | 2 | Enter the number of terms to be skipped from the response body. |

**Response (200):**

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
