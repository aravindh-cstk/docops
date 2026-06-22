---
title: "Unlocalize a taxonomy"
description: DELETE /taxonomies/{taxonomy_uid}
url: developers/apis/content-management-api/requests/unlocalize-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Unlocalize a taxonomy


**Method:** `DELETE`  
**Endpoint:** `/taxonomies/{taxonomy_uid}`

The Unlocalize a taxonomy request is used to remove translated values from a taxonomy in a specified locale.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | global_content_topics | Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/a |

| locale | es-es | The locale from which to unlocalize. If not specified, the master locale is used. |
