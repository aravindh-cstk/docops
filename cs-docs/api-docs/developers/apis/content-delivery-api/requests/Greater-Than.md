---
title: "Greater Than"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'field_UID': { '$gt': 'value' }}
url: developers/apis/content-delivery-api/requests/greater-than
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-01
---

# Greater Than


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"field_UID": { "$gt": "value" }}`

Get entries in which the value for a field is greater than the value provided in the condition.This query will work for both entries as well as assets.

**Example:** Let’s say you want to retrieve all the entries that have value of the Price in USD field set to a value that is greater than but not equal to 146. You can send the parameter as:

{ "price_in_usd": { "$gt": 146 } }

This will give you all the entries of mobile phones costing greater than and not equal to $146.

Let’s consider another example. If you want to retrieve all the entries that have their start date later than 8th December, 2017. Now, you need to set this parameter with the date in the ISO Date format as below:

{ "start_date": { "$gt": "2017-11-08T00:00:00.000Z" } }

This will give you all the entries after 8th December, 2017.

**Note:** Avoid using seconds and milliseconds in date/time queries. We recommend to round off to the nearest minute (at most 5 minutes).

##### Greater Than Operator Within Group

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | { "price_in_usd": { "$gt": 146 } } | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

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
    },
    {
      "_version": 2,
      "locale": "en-us",
      "uid": "blt1e1d4385e656835a",
      "ACL": {},
      "_in_progress": false,
      "additional_info": [
        {
          "rating": {
            "stars": 4
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
                "uid": "bltd8ff819f10c6973b",
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
              "uid": "blt4526259b9dc1dd3e",
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
              "uid": "bltd477bad133866222",
              "_content_type_uid": "bank"
            }
          ],
          "card_type": [
            "Credit Card"
          ],
          "discount_in_percentage": 30
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
          "uid": "blt9d72fa3afc11d27f",
          "_content_type_uid": "category"
        }
      ],
      "color": "Black",
      "created_at": "2020-05-11T13:32:18.406Z",
      "created_by": "blt42e55757d70d5f81026a2b9f",
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
      "instock": true,
      "launch_date": "2017-01-06",
      "price_in_usd": 159.78,
      "size": 8,
      "tags": [],
      "title": "Galaxy J1",
      "updated_at": "2020-05-11T14:05:25.577Z",
      "updated_by": "blt42e55757d70d5f81026a2b9f",
      "url": "/mobiles/galaxy-j1",
      "publish_details": {
        "environment": "blta39a4441696e35e0",
        "locale": "en-us",
        "time": "2020-05-11T14:05:33.715Z",
        "user": "blt42e55757d70d5f81026a2b9f"
      }
    }
  ]
}
```
