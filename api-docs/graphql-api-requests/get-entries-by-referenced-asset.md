---
title: "Get Entries by Referenced Asset"
description: /stacks/apiKey/explore
url: /get-entries-by-referenced-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.707Z
updated_at: 2023-03-29T11:16:28.471Z
---

# Get Entries by Referenced Asset

<p>Get entries by using asset data to query a content type.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, if you wish to retrieve all referenced entries that have an image stored by the name <strong>in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg</strong> within the <strong>Images</strong> field, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      images: {
        title: "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            ...on Category {
              title
            }
          }
        }
      }
    }
  }
}
</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the 'Title' field of the <strong>Category</strong> content type.</p>
<p class="note"><strong>Note</strong>: You cannot query content types based on the URL field of an asset.</p>

**API Endpoint**: `/stacks/apiKey/explore`

