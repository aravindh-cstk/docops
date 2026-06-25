---
title: "AND Operator Within Group"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'$and':[{'group_UID.field1_UID': 'value1'},{'group_UID.field2_UID': 'value2'}]}
url: developers/apis/content-delivery-api/requests/and-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-28
---

# AND Operator Within Group

**GET** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"$and":[{"group_UID.field1_UID": "value1"},{"group_UID.field2_UID": "value2"}]}`

Get entries that satisfy all the conditions provided in the $and query.This query is specifically for entries and works on fields that are part of the Group field.

**Example:** In the Products content type, we have a Group field named Bank Offers ("uid":"bank_offers"). And, within this Group field, we have fields named Card Type ("uid":"card_type") and Discount in Percentage ("uid":"discount_in_percentage"). If, for instance, you want to retrieve the entries in where the value for Card Type is ‘Credit Card’ and ‘Discount in Percentage’ is '12', use the following value in the query parameter:

{"$and":[{"bank_offers.card_type": "Credit Card"},{"bank_offers.discount_in_percentage": 12}]}

##### AND Operator Within Modular Blocks

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
  Default: `{"$and":[{"bank_offers.card_type": "Credit Card"},{"bank_offers.discount_in_percentage": 12}]}`
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
      "_version": 1,
      "locale": "en-us",
      "uid": "blta250054cfa4f5aab",
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
            "deal_name": "Summer Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Summer's Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
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
                  "special_coupon_name": "Beat the Heat Coupon",
                  "special_coupon_details": "Save 40 percent on electronic items purchased during the summer when your item costs 1500 USD and above.",
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
                "uid": "blte63b2ff6f6414d8e",
                "_content_type_uid": "product"
              },
              {
                "uid": "bltd383742b89bef7af",
                "_content_type_uid": "product"
              }
            ],
            "home_appliances": [
              {
                "uid": "bltee5deb99c3be1b75",
                "_content_type_uid": "electronics"
              },
              {
                "uid": "blt7d3413d9daf14f5f",
                "_content_type_uid": "electronics"
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
              "uid": "blt83b7564e5d749a90",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card"
          ],
          "discount_in_percentage": 12
        }
      ],
      "brand": [
        {
          "uid": "blta2e0d2130eb86263",
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
      "color": "Gold",
      "created_at": "2020-05-11T14:12:28.805Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
      "description": "<p>Redmi Note 3 is really fast—flagship fast. The high-performance Snapdragon 650 processor uses ARM's flagship Cortex-A72 cores to launch apps in a split-second. Its next-gen Adreno 510 graphics processor delivers a fluid gaming experience. The hexa-core processor delivers up to 1.8GHz clock speed, supports dual-channel memory and eMMC 5.0 flash. Combined with MIUI 7's system-level speed optimizations, Redmi Note 3 responds to every touch in a snap.</p>",
      "images": [
        {
          "uid": "blt9c3dff6e3151d374",
          "created_at": "2019-08-16T08:05:27.886Z",
          "updated_at": "2019-08-16T08:05:27.886Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "5275",
          "tags": [],
          "filename": "download.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt9c3dff6e3151d374/5d5663c79722fb38d7db52e5/download.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "download.jpg",
          "publish_details": {
            "environment": "blta39a4441696e35e0",
            "locale": "en-us",
            "time": "2019-08-19T12:28:47.432Z",
            "user": "blt587a89fc7883c56700a95bfe"
          }
        }
      ],
      "instock": true,
      "launch_date": "2016-03-09",
      "price_in_usd": 146,
      "size": 16,
      "tags": [
        "redmi",
        "smart"
      ],
      "title": "Redmi Note 3",
      "updated_at": "2020-05-11T14:12:28.805Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/mobiles/redmi-note-3",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T14:12:38.975Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```

