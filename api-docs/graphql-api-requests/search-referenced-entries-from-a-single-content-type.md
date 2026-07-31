---
title: "Try 'Search Referenced Entries from a Single Content Type'"
description: /stacks/apiKey/explore
url: /search-referenced-entries-from-a-single-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.821Z
updated_at: 2026-07-20T16:52:33.248Z
---

# Try 'Search Referenced Entries from a Single Content Type'

<p>Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields that refer to a single content type.</p>
<p class="note"><strong>Note</strong>: If your stack was created after <strong>29th July, 2019</strong>, then you will automatically be using the <a href="/docs/headless-cms/reference-field-upgradation">upgraded Reference field</a> that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.</p>
<p>Let us use the equals operator to search based on the <strong>Title</strong> field of the referenced content type, <strong>Category</strong>.</p>
<p><strong>Example</strong>: In the Product content type, if you wish to retrieve all entries that have their category title set to ‘Mobiles’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      categories: {
        title: "Mobiles"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
</pre>
<p>The response body will include all entries of the Product content type that satisfy the query, and will include details of just the ‘Title’ field of the Category content type. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.</p>
<p class="note"><strong>Note</strong>: Only up to <strong>three</strong> levels deep of referenced fields can be used within the where argument to filter the requested entries.</p>

**API Endpoint**: `/stacks/apiKey/explore`

