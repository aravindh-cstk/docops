---
title: "Try 'OR' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /or-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.799Z
updated_at: 2023-03-30T10:28:16.259Z
---

# Try 'OR' Operator within Modular Blocks

<h4 id="or-operator-within-modular-blocks">OR Operator within Modular Blocks</h4>
<p>Get all entries that satisfy at least one of the given conditions provided in the OR query. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Block field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> and <strong>Rating</strong> blocks. And, within the Deals and Rating blocks, we have the <strong>Deal Name</strong> and <strong>Stars</strong> fields, respectively. If, for instance, you want to retrieve the entries wherein either the value for Deal Name is ‘Christmas Deal’ and Stars is '2', respectively, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      OR: [
        {
          additional_info: {
            deals: {
              deal_name: "Christmas Deal"
            }
          }
        },
        {
          additional_info: {
            rating: {
              stars: 2
            }
          }
        }
      ]
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

