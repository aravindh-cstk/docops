---
title: "Try 'Format' Parameter"
description: /stacks/apiKey/explore
url: /format-parameter
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.737Z
updated_at: 2023-03-30T10:10:59.231Z
---

# Try 'Format' Parameter

<p>Let’s get started by using a single <span data-type="inlineCode">format</span> parameter to understand how these parameters function.</p>
<p>To convert an image placed on your Contenstack website from one format to another, use the <span data-type="inlineCode">format</span> parameter. For example, we have set the <span data-type="inlineCode">format</span> parameter to <span data-type="inlineCode">GIF</span> in the following image transformation query.</p>
<pre>query {
  all_assets(limit: 25) {
    total
    items {
        title
            url(transform: {format: GIF})
    }
  }
}</pre>
<p>This query will convert the current image format to a <span data-type="inlineCode">GIF</span> format.</p>

**API Endpoint**: `/stacks/apiKey/explore`

