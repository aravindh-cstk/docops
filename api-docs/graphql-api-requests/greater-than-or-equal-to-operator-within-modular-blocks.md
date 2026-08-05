---
title: "Try 'Greater Than Or Equal To' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /greater-than-or-equal-to-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.635Z
updated_at: 2023-03-29T12:24:45.399Z
---

# Try 'Greater Than Or Equal To' Operator within Modular Blocks

<h4 id="greater-than-or-equal-to-operator-within-modular-blocks">Greater Than Or Equal To Operator within Modular Blocks</h4>
<p>Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Blocks field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Rating</strong> block. And, within this Rating block, we have a field named <strong>Stars</strong>. If, for instance, you want to retrieve the entries in which the values for the Stars field are greater than or equal to ‘3’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_gte: 3
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

