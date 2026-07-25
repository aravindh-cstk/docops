---
title: "Try 'AND' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /and-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.787Z
updated_at: 2023-03-30T10:32:54.865Z
---

# Try 'AND' Operator within Modular Blocks

<h4 id="and-operator-within-modular-blocks">AND Operator within Modular Blocks</h4>
<p>Get entries that satisfy all the conditions provided in the AND query. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that lie within a particular block of a Modular Blocks field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> and <strong>Rating</strong> blocks. And, within the Deals and Rating blocks, we have the <strong>Deal Name</strong> and <strong>Stars</strong> fields, respectively. If, for instance, you want to retrieve the entries wherein the values for Deal Name and Stars fields are ‘Christmas Deal’ and '2', respectively, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      AND: [
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

