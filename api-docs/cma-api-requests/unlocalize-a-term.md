---
title: "Unlocalize a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /unlocalize-a-term
product: Contentstack
doc_type: api-request
created_at: 2025-11-13T18:11:56.856Z
updated_at: 2025-11-13T18:20:30.958Z
---

# Unlocalize a term

<p>The <span data-type='inlineCode'>Unlocalize a term</span> request is used to remove localized values for a term in a specific locale.</p><h5>Get descendants of a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `DELETE`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term you want to unlocalize. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **locale** (optional)
  <p>The locale from which you want to remove localization. If not specified, the system uses the master locale.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

