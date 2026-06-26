---
title: "Reference Search Equals Within Group"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'group_field_id'.'reference_field_uid':{'$in_query':{'referenced_content_type's_group_uid.field_uid':'value'}}}
url: developer-apis/content-delivery-api-requests/reference-search-equals-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-15
---

# Reference Search Equals Within Group

**GET** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"group_field_id"."reference_field_uid":{"$in_query":{"referenced_content_type's_group_uid.field_uid":"value"}}}`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields.

If the reference field is part of a Group field, you need to mention the Group field UID as well as the reference field UID using a dot operator, as given below.

**Example:** In the Products content type, we have a Group field named Bank Offers ("uid":"bank_offers"). And, within this Group field, we have a Reference field named Bank ("uid":"bank"). If, for instance, you want to retrieve the entries in which the value for the Bank field is ‘Citigroup,’ use the following value in the query parameter:

- General query: {"bank_offers.bank": {"$in_query": { "title": "Citigroup"}}}
- Multiple content type referencing query: {"bank_offers.bank":{"$in_query":{"title":"Wells Fargo", "_content_type_uid": "bank"} , "_content_type_uid": "blog"}}

##### Reference Search Equals Within Modular Blocks

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you wish to search for entries.
  Default: `product`

## Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **query** (required)
  Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.
  Default: `{"bank_offers.bank":{"$in_query":{"title":"Citigroup"}}}`

## Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Default: `main`

## Sample Response

```json
{
  "entries": [
    {
      "_version": 3,
      "locale": "en-us",
      "uid": "blte63b2ff6f6414d8e",
      "ACL": {},
      "_in_progress": false,
      "additional_info": [
        {
          "rating": {
            "stars": 2
          }
        },
        {
          "deals": {
            "deal_name": "Deals of the Day",
            "deal_details": "If you are looking for good Amazon deals and bargains, Deal's of The Day Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
            "coupons": [
              {
                "daily_coupons": {
                  "coupon_name": "Lucky Twenty",
                  "coupon_details": "First five users to purchase an electronic item receive a discount of 20 percent on that item.",
                  "coupon_discount_rate": 20
                }
              },
              {
                "special_coupons": {
                  "special_coupon_name": "Kitchen Bonanza",
                  "special_coupon_details": "Save 60 percent when you purchase kitchen appliances worth a total price of 3000 USD.",
                  "special_coupon_discount_rate": 60
                }
              }
            ]
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "blta250054cfa4f5aab",
                "_content_type_uid": "product"
              },
              {
                "uid": "bltd383742b89bef7af",
                "_content_type_uid": "product"
              }
            ],
            "home_appliances": [
              {
                "uid": "blt10e68dbbfc14b75b",
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
            "Debit Card"
          ],
          "discount_in_percentage": 27
        },
        {
          "bank": [
            {
              "uid": "bltfbe674ca5af1ffa3",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card",
            "Credit Card"
          ],
          "discount_in_percentage": 24
        }
      ],
      "brand": [],
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "color": "Black",
      "created_at": "2020-05-11T12:44:49.928Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "description": "<p>64-bit Qualcomm® SnapdragonTM 410, 2GB RAM,</p>\n<p>16GB Flash (up to 32GB microSD support), 13.97cm (5.5) HD IPS display, 13MP rear camera, 4G dual SIM, 3100mAh removable battery</p>",
      "images": [
        {
          "uid": "blt50a7a9dd6866776f",
          "created_at": "2019-08-16T08:05:18.932Z",
          "updated_at": "2019-08-16T08:05:18.932Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "145200",
          "tags": [],
          "filename": "01.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt50a7a9dd6866776f/5d5663be34d39437c37c5376/01.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "01.jpg",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:28:56.964Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        }
      ],
      "instock": true,
      "launch_date": "2016-08-17",
      "price_in_usd": 117.3,
      "size": 16,
      "tags": [],
      "title": "Redmi Note Prime",
      "updated_at": "2020-05-11T15:14:45.980Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/redmi-note-prime",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T15:15:36.629Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
    {
      "_version": 3,
      "locale": "en-us",
      "uid": "blt6549021b3bbeae5c",
      "ACL": {},
      "_in_progress": false,
      "additional_info": [
        {
          "rating": {
            "stars": 1
          }
        },
        {
          "deals": {
            "deal_name": "Black Friday Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Black Friday Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
            "coupons": [
              {
                "special_coupons": {
                  "special_coupon_name": "Friday Bumper Coupon",
                  "special_coupon_details": "Save up to 70 percent on purchasing items worth a total price of 2000 USD.",
                  "special_coupon_discount_rate": 70
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
                      "answer": "<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>"
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
                "uid": "bltdbe63e789fd3d08e",
                "_content_type_uid": "product"
              }
            ],
            "home_appliances": [
              {
                "uid": "bltee5deb99c3be1b75",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt2349e9c0b7ce06fa",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt7375bb3c0e4859de",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt44857e1ae5e9e272",
                "_content_type_uid": "kitchen_appliances"
              },
              {
                "uid": "blt49139d483f5799bc",
                "_content_type_uid": "kitchen_appliances"
              },
              {
                "uid": "blt1ecc761f990dc547",
                "_content_type_uid": "kitchen_appliances"
              }
            ]
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "bltfbe674ca5af1ffa3",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 12
        },
        {
          "bank": [
            {
              "uid": "bltd477bad133866222",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 10
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
        }
      ],
      "color": "Black",
      "created_at": "2020-05-10T13:09:01.499Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "description": "<p>iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance.&nbsp;And it looks every bit as powerful as it is. This is iPhone 7.</p>",
      "images": [
        {
          "uid": "bltc4f54f7ce3155b0e",
          "created_at": "2019-08-16T08:05:15.889Z",
          "updated_at": "2019-08-16T08:05:15.889Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "48163",
          "tags": [],
          "filename": "iphone7.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltc4f54f7ce3155b0e/5d5663bbdf859f364dbe36dd/iphone7.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "iphone7.jpg",
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
      "price_in_usd": 749,
      "size": 128,
      "tags": [],
      "title": "iPhone 7 128GB",
      "updated_at": "2020-05-11T14:29:53.230Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/mobiles/iphone-7",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T14:30:07.305Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```

