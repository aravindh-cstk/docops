---
title: "Try 'In' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /in-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.837Z
updated_at: 2023-03-30T10:45:28.613Z
---

# Try 'In' Operator within Modular Blocks

<h4 id="Array-equals-operator-within-modular-blocks">In Operator within Modular Blocks</h4>
<p>Get entries where the value of a field within Modular Blocks matches any of the given values. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Blocks field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> block. And, within this Deals block, we have a field named <strong>Deal Name</strong>. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are 'Christmas Deal’, ‘Summer Deal', and ‘Independence Day Deal’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_in: [
            "Christmas Deal", "Summer Deal", "Independence Day Deal"
          ]
        }
      }
    }) {
    items {
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
<p>The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.<br></p>

**API Endpoint**: `/stacks/apiKey/explore`

