---
title: "Get a single taxonomy"
description: GET /taxonomies/{taxonomy_uid}
url: developers/apis/content-management-api/requests/get-a-single-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Get a single taxonomy


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}`

The Get a single taxonomy request returns comprehensive information of a specific taxonomy available in a particular stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies] |

| locale | es | Locale from which to fetch the taxonomy. If not specified, the master locale is used. |

| include_fallback | true | Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale. |

| include_terms_count | true | Set this parameter to 'true' to include in response the total count of terms available in a taxonomy. |

| include_referenced_terms_count | false | Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies). |

| include_referenced_entries_count | true | Set this parameter to 'true' to include in response the total count of entries in which terms are added. |

**Response (200):**

```json
{
   "taxonomy":{
      "uid":"global_content_topics",
      "name":"Temas Globales de Contenido",
      "description":"Description for the Global Content Topics taxonomy.",
      "locale": "es",
      "created_at":"2025-11-13T05:30:20.509Z",
      "created_by":"b****************44",
      "updated_at":"2025-11-13T05:30:20.509Z",
      "updated_by":"b****************44",
      "terms_count":2,
      "referenced_terms_count":3,
      "referenced_entries_count":6
   }
}
```
