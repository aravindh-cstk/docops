---
title: "Unlocalize a term"
description: DELETE /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developer-apis/content-management-api-requests/unlocalize-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Unlocalize a term

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Unlocalize a term request is used to remove localized values for a term in a specific locale.

##### Get descendants of a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to unlocalize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

## Query Parameters

- **locale** (optional)
  The locale from which you want to remove localization. If not specified, the system uses the master locale.
  Default: `es`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

