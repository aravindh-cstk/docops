---
title: "Unlocalize a taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /unlocalize-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2025-11-13T17:54:41.329Z
updated_at: 2025-11-13T17:54:53.383Z
---

# Unlocalize a taxonomy

<p>The <span data-type='inlineCode'>Unlocalize a taxonomy</span> request is used to remove translated values from a taxonomy in a specified locale.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `DELETE`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '<a href="/docs/developers/apis/content-management-api#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **locale** (required)
  <p>The locale from which to unlocalize. If not specified, the master locale is used.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

