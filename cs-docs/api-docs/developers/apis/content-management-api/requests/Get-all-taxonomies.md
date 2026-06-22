---
title: "Get all taxonomies"
description: GET /taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}
url: developers/apis/content-management-api/requests/get-all-taxonomies
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get all taxonomies


**Method:** `GET`  
**Endpoint:** `/taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all taxonomies request returns comprehensive information of all the taxonomies available in a particular stack in your organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| locale | es-es | Locale from which to fetch the taxonomies. If not specified, the default locale is used. |

| include_fallback | true | Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale. |

| include_terms_count | true | Set this parameter to 'true' to include in response the total count of terms available in a taxonomy. |

| include_referenced_terms_count | false | Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies). |

| include_referenced_entries_count | true | Set this parameter to 'true' to include in response the total count of entries in which terms are added. |

| include_count | true | Set this parameter to 'true' to include in response the total count of taxonomies available in a stack. |

| deleted | false | Set this parameter to 'true' to retrieve only deleted taxonomies within a stack. |

| asc | created_at | Sort the response in ascending order. |

| desc | created_at | Sort the response in descending order. |

| query | {"uid":{"$in":["taxonomy_1","taxonomy_2"]}} | Provide a custom query for the taxonomy_uid in string format. |

| typeahead | sample | Retrieves responses that match the provided string. |

| limit | 2 | Enter the maximum number of taxonomies to be returned. |

| skip | 2 | Enter the number of taxonomies to be skipped from the response body. |

**Response (200):**

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
