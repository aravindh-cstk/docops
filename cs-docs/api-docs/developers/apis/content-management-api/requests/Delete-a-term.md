---
title: "Delete a term"
description: DELETE /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-management-api/requests/delete-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-12-15
---

# Delete a term


**Method:** `DELETE`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Delete a term request deletes an existing term and all the child terms within it.

To confirm the deletion of a term, you need to specify the force=true query parameter.

**Note:** When you delete a term, its existing associations with entries are removed. Additionally, the child terms will also eliminate associations with existing entries.

##### Get all terms across all taxonomies

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy which you want to delete. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonom |

| term_uid | term_a | Enter the unique ID of the term of which you want to delete. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxono |

| force | false | Enter 'true' to force delete a term. |
