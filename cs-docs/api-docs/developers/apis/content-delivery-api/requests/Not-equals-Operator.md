---
title: "Not-equals Operator"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'field_UID': { '$ne': 'value'}}
url: developers/apis/content-delivery-api/requests/not-equals-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-25
---

# Not-equals Operator


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"field_UID": { "$ne": "value"}}`

Get all the entries in which the value of a field does not match the value provided in the condition.
       
  

     This query will work for both entries as well as assets.

**Example:** In the Product content type, you have a field named Price in USD. Now, you need to retrieve all entries where the value of this field not equal to '146' for this field. The parameter can be used as:

{ "price_in_usd": { "$ne": 146 } }

This will give you all the entries that have the value for Price in USD not set to '146'.

Let’s consider another example. You want to retrieve all the entries except the ones that have their start date as 8th December, 2017. Now, you need to set this parameter with the date in the ISO Date format as below:

{ "start_date": { "$ne": "2017-12-08T00:00:00.000Z" } }

This will give you all the entries where the start date is not 8th December, 2017.

##### Not-equals Operator Within Group

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | { "price_in_usd": { "$ne": 146 } } | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
  "entries": [
    {
      "locale": "en-us",
      "title": "Redmi Note Prime",
      "url": "/redmi-note-prime",
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
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "price_in_usd": 117.3,
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
      "color": "Black",
      "additional_info": [
        {
          "rating": {
            "stars": 3
          }
        },
        {
          "deals": {
            "deal_name": "Deals of the Day",
            "deal_details": "If you are looking for good Amazon deals and bargains, Deal's of The Day Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "bltd9dc1c7363c42bbd",
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
              "uid": "blt98058bb38f89fc5f",
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
      "ACL": {},
      "uid": "blt4f1fd991ec80e52f",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:25.397Z",
      "updated_at": "2019-08-23T13:02:21.457Z",
      "_version": 4,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T13:02:25.439Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
    {
      "locale": "en-us",
      "title": "iPhone 7 128GB",
      "url": "/mobiles/iphone-7",
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
      "categories": [
        {
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "price_in_usd": 749,
      "brand": [
        {
          "uid": "blte6095f030e4b7a30",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2016-09-07",
      "instock": true,
      "tags": [],
      "size": 128,
      "color": "Black",
      "additional_info": [
        {
          "rating": {
            "stars": 5
          }
        },
        {
          "deals": {
            "deal_name": "Black Friday Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Black Friday Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        }
      ],
      "bank_offers": [
        {
          "bank": [
            {
              "uid": "bltf05621cb52725856",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Debit Card"
          ],
          "discount_in_percentage": 12
        }
      ],
      "ACL": {},
      "uid": "bltbd92ac498e3d5f96",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:20.072Z",
      "updated_at": "2019-08-23T12:50:53.424Z",
      "_version": 13,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T12:50:56.727Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
    {
      "locale": "en-us",
      "title": "iPhone 7 64GB",
      "url": "/mobiles/iphone-7",
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
      "price_in_usd": 649,
      "brand": [
        {
          "uid": "blte6095f030e4b7a30",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2016-09-07",
      "instock": true,
      "tags": [],
      "size": 32,
      "color": "Rose Gold",
      "additional_info": [
        {
          "rating": {
            "stars": 5
          }
        },
        {
          "deals": {
            "deal_name": "Independence Day Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Independence Day Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
          }
        },
        {
          "related_products": {
            "products": [
              {
                "uid": "bltbd92ac498e3d5f96",
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
              "uid": "blt98058bb38f89fc5f",
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
              "uid": "bltd9dc1c7363c42bbd",
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
      "ACL": {},
      "uid": "blt70cc672f4f806d3e",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:23.624Z",
      "updated_at": "2019-08-23T12:42:21.386Z",
      "_version": 4,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T12:59:36.361Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    },
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
    },
    {
      "locale": "en-us",
      "title": "Galaxy J1",
      "url": "/mobiles/galaxyj1",
      "description": "<p>Enjoy vibrant colours and deeper contrast while you watch your favourite videos on a Super AMOLED display. All the while getting the most out of your 4G experience with Ultra Data Saving Mode that helps you save up to 50% of data.</p>",
      "images": [
        {
          "uid": "blt11b00b9a335ed526",
          "created_at": "2019-08-16T08:05:18.935Z",
          "updated_at": "2019-08-16T08:05:18.935Z",
          "created_by": "bltcd82b2c6bf913241",
          "updated_by": "bltcd82b2c6bf913241",
          "content_type": "image/jpeg",
          "file_size": "166189",
          "tags": [],
          "filename": "samsung-galaxy-j1.jpg",
          "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt11b00b9a335ed526/5d5663be995bf53944dfaf7b/samsung-galaxy-j1.jpg",
          "ACL": [],
          "is_dir": false,
          "_version": 1,
          "title": "samsung-galaxy-j1.jpg",
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
        },
        {
          "uid": "blt9fa0f59d03862aa7",
          "_content_type_uid": "category"
        }
      ],
      "price_in_usd": 159.78,
      "brand": [
        {
          "uid": "blt5499dd00bb716b14",
          "_content_type_uid": "brand"
        }
      ],
      "launch_date": "2017-01-06",
      "instock": true,
      "tags": [],
      "size": 8,
      "color": "Black",
      "additional_info": [
        {
          "rating": {
            "stars": 4
          }
        },
        {
          "deals": {
            "deal_name": "Black Friday Deal",
            "deal_details": "If you are looking for good Amazon deals and bargains, Black Friday Deals is the place to come. We are your online one-stop shop for savings and specials on our products."
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
            "Credit Card",
            "Debit Card"
          ],
          "discount_in_percentage": 25
        },
        {
          "bank": [
            {
              "uid": "blt6e94809281fc418f",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card"
          ],
          "discount_in_percentage": 30
        }
      ],
      "ACL": {},
      "uid": "bltf8ab1ad67af3c66b",
      "created_by": "bltcd82b2c6bf913241",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "created_at": "2019-08-16T08:19:28.965Z",
      "updated_at": "2019-08-23T11:38:15.309Z",
      "_version": 3,
      "_in_progress": false,
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2019-08-23T11:38:18.546Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```
