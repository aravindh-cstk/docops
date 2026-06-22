---
title: "Unlocalize a term"
description: DELETE /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-management-api/requests/unlocalize-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Unlocalize a term


**Method:** `DELETE`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Unlocalize a term request is used to remove localized values for a term in a specific locale.

##### Get descendants of a term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | global_content_topics | Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomie |

| term_uid | artificial_intelligence | Enter the unique ID of the term you want to unlocalize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)'  |

| locale | es | The locale from which you want to remove localization. If not specified, the system uses the master locale. |
