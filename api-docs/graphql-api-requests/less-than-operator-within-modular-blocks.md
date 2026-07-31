---
title: "Try 'Less Than' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /less-than-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.699Z
updated_at: 2023-03-30T10:25:54.588Z
---

# Try 'Less Than' Operator within Modular Blocks

<h4 id="less-than-operator-within-modular-blocks">Less Than Operator within Modular Blocks</h4>
<p>Get entries in which the value of a field is lesser than the value provided in the condition. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Block field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Rating</strong> block. And, within this Block field, we have a field named <strong>Stars</strong>. If, for instance, you want to retrieve the entries in which the value for the Stars field is less than ‘3’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_lt: 3
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

