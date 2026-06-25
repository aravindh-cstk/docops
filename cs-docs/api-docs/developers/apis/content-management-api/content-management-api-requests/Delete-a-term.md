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

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Delete a term request deletes an existing term and all the child terms within it.

To confirm the deletion of a term, you need to specify the force=true query parameter.

**Note:** When you delete a term, its existing associations with entries are removed. Additionally, the child terms will also eliminate associations with existing entries.

##### Get all terms across all taxonomies

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy which you want to delete. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to delete. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

## Query Parameters

- **force** (required)
  Enter 'true' to force delete a term.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`

