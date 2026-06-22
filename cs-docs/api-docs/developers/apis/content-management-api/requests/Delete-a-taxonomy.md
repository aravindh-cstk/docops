---
title: "Delete a taxonomy"
description: DELETE /taxonomies/{taxonomy_uid}
url: developers/apis/content-management-api/requests/delete-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-12-15
---

# Delete a taxonomy


**Method:** `DELETE`  
**Endpoint:** `/taxonomies/{taxonomy_uid}`

The Delete a taxonomy request deletes an existing taxonomy and all the terms within it. To confirm the deletion of a taxonomy, you need to specify the force=true query parameter.

**Note:** When you delete a taxonomy, its existing associations with content types are removed. Additionally, the child terms will also eliminate associations with existing entries.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)'  |

| force | false | Enter 'true' to force delete a taxonomy. |
