---
title: "Try 'Include Single Content Type Reference Fields'"
description: /stacks/apiKey/explore
url: /include-single-content-type-reference-fields
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.702Z
updated_at: 2026-07-20T16:52:31.017Z
---

# Try 'Include Single Content Type Reference Fields'

<p>Get entries of a content type along with the comprehensive details of the specified referenced entry. This query uses <a rel="noreferrer" href="https://relay.dev/docs/guides/graphql-server-specification/" target="_blank">relay specification</a> to retrieve the details of the entries referred in reference fields.</p>
<p class="note"><strong>Note</strong>: You can use the skip and limit parameters while querying <a href="/docs/developers/create-content-types/reference" target="_self">Reference</a> fields that refer to a single content type and have been marked as “Multiple”.</p>
<p>If your stack was created after <strong>29th July, 2019</strong>, then you will automatically be using the <a href="/docs/headless-cms/reference-field-upgradation" target="_self">upgraded Reference field</a> that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, there is a reference field called <strong>Categories</strong>, which refers entries of another content type named <strong>Category</strong>.</p>
<p class="note"><strong>Note</strong>: When you query reference fields that refer to content types other than the first <strong>100</strong> available, the query will return an error in the response body of the GraphQL API request. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.</p>
<p>To fetch all entries of the “Product” content type along with the corresponding referenced entry from the “Category” content type, you can run the following query:</p>
<pre>query {
  all_product {
    total
    items {
      title
      categoriesConnection {
        totalCount
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
<p>The totalCount field returns the number of referenced entries for a specific Reference field.</p>
<p class="note"><strong>Note</strong>: Contentstack’s GraphQL queries can fetch referenced entries up to <strong>three</strong> levels deep.</p>

**API Endpoint**: `/stacks/apiKey/explore`

