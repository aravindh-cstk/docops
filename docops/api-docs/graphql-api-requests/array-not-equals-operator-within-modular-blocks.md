---
title: "Try 'Not In' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /array-not-equals-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.854Z
updated_at: 2023-03-30T10:36:57.499Z
---

# Try 'Not In' Operator within Modular Blocks

<h4 id="array-not-equals-operator-within-modular-blocks">Not In Operator within Modular Blocks</h4>
<p>Get entries where the values of the fields within Modular Blocks match the condition in the query. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Block field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> block. And, within this Deals block, we have a field named <strong>Deal Name</strong>. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are NOT 'Christmas Deal’, ‘Independence Day Deal’, and ‘Summer Deal', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_nin: [
            "Summer Deal", "Christmas Deal", "Independence Day Deal"
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

