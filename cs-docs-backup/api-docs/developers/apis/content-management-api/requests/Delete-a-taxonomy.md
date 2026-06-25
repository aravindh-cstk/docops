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

**DELETE** `/taxonomies/{taxonomy_uid}`

The Delete a taxonomy request deletes an existing taxonomy and all the terms within it. To confirm the deletion of a taxonomy, you need to specify the force=true query parameter.

**Note:** When you delete a taxonomy, its existing associations with content types are removed. Additionally, the child terms will also eliminate associations with existing entries.

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

## Query Parameters

- **force** (required)
  Enter 'true' to force delete a taxonomy.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`

