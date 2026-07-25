---
title: "Try 'Include Multi Content Type Reference Fields'"
description: /stacks/apiKey/explore
url: /try-include-multi-content-type-reference-fields
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.679Z
updated_at: 2023-03-29T11:23:11.625Z
---

# Try 'Include Multi Content Type Reference Fields'

<p>Get entries of a content type along with the comprehensive details of the specified referenced entries. This query uses inline fragments and relay specification to retrieve details of entries referring to multiple content types.</p>
<p class="note"><strong>Note</strong>: Contentstack’s GraphQL queries can fetch referenced entries up to three levels deep.</p>
<p>Within the inline fragments section, you need to specify the name of the content type. Subsequently, you need to append the Connection term as postfix for the content type UID.</p>
<pre>{reference_field_UID}Connection {
        totalCount
        edges {
          node {
            ... on {Referenced_Content_Type_Name_in_PascalCase} {
              {field_name}
            }
          }
        }
      }
</pre>
<p>The node specifies the referenced content types related to the parent content type.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a multi content type Reference field named <strong>Frequently Bought Together</strong>. This Reference field refers to entries of the following content types: <strong>Electronics</strong> and <strong>Kitchen Appliances</strong>.</p>
<p>So, for instance, if you need to fetch referenced entries from both content types, <strong>Electronics</strong> and <strong>Kitchen Appliances</strong>, your query will look as follows:</p>
<pre>query {
  all_product {
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
}</pre>
<p class="note"><strong>Note</strong>: When you query reference fields that refer to content types other than the first <strong>100</strong> available, the response body will return an error. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.</p>

**API Endpoint**: `/stacks/apiKey/explore`

