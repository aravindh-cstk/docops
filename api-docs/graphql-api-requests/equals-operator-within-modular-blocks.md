---
title: "Try 'Equals' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /equals-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.582Z
updated_at: 2023-03-29T07:52:03.063Z
---

# Try 'Equals' Operator within Modular Blocks

<h4 id="equals-operator-within-modular-blocks">Equals Operator within Modular Blocks</h4>
<p>Get entries where the value of a field within a Modular Blocks field matches the condition in the query. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that lie within a particular block of a Modular Blocks field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> block. And, within this Deals block, we have a field named <strong>Deal Name</strong>. If, for instance, you want to retrieve the entries in which the value for the Deal Name field is 'Christmas Deal', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name: "Christmas Deal"
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}</pre>
<p>The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields from the ‘Deals’ block of the modular block named ‘Additional Info.’<br></p>

**API Endpoint**: `/stacks/apiKey/explore`

