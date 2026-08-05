---
title: "Not-equals Operator Within Group"
description: /content_types/{content_type_uid}/entries?locale={locale_code}&query={"group_UID.field_UID": { "$ne": "value"}}
url: /not-equals-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:07.780Z
updated_at: 2024-06-25T10:40:05.474Z
---

# Not-equals Operator Within Group

<p>Get entries where the value of a field does not match the value provided in the condition. This query is specifically for fields that are part of the Group field.<br/><br/><span>This query will work for entries only.</span></p><p><strong>Example:</strong> In the <span data-type='inlineCode'>Products</span> content type, we have a Group field named <span data-type='inlineCode'>Bank Offers</span> ("uid":"bank_offers"). And, within this Group field, we have a subfield named <span data-type='inlineCode'>Card Type</span> ("uid":"card_type"). If, for instance, you want to retrieve the entries in which the value for the <span data-type='inlineCode'>Card Type</span> field is <em>NOT</em> 'Debit Card', use the following value in the <span data-type='inlineCode'>query</span> parameter:</p><p><span data-type='inlineCode'>{"bank_offers.card_type": {"$ne": "Debit Card"}}</span></p><h5 id="not-equals-operator-within-modular-blocks">Not-equals Operator Within Modular Blocks</h5>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"group_UID.field_UID": { "$ne": "value"}}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type in which you wish to search for entries.</p>

## Query Parameters

- **locale** (optional)
  <p><span style="background-color: initial;">Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.</span></p>
- **query** (required)
  <p><span style="background-color: initial;">Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.</span></p>
- **include_branch** (optional)
  <p> Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "entries": [
    {
      "locale": "en-us",
      "title": "Redmi Note 3",
      "url": "/mobiles/redmi-note-3",
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
      "price_in_usd": 146,
      "brand": [
        {
          "uid": "blta2e0d2130eb86263",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2016-03-09",
      "instock": true,
      "tags": [
        "redmi",
        "smart"
      ],
      "size": 16,
      "color": "Gold",
      "additional_info": [
        {
          "deals": {
            "deal_name": "Summer Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Summer's Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        },
        {
          "rating": {
            "stars": 4
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "bltc00b46e648007a0c",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card"
          ],
          "discount_in_percentage": 12
        }
      ],
      "ACL": {},
      "uid": "blta278bb5672180c94",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:27.182Z",
      "updated_at": "2019-08-23T13:01:19.866Z",
      "_version": 4,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T13:01:23.290Z",
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

