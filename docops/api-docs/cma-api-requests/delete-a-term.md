---
title: "Delete a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /delete-a-term
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:59:33.282Z
updated_at: 2023-12-15T13:23:19.248Z
---

# Delete a term

<p>The <span data-type='inlineCode'>Delete a term</span> request deletes an existing term and all the child terms within it.</p><p>To confirm the deletion of a term, you need to specify the <span data-type='inlineCode'>force=true</span> query parameter.</p><p class="note"><strong>Note:</strong> When you delete a term, its existing associations with entries are removed. Additionally, the child terms will also eliminate associations with existing entries.</p><h5>Get all terms across all taxonomies</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `DELETE`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy which you want to delete. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term of which you want to delete. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **force** (required)
  <p>Enter 'true' to force delete a term.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>

