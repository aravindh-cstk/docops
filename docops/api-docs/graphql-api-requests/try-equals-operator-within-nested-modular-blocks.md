---
title: "Try 'Equals' Operator within Nested Modular Blocks"
description: /stacks/apiKey/explore
url: /try-equals-operator-within-nested-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.570Z
updated_at: 2023-08-07T06:19:24.512Z
---

# Try 'Equals' Operator within Nested Modular Blocks

<h4 id="equals-operator-within-nested-modular-blocks">Equals Operator within Nested Modular Blocks</h4>
<p>You can use <a rel="noreferrer" href="https://graphql.org/learn/queries/#inline-fragments" target="_blank">inline fragments</a> to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a <strong>Coupons</strong> Modular Blocks field that is nested within the <strong>Deals</strong> block of the <strong>Additional Info</strong> Modular Blocks field. The Coupons Modular Blocks field contains a <strong>Daily Coupons</strong> block:</p>
<pre>... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
</pre>
<p>If, for instance, you want to retrieve certain fields of all the entries in which the value for the "Coupon Name" field is <strong>Lucky Twenty</strong>, your query will be formed as follows:</p>
<pre>query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_name: "Lucky Twenty"
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}</pre>
<p>The response body of this query will also include details of the fields that lie within the <strong>Coupons</strong> Nested Modular Blocks field.</p>

**API Endpoint**: `/stacks/apiKey/explore`

