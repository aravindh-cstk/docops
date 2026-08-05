---
title: "Try 'Exists' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: /exists-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.700Z
updated_at: 2023-03-29T11:19:19.117Z
---

# Try 'Exists' Operator within Modular Blocks

<h4 id="exists-operator-within-modular-blocks">Exists Operator within Modular Blocks</h4>
<p>Get entries if value of the field mentioned in the condition exists. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that are part of any block within a Modular Block field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Modular Blocks field named <strong>Additional Info</strong> that contains the <strong>Deals</strong> block. And, within this Block field, we have a field named <strong>Deal Name</strong>. If, for instance, you want to retrieve the entries in which the value for the <strong>Stars</strong> field exists, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_exists: true
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
                  title
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
<p>The response body of this query will display details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.<br>
</p>

**API Endpoint**: `/stacks/apiKey/explore`

