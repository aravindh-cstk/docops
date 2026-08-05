---
title: "Try 'Search Referenced Entries from Multiple Content Types'"
description: /stacks/apiKey/explore
url: /try-search-referenced-entries-from-multiple-content-types
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.690Z
updated_at: 2023-03-29T11:20:20.221Z
---

# Try 'Search Referenced Entries from Multiple Content Types'

<p>Get entries having values based on referenced fields. This query uses <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve all entries that satisfy query conditions made on referenced fields that refer to multiple content types.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a multi content type Reference field named <strong>Frequently Bought Together</strong>. This Reference field refers to entries of the following content types: <strong>Electronics</strong> and <strong>Kitchen Appliances</strong>.</p>
<p>Let us use the <strong>MATCH</strong> operator to search entries of the two referenced content types: <strong>Electronics</strong> and <strong>Kitchen</strong><strong> Appliances</strong> on the basis of their <strong>Title</strong> field.&nbsp;The “Match” operator filters the entries to return only the entries that match the specified condition(s). You can enter the following values for the Match operator:</p><ul><li><strong>ALL</strong>: The ALL option returns only those entries that match all the conditions specified</li><li><strong>ANY</strong>: The ANY option returns only those entries that match any one of the conditions specified</li></ul>
<p>If you do not specify the MATCH operator, then the query uses the ALL option by default.</p>
<p>To fetch the referenced entries where the value of the <strong>Title</strong> field is one among the following: <strong>Sony Bravia LED Smart TV</strong> and <strong>Glenmark Cooktop</strong>,&nbsp;set the MATCH operator to ANY. Your query&nbsp;will appear as follows:</p>
<pre>query {
  all_product(
    where: {
      frequently_bought_together: {
        MATCH: ANY,
        electronics: {
          title: "Sony Bravia LED Smart TV"
        },
        kitchen_appliances: {
          title: "Glenmark Cooktop"
        }
      }
    }) {
    items {
      title
      frequently_bought_togetherConnection {
        edges {
          node {
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
            ... on Electronics {
              title
              appliance_details
            }
          }
        }
      }
    }
  }
}
</pre>
<p>The response body will include all entries of the Electronics and Kitchen Appliances content types that satisfy the query, and will include details of just the “Title” field of these content types. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.</p>
<p class="note"><strong>Note</strong>: Only up to <strong>three</strong> levels deep of referenced fields can be used within the where argument to filter the requested entries.</p>

**API Endpoint**: `/stacks/apiKey/explore`

