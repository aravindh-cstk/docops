---
title: "Delete a taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /delete-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T10:52:27.034Z
updated_at: 2023-12-15T13:20:42.814Z
---

# Delete a taxonomy

<p>The <span class="code">Delete a taxonomy</span> request deletes an existing taxonomy and all the terms within it. To confirm the deletion of a taxonomy, you need to specify the <span class="code">force=true</span> query parameter.</p><p class="note"><strong>Note:</strong> When you delete a taxonomy, its existing associations with content types are removed. Additionally, the child terms will also eliminate associations with existing entries.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `DELETE`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **force** (required)
  <p>Enter 'true' to force delete a taxonomy.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>

