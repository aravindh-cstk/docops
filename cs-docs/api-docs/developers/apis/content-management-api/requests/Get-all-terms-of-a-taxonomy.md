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


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}`

The Get all terms of a taxonomy request returns comprehensive information of all the terms within a taxonomy available in a particular stack in your organization.

##### Get a single term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)'  |

| locale | en-us | Locale from which to fetch the taxonomy terms. If not specified, the master locale is used. |

| include_fallback | true | Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale. |

| depth | 3 | The response includes terms beginning at the root level and continuing to the specified depth. |

| include_children_count | true | Set this parameter to 'true' to include in response the total count of child terms available in the parent term. |

| include_referenced_entries_count | true | Set this parameter to 'true' to include in response the total count of entries in which the term is added. |

| include_count | true | Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy. |

| include_order | true | Set this parameter to 'true' to include in response the order of the terms available in a taxonomy. |

| asc | created_at | Sort the response in ascending order. |

| desc | created_at | Sort the response in descending order. |

| query | {"uid":{"$in":["term_1","term_2"]}} | Provide a custom query for the term_uid in string format. |

| typeahead | sample | Retrieves responses that match the provided string. |

| deleted | false | Set this parameter to 'true' to retrieve only deleted terms within a taxonomy. |

| limit | 2 | Enter the maximum number of terms to be returned. |

| skip | 2 | Enter the number of terms to be skipped from the response body. |

**Response (200):**

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
