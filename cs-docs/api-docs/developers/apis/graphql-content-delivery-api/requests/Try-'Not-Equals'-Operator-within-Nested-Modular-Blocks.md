---
title: "Try 'Not Equals' Operator within Nested Modular Blocks"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-not-equals-operator-within-nested-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Not Equals' Operator within Nested Modular Blocks


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

**Not-equals Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If, for instance, you need to retrieve all entries where the value of the "Coupon Name" field is not equal to "Lucky Twenty", your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_name_ne: "Lucky Twenty"
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
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.
