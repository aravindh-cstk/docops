---
title: "GraphQL | Query Operators"
description: Use GraphQL query operators to filter, match, compare, and refine Contentstack content results.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/query-operators
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Query Operators

Query operators allow you to filter a list of entries or assets by specifying filter conditions in the root content type’s query. You can postfix each of these operators to the field UIDs.

Here’s a list of query operators that you can use to filter your list queries:

| Filter | Postfix | Value Accepted |
| --- | --- | --- |
| equals |   | Any |
| not equals | _ne | Any |
| exists | _exists | Boolean |
| equals any value in the specified array | _in | String, Number, ISODate |
| not equal to any value in the specified array | _nin | String, Number, ISODate |
| greater than | _gt | Number, ISODate |
| greater than or equals to | _gte | Number, ISODate |
| less than | _lt | Number, ISODate |
| less than or equals to | _lte | Number, ISODate |

Additionally, you can also use logical operators (AND/OR) or pagination parameters (skip/limit) to fetch filtered query results.

**Complex Fields**

Contentstack classifies content types, group fields, global fields, assets, reference fields, and modular blocks as complex fields because they belong to either the GraphQLObject or GraphQLUnion type.

Each of these fields has its own set of filters. Filter names typically follow this pattern and are postfixed by Where. For example, ContentType.Group.Reference is equivalent to ProductGroupReferenceWhere in GraphQL.

Each filter has a subcategory of available filter types based on the fields that make up the complex type. You can refer to the [Naming Convention](/docs/developers/apis/graphql-content-delivery-api#naming-convention) section to know more about how filter names are generated.

Let’s understand how to use these query operators with GraphQL.

## Taxonomy

Taxonomy simplifies the process of organizing content in your system, making it effortless to find and retrieve information.

### Try 'Taxonomy Fields'

**** `/stacks/apiKey/explore`

##### Taxonomy Fields

Get the taxonomy UID and term UID from the entries of a specific content type.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where terms are applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product {
      items {
        title
        taxonomies {
          taxonomy_uid 
          term_uid
        }
      }
    }
  }
}
```


### Try 'Equals' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Equals Operator [Taxonomy]

Get entries containing a specific taxonomy.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where the taxonomy **Color** is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid: "color"
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'Not Equals' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Not Equals Operator [Taxonomy]

Get entries where a specific taxonomy does not exist.

**Example**: In the **Product** content type, you do not have the **Color** taxonomy configured, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_ne: "color"
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'IN' Operator

**** `/stacks/apiKey/explore`

##### IN Operator

Get entries where any one or more taxonomies exist.

**Example**: In the **Product**content type, you have multiple taxonomy fields. If, for instance, you want to get a list of all entries where the taxonomy **Color**and **Category**is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_in: ["color", "category"]
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'NIN' Operator

**** `/stacks/apiKey/explore`

##### NIN Operator

Get entries where none of the specified taxonomies exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy **Color**and **Category**are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_nin: ["color", "category"]
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'Exists' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Exists Operator [Taxonomy]

Get entries of a particular content type where a taxonomy field exists.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy field is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies_exists: true
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```




## Terms

Terms are the primary classification elements you generate within a taxonomy. They serve the purpose of categorizing entries.

### Try 'Equals' Operator [Terms]

**** `/stacks/apiKey/explore`

##### Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy is present.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term: "red"
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'Not Equals' Operator [Terms]

**** `/stacks/apiKey/explore`

##### Not Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy does not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_ne: "red"
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'IN' Operator [Terms]

**** `/stacks/apiKey/explore`

##### IN Operator [Terms]

Get entries of a content type where terms from a specific taxonomy exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms **Red** and **Maroon**from the **Color** taxonomy are applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_in: ["red", "maroon"]
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'NIN' Operator [Terms]

**** `/stacks/apiKey/explore`

##### NIN Operator [Terms]

Get entries of a content type where terms from a specific taxonomy do not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms **Red**and **Maroon**from the **Color**taxonomy are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_nin: ["red", "maroon"]
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


### Try 'Below' Operator

**** `/stacks/apiKey/explore`

##### Below Operator

Get entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 5 nested under the **Red**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_below: {
            uid: "red",
	 levels: 5
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


### Try 'Equal and Below' Operator

**** `/stacks/apiKey/explore`

##### Equal and Below Operator

Get entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its descendants up to level 2 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_below: {
            uid: "maroon",
	 levels: 2
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


### Try 'Above' Operator

**** `/stacks/apiKey/explore`

##### Above Operator

Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 3 above the **Maroon**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_above: {
            uid: "maroon",
	 levels: 3
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


### Try 'Equal and Above' Operator

**** `/stacks/apiKey/explore`

##### Equal and Above Operator

Get all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its ancestors up to level 6 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_above: {
            uid: "maroon",
	 levels: 6
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```




## Equals Operator

### Try 'Equals' Operator

**** `/stacks/apiKey/explore`

Get data of entries containing the field values matching the specified condition.

Example: In the **Product** content type, you have a field named **Title**. If, for instance, you want to retrieve certain fields of all the entries in which the value for the ‘Title’ field is **Galaxy Note**, your query will be formed as follows:

```
query {
  all_product(
    where: {
      title: "Galaxy Note"
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'Equals' Operator within Group

**** `/stacks/apiKey/explore`

#### Equals Operator within Group

Get entries where the value of a field within a Group field matches the condition in the query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the Card Type field is **Credit Card**, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type: "Credit Card"
      }
    }) {
    items {
      price_in_usd
      description
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and include details of just the ‘Price in USD’ and ‘Description’ fields.


### Try 'Equals' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Equals Operator within Modular Blocks

Get entries where the value of a field within a Modular Blocks field matches the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the Deal Name field is 'Christmas Deal', your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name: "Christmas Deal"
        }
      }
    }) {
    items {
      title
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields from the ‘Deals’ block of the modular block named ‘Additional Info.’


### Try 'Equals' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

#### Equals Operator within Nested Modular Blocks

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

If, for instance, you want to retrieve certain fields of all the entries in which the value for the "Coupon Name" field is **Lucky Twenty**, your query will be formed as follows:

```
query {
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
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.




## Not-equals Operator

### Try 'Not Equals' Operator

**** `/stacks/apiKey/explore`

Get all the entries in which the value of a field does not match the value provided in the condition.

**Example**: In the **Product** content type, you have a field named **Price in USD**. If, for instance, you need to retrieve all entries where the value of this field is not equal to '200', your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_ne: 200
    }) {
    items {
      title
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title,’ ‘Size,’ and ‘Color’ fields.


### Try 'Not Equals' Operator within Group

**** `/stacks/apiKey/explore`

#### Not-equals Operator within Group

Get entries where the value of a field does not match the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the **Card Type** field is **NOT** 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_ne: "Debit Card"
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


### Try 'Not Equals' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Not-equals Operator within Modular Blocks

Get entries where the value of a field within the Modular Blocks field matches the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the Deal Name field is NOT 'Summer Deal,' your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_ne: "Summer Deal"
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Not Equals' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

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




## In Operator

### Try 'In' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition.

**Example**: In the **Product** content type, you have a field named **Size**. If, for instance, you need to retrieve all the entries where the value of this field is one among the given set of values, your query will look as follows:

```
query {
  all_product(
    where: {
      size_in: [8, 16, 32]
    }) {
    items {
      title
      color
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and will include details of just the 'Title,' 'Size,' and ‘Color’ fields.


### Try 'In' Operator within Group

**** `/stacks/apiKey/explore`

#### In Operator within Group

Get entries where the value of a field, within a Group field, matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the values for the Card Type field are ‘Credit Card’ and 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_in: ["Credit Card", "Debit Card"]
      }
    }) 
    {
      items {
        title
        color
      }
    }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


### Try 'In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### In Operator within Modular Blocks

Get entries where the value of a field within Modular Blocks matches any of the given values. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are 'Christmas Deal’, ‘Summer Deal', and ‘Independence Day Deal’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_in: [
            "Christmas Deal", "Summer Deal", "Independence Day Deal"
          ]
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'In' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**In Operator within****Nested Modular Blocks**

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

If, for instance, you need to retrieve all the entries where the value of the "Coupon Discount Rate" field is one among the given set of values, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_in: [5, 20, 50]
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




## Not In Operator

### Try 'Not In' Operator

**** `/stacks/apiKey/explore`

Get all entries in which the value of a field does not match any of the given values. This parameter will compare field values of entries to that of the values provided in the condition, and the query will retrieve entries that have field values that do not match any of the values provided.

**Example**: In the **Product** content type, you have a field named **Title**. If, for instance, you need to retrieve the entries where the field value does not fall in the given set, your query will look as follows:

```
query {
  all_product(
    where: {
      title_nin: ["Redmi 3S", "Galaxy Note", "Redmi Note Prime"]
    }) {
    items {
      title
      price_in_usd
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the 'Title', ‘Price in USD’, Size, and ‘Color’ fields.


### Try 'Not In' Operator within Group

**** `/stacks/apiKey/explore`

#### Not In Operator within Group

Get entries in which the value of a field does not match any of the values provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount In Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount In Percentage field are NOT ‘8’, '25', and '30', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_nin: [8, 30, 25]
      }
    })      
    {
      items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


### Try 'Not In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Not In Operator within Modular Blocks

Get entries where the values of the fields within Modular Blocks match the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are NOT 'Christmas Deal’, ‘Independence Day Deal’, and ‘Summer Deal', your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_nin: [
            "Summer Deal", "Christmas Deal", "Independence Day Deal"
          ]
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Not In' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Not In Operator within Nested Modular Blocks**

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

If, for instance, you need to retrieve the entries where the value of the "Coupon Discount Rate" field does not fall in the given set, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_nin: [5, 20, 50]
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




## AND Operator

### Try 'AND' Operator

**** `/stacks/apiKey/explore`

Get entries that satisfy all the conditions provided in the 'AND' query.

**Example**: Let’s say you want to retrieve entries in which the **Title** field is set to 'Redmi Note 3' and the **Color** field is 'Gold'. Your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          title: "Redmi Note 3"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Size’, and ‘Price in USD’ fields.


### Try 'AND' Operator within Group

**** `/stacks/apiKey/explore`

#### AND Operator within Group

Get entries that satisfy all the conditions provided in the AND query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have fields named **Card Type** and **Discount in Percentage**. If, for instance, you want to retrieve the entries wherein the value for Card Type is ‘Credit Card’ and ‘Discount in Percentage’ is '12', your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            discount_in_percentage: 12
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'AND' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### AND Operator within Modular Blocks

Get entries that satisfy all the conditions provided in the AND query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** and **Rating** blocks. And, within the Deals and Rating blocks, we have the **Deal Name** and **Stars** fields, respectively. If, for instance, you want to retrieve the entries wherein the values for Deal Name and Stars fields are ‘Christmas Deal’ and '2', respectively, your query will look as follows:

```
query {
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'AND' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**AND Operator within Nested Modular Blocks**

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

If you want to retrieve entries in which the "Coupon Name" field is set to "Lucky Twenty" and the "Coupon Discount Rate" field is **20**, your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Lucky Twenty"
                }
              }
            }
          }
        },
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_discount_rate: 20
                }
              }
            }
          }
        }
      ]
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




## OR Operator

### Try 'OR' Operator

**** `/stacks/apiKey/explore`

Get all entries that satisfy at least one of the given conditions provided in the 'OR' query.

**Example**: Let’s say you want to retrieve entries in which either the value for the **Color** field is 'Gold' or 'Black', your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          color: "Black"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.


### Try 'OR' Operator within Group

**** `/stacks/apiKey/explore`

#### OR Operator within Group

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a field named **Card Type**. If, for instance, you want to retrieve the entries where either the value for Card Type is ‘Debit Card’ or ‘Credit Card’, your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            card_type: "Debit Card"
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.


### Try 'OR' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### OR Operator within Modular Blocks

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** and **Rating** blocks. And, within the Deals and Rating blocks, we have the **Deal Name** and **Stars** fields, respectively. If, for instance, you want to retrieve the entries wherein either the value for Deal Name is ‘Christmas Deal’ and Stars is '2', respectively, your query will look as follows:

```
query {
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'OR' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**OR Operator within Nested Modular Blocks**

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

If you want to retrieve the entries where either the value for "Coupon Name" is "Lucky Twenty" or "Early Bird Coupon", your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Lucky Twenty"
                }
              }
            }
          }
        },
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Early Bird Coupon"
                }
              }
            }
          }
        }
      ]
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




## Less Than Operator

### Try 'Less Than' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is lesser than the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is less than but not equal to **150**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_lt: 150
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'Less Than' Operator within Group

**** `/stacks/apiKey/explore`

#### Less Than Operator within Group

Get entries in which the value of a field is lesser than the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is less than ‘40’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lt: 40
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


### Try 'Less Than' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Less Than Operator within Modular Blocks

Get entries in which the value of a field is lesser than the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Block field, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the value for the Stars field is less than ‘3’, your query will look as follows:

```
query {
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Less Than' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Less Than Operator within Nested Modular Blocks**

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

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is less than but not equal to **40**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_lt: 40
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




## Less Than Or Equal To Operator

### Try 'Less Than Or Equal To' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is lesser than or equal to the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is less than or equal to **150**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_lte: 150
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'Less Than Or Equal To' Operator within Group

**** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Group

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field are less than or equal to ‘30’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lte: 30
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


### Try 'Less Than Or Equal To' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Modular Blocks

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Rating block, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are less than or equal to ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_lte: 3
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Less Than Or Equal To' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Less Than Or Equal To Operator within Nested Modular Blocks**

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

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is less than or equal to **50**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_lte: 50
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




## Greater Than Operator

### Try 'Greater Than' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value for a field is greater than the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is greater than **180**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_gt: 180
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.


### Try 'Greater Than' Operator within Group

**** `/stacks/apiKey/explore`

#### Greater Than Operator within Group

Get entries in which the value for a field is greater than the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is greater than ‘20’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_gt: 20
      }
    }) {
    items {
      title
      color
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.


### Try 'Greater Than' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Greater Than Operator within Modular Blocks

Get entries in which the value for a field is greater than the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Block field, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are greater than ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_gt: 3
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Greater Than' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Greater Than Operator within Nested Modular Blocks**

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

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is greater than **20**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_gt: 20
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




## Greater Than Or Equal To Operator

### Try 'Greater Than Or Equal To' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is greater than or equal to the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is greater than or equal to **200**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_gte: 200
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'Greater Than Or Equal To' Operator within Group

**** `/stacks/apiKey/explore`

#### Greater Than Or Equal To Operator within Group

Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is greater than or equal to ‘30’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_gte: 30
      }
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


### Try 'Greater Than Or Equal To' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Greater Than Or Equal To Operator within Modular Blocks

Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Rating block, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are greater than or equal to ‘3’, your query will look as follows:

```
query {
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
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Greater Than Or Equal To' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Greater Than Or Equal To Operator within Nested Modular Blocks**

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

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is greater than or equal to **20**. Your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_gte: 20
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




## Limit Operator

### Try 'Limit' Operator

**** `/stacks/apiKey/explore`

The limit parameter will return a specific number of entries in the output. So for example, if the content type contains **more than 100** entries and you wish to fetch only the **first 2** entries, you need to specify '2' as the value in this parameter. Your query will look as follows:

```
query {
  all_product(
    limit: 2
  ) {
    items {
      title
      description
    }
  }
}
```

The response body of this query will include only the first two entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Description’ fields.




## Skip Operator

### Try 'Skip' Operator

**** `/stacks/apiKey/explore`

The skip parameter will skip a specific number of entries in the output. So, for example, if the content type contains around **12 entries** and you want to skip the **first 5** entries to get only the last 7 in the response body, you need to specify ‘5’ here. Your query will look as follows:

```
query {
  all_product(
    skip: 5
  ) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will skip the first five entries and only include the last seven entries of the **Product** content type that satisfy the query, displaying details of just the ‘Title’ and ‘Color’ fields.




## Order by Asc Operator

### Try 'Order by Asc' Operator

**** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the ascending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_ASC)
- Updated at (updated_at_ASC)
- Published at (sys_published_at_ASC)

**Note**:

- The order by ASC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Created at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      created_at_ASC
    ]
  ) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will display all the entries of the Product content type that satisfy the query in an ascending order, including details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.




## Order by Desc Operator

### Try 'Order by Desc' Operator

**** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the descending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_DESC)
- Updated at (updated_at_DESC)
- Published at (sys_published_at_DESC)

**Note**:

- The order by DESC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Updated at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      updated_at_DESC
    ]
  ) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query in a descending order, including details of just the ‘Title’ and ‘Price in USD’ fields.




## Exists Operator

### Try 'Exists' Operator

**** `/stacks/apiKey/explore`

Get entries if the value of the field mentioned in the condition exists.

**Example**: In the **Product** content type, we have a field named **Price in USD**. If, for instance, you want to retrieve all the entries in the content type in which the field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’ and ‘Color’ fields.


### Try 'Exists' Operator within Group

**** `/stacks/apiKey/explore`

#### Exists Operator within Group

Get entries if the value of the field mentioned in the condition exists. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_exists: true
      }
    }) {
    items {
      title
      color
      description
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’, ‘Color’, and ‘Description’ fields.


### Try 'Exists' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Exists Operator within Modular Blocks

Get entries if value of the field mentioned in the condition exists. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Block field, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the **Stars** field exists, your query will look as follows:

```
query {
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
}
```

The response body of this query will display details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


### Try 'Exists' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Exists Operator within Nested Modular Blocks**

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

If you want to retrieve all the entries in the Product content type in which the "Coupon Discount Rate" field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_exists: true
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




## Total

### Try 'Total' Function

**** `/stacks/apiKey/explore`

The **total** field returns the number of entries for a specified content type.

**Example**: If you wish to know the total number of entries in the **Product** content type that contain a value within the **Price in USD** field, you need to run the following query:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’ and ‘Price in USD’ fields.




## Count

The **count** operator retrieves the details of referenced entries within a reference field.

This query works for both entries as well as assets.

**Example**: If you want to retrieve details of all entries in the **Product** content type that contain a value in the referenced Categories content type, you need to run the following query:

```
query {
  all_product(
    where: {
      categories_exists: 1
    }) {
    items {
      title
      color
    }
  }
}
```

The **count** field will display the entry details of the **Product** content type that satisfy the query filter.

**Note:** This query is not supported by the CMA GraphQL.

### Try 'Count' Function

**** `/stacks/apiKey/explore`




## Pagination

### Try "Pagination"

**** `/stacks/apiKey/explore`

When fetching all the entries of a particular content type, the GraphQL API allows you to provide arguments that paginate the response body.

If you have more than 100 items in your response, you can get the rest of the items in batches using the **skip** parameter in subsequent requests. The skip parameter helps paginate the output of the request.

**Example**: In the **Product** content type, we have a field named **Price in USD**. Now, you want to retrieve all the entries in the content type in which the field exists.

If you get more than 100 items, you can get the rest of the items in batches using the **skip: 2** parameter in subsequent requests. You can also use the **limit: 7** parameter to get 7 items per page instead of getting all the 100 items at once.

The pagination query will look as follows:

```
query {
  all_product(
    limit: 7,
    skip: 2
  ) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’, ‘Brand’, and ‘Price in USD’ fields. However, through the use of the skip and limit parameters, the response body will now only show the first seven matching entries initially.

