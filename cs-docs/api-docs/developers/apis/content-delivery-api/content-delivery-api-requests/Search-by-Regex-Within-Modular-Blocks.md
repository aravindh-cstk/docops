---
title: "Search by Regex Within Modular Blocks"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={ 'modular_block_UID.block_UID.field_UID': { '$regex': 'value' }}
url: developers/apis/content-delivery-api/requests/search-by-regex-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-28
---

# Search by Regex Within Modular Blocks

**GET** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={ "modular_block_UID.block_UID.field_UID": { "$regex": "value" }}`

Get entries by using regular expressions to query fields of a Modular Block. These Regex queries will help to retrieve all the entries of a content type that have field values matching the condition provided in the query parameter.   
  
This query will work for entries only and works specifically for fields that are part of any block within a Modular Block field.

**Example:** In the Products content type, we have a Modular Group field named Additional Info ("uid":"additional_info") that contains the Deals ("uid":"deals") block. And, within this Deals block, we have a field named Deal Name ("uid":"deal_name"). If, for instance, you want to retrieve the entries where Deal Name starts with “Christmas Deal,” use the following value in the query parameter:

{ "additional_info.deals.deal_name": { "$regex": "^Christmas Deal" }}

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
  Default: `{ "additional_info.deals.deal_name": { "$regex": "^Christmas Deal" } }`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "entries": [
    {
      "title": "Redmi 3S",
      "url": "/mobiles/redmi-3s",
      "description": "<p>The next step in the Redmi evolution, Redmi 3S is dressed in a premium metal body. That's not all, it houses a powerful Qualcomm® SnapdragonTM 430 processor, massive 4100mAh battery, 13MP Phase Detection Autofocus (PDAF) camera and 12.6cm (5) HD display.</p>\n<p>Despite these upgrades, it is surprisingly 0.9mm thinner than Redmi 2 and sits comfortably in your hand. The combination of these in Redmi 3S are just the tools you need to connect, explore and take on the rest of the world.\n</p>",
      "images": [
        {
          "uid": "blt198546991c0eea0a",
          "created_at": "2019-08-16T08:05:21.114Z",
          "updated_at": "2019-08-16T08:05:21.114Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "28485",
          "tags": [],
          "filename": "xiaomi-redmi-note-3-gray.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt198546991c0eea0a/5d5663c1295d353852cf6bce/xiaomi-redmi-note-3-gray.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "xiaomi-redmi-note-3-gray.jpg",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:28:56.964Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        }
      ],
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "price_in_usd": 102.63,
      "brand": [
        {
          "uid": "blta2e0d2130eb86263",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2016-08-17",
      "instock": true,
      "tags": [],
      "locale": "en-us",
      "size": 16,
      "color": "Gray",
      "additional_info": [
        {
          "rating": {
            "stars": 3
          }
        },
        {
          "deals": {
            "deal_name": "Christmas Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
            "coupons": [
              {
                "daily_coupons": {
                  "coupon_name": "Early Bird Coupon",
                  "coupon_details": "Save 50 percent on your first three purchases.",
                  "coupon_discount_rate": 50
                }
              },
              {
                "special_coupons": {
                  "special_coupon_name": "High Five",
                  "special_coupon_details": "Save 5 percent on purchasing items worth a total price of 2000 USD.",
                  "special_coupon_discount_rate": 5
                }
              }
            ]
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "blte63b2ff6f6414d8e",
                "_content_type_uid": "product"
              },
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
              },
              {
                "uid": "blt7d3413d9daf14f5f",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt2349e9c0b7ce06fa",
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
                "uid": "blt46128ea08fdeb168",
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
              "uid": "bltd477bad133866222",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 15
        }
      ],
      "uid": "bltd383742b89bef7af",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2020-05-11T12:37:33.194Z",
      "updated_at": "2020-05-11T15:05:06.916Z",
      "ACL": {},
      "_version": 3,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T15:05:26.083Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
    {
      "_version": 3,
      "locale": "en-us",
      "uid": "bltd8ff819f10c6973b",
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
            "deal_name": "Christmas Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
            "coupons": [
              {
                "daily_coupons": {
                  "coupon_name": "Early Bird Coupon",
                  "coupon_details": "Save 50 percent on your first three purchases.",
                  "coupon_discount_rate": 50
                }
              },
              {
                "special_coupons": {
                  "special_coupon_name": "High Five",
                  "special_coupon_details": "Save 5 percent on purchasing items worth a total price of 2000 USD.",
                  "special_coupon_discount_rate": 5
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
                "uid": "blt1e1d4385e656835a",
                "_content_type_uid": "product"
              }
            ],
            "home_appliances": [
              {
                "uid": "blt23f4282bd1173ae9",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt49139d483f5799bc",
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
              "uid": "blt83b7564e5d749a90",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 8
        }
      ],
      "brand": [
        {
          "uid": "blt5499dd00bb716b14",
          "_content_type_uid": "brand"
        }
      ],
      "categories": [
        {
          "uid": "blt9fa0f59d03862aa7",
          "_content_type_uid": "category"
        },
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "color": "Gold",
      "created_at": "2020-05-10T13:47:02.576Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "description": "<p>Snapdragon</p>",
      "images": [
        {
          "uid": "blt19c34e5374418484",
          "created_at": "2019-08-16T08:05:30.460Z",
          "updated_at": "2019-08-16T08:05:30.460Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "69609",
          "tags": [],
          "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:28:47.432Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        },
        {
          "uid": "bltf8c7852efd06d11f",
          "created_at": "2019-08-16T08:05:05.009Z",
          "updated_at": "2019-08-16T08:05:05.009Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/png",
          "file_size": "63422",
          "tags": [],
          "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltf8c7852efd06d11f/5d5663b166aa1a361fba10f9/in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:29:04.717Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        }
      ],
      "instock": false,
      "launch_date": "2016-07-07",
      "price_in_usd": 101,
      "size": 32,
      "tags": [
        "redmi"
      ],
      "title": "Galaxy Note",
      "updated_at": "2020-05-11T14:56:10.946Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/mobiles/galaxy-note",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T14:56:31.536Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```

