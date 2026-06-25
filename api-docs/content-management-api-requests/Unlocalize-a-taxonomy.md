---
title: "Unlocalize a taxonomy"
description: DELETE /taxonomies/{taxonomy_uid}
url: developer-apis/content-management-api-requests/unlocalize-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Unlocalize a taxonomy

**DELETE** `/taxonomies/{taxonomy_uid}`

The Unlocalize a taxonomy request is used to remove translated values from a taxonomy in a specified locale.

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](../../../../api-detail/content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

## Query Parameters

- **locale** (required)
  The locale from which to unlocalize. If not specified, the master locale is used.
  Default: `es-es`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

