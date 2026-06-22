---
title: "Equals Operator Within Modular Blocks"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'modular_block_UID.block_UID.field_UID': 'value'}
url: developers/apis/content-delivery-api/requests/equals-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-25
---

# Equals Operator Within Modular Blocks


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"modular_block_UID.block_UID.field_UID": "value"}`

Get entries where the value of a field within a Modular Blocks field matches the condition in the query. This query is specifically for fields that are part of the Modular Blocks field.

This query will work for entries only.

**Example:** In the Products content type, we have a Modular Blocks field named Additional Info ("uid":"additional_info") that contains the Deals ("uid":"deals") block. And, within this Deals block, we have a field named Deal Name ("uid":"deal_name"). If, for instance, you want to retrieve the entries in which the value for the Deal Name field is 'Christmas Deal', you can use the following value in the query parameter:

{"additional_info.deals.deal_name": "Christmas Deal"}

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | {"additional_info.deals.deal_name": "Christmas Deal"} | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
  "entries": [
    {
      "locale": "en-us",
      "title": "Galaxy Note",
      "url": "/mobiles/galaxy-note",
      "description": "<p>Snapdragon</p>",
      "size": 32,
      "color": "Gold",
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
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "price_in_usd": 101,
      "brand": [
        {
          "uid": "blt5499dd00bb716b14",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2016-07-07",
      "instock": false,
      "tags": [
        "redmi"
      ],
      "additional_info": [
        {
          "rating": {
            "stars": 2
          }
        },
        {
          "deals": {
            "deal_name": "Christmas Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "bltf8ab1ad67af3c66b",
                "_content_type_uid": "product"
              }
            ]
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "blt6e94809281fc418f",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 8
        }
      ],
      "ACL": {},
      "uid": "blt5b85ef3b0587565c",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:18.286Z",
      "updated_at": "2019-08-23T12:41:55.402Z",
      "_version": 4,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T12:41:59.165Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
    {
      "locale": "en-us",
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
            "deal_details": "If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "blta278bb5672180c94",
                "_content_type_uid": "product"
              }
            ]
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "blt8312af2299516ccf",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [],
          "discount_in_percentage": 15
        }
      ],
      "ACL": {},
      "uid": "bltf2fa776b05a127a2",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:21.851Z",
      "updated_at": "2019-08-23T12:41:07.543Z",
      "_version": 5,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T12:41:13.700Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```
