---
title: "Try 'Include Assets Added to a Content Type'"
description: /stacks/apiKey/explore
url: /try-include-assets-added-to-a-content-type-
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.552Z
updated_at: 2023-03-29T07:53:01.013Z
---

# Try 'Include Assets Added to a Content Type'

<p>Get entries of a content type along with the comprehensive details of an asset that has been used in the entries. This query uses <a rel="noreferrer" href="https://relay.dev/docs/guides/graphql-server-specification/" target="_blank">relay specification</a> to fetch asset details such as the title of an asset or its URL.</p>
<p>Specify the asset UID while retrieving the asset information. Subsequently, you need to append the Connection term to the asset UID as a postfix.</p>
<p class="note"><strong>Note</strong>: You can use the skip and limit pagination parameters only while querying assets that have been marked as “Multiple”.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you need to retrieve all entries along with comprehensive details of the image stored within the <strong>Images</strong> field. To fetch only the first <strong>five</strong> assets while retrieving the entries, use the limit parameter.</p>
<p>Your query will look as follows:</p>
<pre>query {
  all_product {
    items {
      title
      imagesConnection(limit: 5) {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
}
</pre>
<p>The response body of this query will include details of the ‘Title’ field of the Product content type and the ‘Title’ and ‘Description’ of the assets stored in the Images field. It will only return the first five assets.</p>

**API Endpoint**: `/stacks/apiKey/explore`

