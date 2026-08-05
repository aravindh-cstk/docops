---
title: "Include Embedded RTE Items"
description: /stacks/apiKey/explore
url: /include-embedded-rte-items
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.642Z
updated_at: 2023-03-29T07:58:54.640Z
---

# Include Embedded RTE Items

<p>Get entries of a content type along with the comprehensive details of the embedded entries and assets referenced inside the <a href="/docs/developers/json-rich-text-editor" target="_self">JSON Rich Text Editor</a>. This query uses inline fragments and relay specification to retrieve details of rich text editors&nbsp;that refer to multiple embedded items.<br></p>
<p class="note"><strong>Note</strong>: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.</p>
<p>You can specify the name of the content types to which the embedded entries belong under the <span class="code">embedded_itemsConnection</span> field schema. To fetch embedded assets, provide the system-generated typename, <span class="code">SysAsset</span>.</p>
<pre>embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on KitchenAppliances {
                title
                kitchen_appliance_price_in_usd
              }
              ... on SysAsset {
                title
              }
            }
          }
        }</pre>
<p>Each node either specifies the referenced content type or the system-generated typename.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a <strong>Cart Items</strong> JSON Rich Text Editor field.&nbsp;This field stores information about products that you have already added to your cart (electronic appliances&nbsp;in this example), and also contains a company logo.</p>
<p>If, for instance, you want to retrieve the embedded product details inside this field (along with the company logo), your query will look as follows:</p>
<pre>query {
  all_product {
    total
    items {
      title
      url
      cart_items {
        embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on Electronics {
                title
                appliance_price_in_usd
                appliance_details
              }
              ... on SysAsset {
                title
                file_size
              }
            }
          }
        }
      }
    }
  }
}</pre>
<p class="note"><strong>Note</strong>: You can retrieve a maximum of <strong>100</strong> embedded items (entries or assets)&nbsp;in a single GraphQL API request.</p>

**API Endpoint**: `/stacks/apiKey/explore`

