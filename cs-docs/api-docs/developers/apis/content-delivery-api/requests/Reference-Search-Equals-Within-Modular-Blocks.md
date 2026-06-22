---
title: "Reference Search Equals Within Modular Blocks"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'modular_block_uid.block_uid.reference_field_uid':{'$in_query':{'referenced_content_type's_field_uid':'value'}}}
url: developers/apis/content-delivery-api/requests/reference-search-equals-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-15
---

# Reference Search Equals Within Modular Blocks


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"modular_block_uid.block_uid.reference_field_uid":{"$in_query":{"referenced_content_type's_field_uid":"value"}}}`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields.If the reference is part of a Modular Blocks field, you need to mention the Modular Blocks UID, Block UID, as well as the reference field UID using a dot operatorNote that this query will work for entries only.

**Example:** In the Products content type, we have a Modular Group field named Additional Info ("uid":"additional_info") that contains the Related Products ("uid":"related_products") block. And, within this Related Products block, we have a field named Products ("uid":"products"). If, for instance, you want to retrieve the entries in which the values for the Title field is iPhone 7 128GB, use the following value in the ‘query’ parameter:

- General query: {"additional_info.related_products.products": {"$in_query": { "title": "iPhone 7 128GB"}}}
- Multiple content type referencing query: {"additional_info.related_products.products":{"$in_query":{"title":"iPhone 7 128GB", "_content_type_uid": "product"}, "_content_type_uid": "electronics"}}

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of stack of which you wish to retrieve the content types. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | {"additional_info.related_products.products":{"$in_query":{"title":"iPhone 7 128GB"}}} | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
  "entries": [
    {
      "_version": 3,
      "locale": "en-us",
      "uid": "bltdbe63e789fd3d08e",
      "ACL": {},
      "_in_progress": false,
      "additional_info": [
        {
          "rating": {
            "stars": 5
          }
        },
        {
          "deals": {
            "deal_name": "Independence Day Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Independence Day Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
            "coupons": [
              {
                "special_coupons": {
                  "special_coupon_name": "Independence Bumper Offer",
                  "special_coupon_details": "Receive a discount of flat 40 percent on purchasing any laptop on Independence Day.",
                  "special_coupon_discount_rate": 40
                }
              },
              {
                "faqs": {
                  "coupon_faqs": [
                    {
                      "question": "How to avail coupon benefits?",
                      "answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>"
                    },
                    {
                      "question": "Where can I find the coupons I collected?",
                      "answer": "<p>On the Homepage, navigate to the Services & Benefits section and then click on Coupons. Here, you can find all the coupons you have collected under My Coupons.</p>"
                    },
                    {
                      "question": "Can you collect a coupon first and purchase an item later?",
                      "answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>"
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "blt6549021b3bbeae5c",
                "_content_type_uid": "product"
              }
            ],
            "home_appliances": [
              {
                "uid": "blt0e302e4595da19c1",
                "_content_type_uid": "electronics"
              }
            ]
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "blt27729fae9269607c",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card"
          ],
          "discount_in_percentage": 60
        },
        {
          "bank": [
            {
              "uid": "blt4526259b9dc1dd3e",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card",
            "Debit Card"
          ],
          "discount_in_percentage": 55
        }
      ],
      "brand": [
        {
          "uid": "blte6095f030e4b7a30",
          "_content_type_uid": "brand"
        }
      ],
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        },
        {
          "uid": "blt9fa0f59d03862aa7",
          "_content_type_uid": "category"
        }
      ],
      "color": "Rose Gold",
      "created_at": "2020-05-11T12:47:32.533Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "description": "<p>iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance.&nbsp;And it looks every bit as powerful as it is. This is iPhone 7.</p>",
      "images": [
        {
          "uid": "bltda02effe8bc97bb9",
          "created_at": "2019-08-16T08:05:09.588Z",
          "updated_at": "2019-08-16T08:05:09.588Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "45091",
          "tags": [],
          "filename": "Apple-iPhone-SE-Rose-Gold.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltda02effe8bc97bb9/5d5663b546d2e3383a96ec5e/Apple-iPhone-SE-Rose-Gold.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "Apple-iPhone-SE-Rose-Gold.jpg",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:28:56.964Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        }
      ],
      "instock": true,
      "launch_date": "2016-09-07",
      "price_in_usd": 649,
      "size": 32,
      "tags": [],
      "title": "iPhone 7 64GB",
      "updated_at": "2020-05-11T15:08:56.567Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/mobiles/iphone-7",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T15:09:05.364Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```
