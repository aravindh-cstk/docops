---
title: "Array Equals Operator"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={ 'field_UID': { '$in': [ value1, value2, ...] } }
url: developers/apis/content-delivery-api/requests/array-equals-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-28
---

# Array Equals Operator


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={ "field_UID": { "$in": [ value1, value2, ...] } }`

Get entries in which the value of a field matches to any of the given values. This parameter will compare field values of entries to that of the values provided in the condition.  
This query will work for entries only.

**Example:** In the Product content type, you have a field named Price in USD. Now, you need to retrieve all the entries where value of this field is one among the given set of values. The query fired using the '$in' parameter is given below:

{ "price_in_usd": { "$in": [ 101, 749 ] } }

This will retrieve all the entries that have the value of Price in USD field set to '101' or 749'.

##### Array Equals Operator Within Group

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | { "price_in_usd": { "$in": [ 101, 749 ] } } | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
   "entries":[
      {
         "_version":3,
         "locale":"en-us",
         "uid":"bltd8ff819f10c6973b",
         "ACL":{

         },
         "_in_progress":false,
         "additional_info":[
            {
               "rating":{
                  "stars":2
               }
            },
            {
               "deals":{
                  "deal_name":"Christmas Deal",
                  "deal_details":"If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
                  "coupons":[
                     {
                        "daily_coupons":{
                           "coupon_name":"Early Bird Coupon",
                           "coupon_details":"Save 50 percent on your first three purchases.",
                           "coupon_discount_rate":50
                        }
                     },
                     {
                        "special_coupons":{
                           "special_coupon_name":"High Five",
                           "special_coupon_details":"Save 5 percent on purchasing items worth a total price of 2000 USD.",
                           "special_coupon_discount_rate":5
                        }
                     },
                     {
                        "faqs":{
                           "coupon_faqs":[
                              {
                                 "question":"How to avail coupon benefits?",
                                 "answer":"<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>"
                              },
                              {
                                 "question":"Where can I find the coupons I collected?",
                                 "answer":"<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>"
                              },
                              {
                                 "question":"Can you collect a coupon first and purchase an item later?",
                                 "answer":"<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>"
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "related_products":{
                  "products":[
                     {
                        "uid":"blt1e1d4385e656835a",
                        "_content_type_uid":"product"
                     }
                  ],
                  "home_appliances":[
                     {
                        "uid":"blt23f4282bd1173ae9",
                        "_content_type_uid":"electronics"
                     },
                     {
                        "uid":"blt49139d483f5799bc",
                        "_content_type_uid":"kitchen_appliances"
                     }
                  ]
               }
            }
         ],
         "bank_offers":[
            {
               "bank":[
                  {
                     "uid":"blt83b7564e5d749a90",
                     "_content_type_uid":"bank"
                  }
               ],
               "card_type":[
                  "Debit Card"
               ],
               "discount_in_percentage":8
            }
         ],
         "brand":[
            {
               "uid":"blt5499dd00bb716b14",
               "_content_type_uid":"brand"
            }
         ],
         "categories":[
            {
               "uid":"blt9fa0f59d03862aa7",
               "_content_type_uid":"category"
            },
            {
               "uid":"blt9d72fa3afc11d27f",
               "_content_type_uid":"category"
            }
         ],
         "color":"Gold",
         "created_at":"2020-05-10T13:47:02.576Z",
         "created_by":"blt42e55757d70d5f81026a2b9f",
         "description":"<p>Snapdragon</p>",
         "images":[
            {
               "uid":"blt19c34e5374418484",
               "created_at":"2019-08-16T08:05:30.460Z",
               "updated_at":"2019-08-16T08:05:30.460Z",
               "created_by":"bltcd82b2c6bf913241",
               "updated_by":"bltcd82b2c6bf913241",
               "content_type":"image/jpeg",
               "file_size":"69609",
               "tags":[

               ],
               "filename":"in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
               "url":"https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
               "ACL":[

               ],
               "is_dir":false,
               "_version":1,
               "title":"in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
               "publish_details":{
                  "environment":"blta39a4441696e35e0",
                  "locale":"en-us",
                  "time":"2019-08-19T12:28:47.432Z",
                  "user":"blt587a89fc7883c56700a95bfe"
               }
            },
            {
               "uid":"bltf8c7852efd06d11f",
               "created_at":"2019-08-16T08:05:05.009Z",
               "updated_at":"2019-08-16T08:05:05.009Z",
               "created_by":"bltcd82b2c6bf913241",
               "updated_by":"bltcd82b2c6bf913241",
               "content_type":"image/png",
               "file_size":"63422",
               "tags":[

               ],
               "filename":"in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
               "url":"https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltf8c7852efd06d11f/5d5663b166aa1a361fba10f9/in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
               "ACL":[

               ],
               "is_dir":false,
               "_version":1,
               "title":"in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
               "publish_details":{
                  "environment":"blta39a4441696e35e0",
                  "locale":"en-us",
                  "time":"2019-08-19T12:29:04.717Z",
                  "user":"blt587a89fc7883c56700a95bfe"
               }
            }
         ],
         "instock":false,
         "launch_date":"2016-07-07",
         "price_in_usd":101,
         "size":32,
         "tags":[
            "redmi"
         ],
         "title":"Galaxy Note",
         "updated_at":"2020-05-11T14:56:10.946Z",
         "updated_by":"blt42e55757d70d5f81026a2b9f",
         "url":"/mobiles/galaxy-note",
         "publish_details":{
            "environment":"blta39a4441696e35e0",
            "locale":"en-us",
            "time":"2020-05-11T14:56:31.536Z",
            "user":"blt42e55757d70d5f81026a2b9f"
         }
      },
      {
         "_version":3,
         "locale":"en-us",
         "uid":"blt6549021b3bbeae5c",
         "ACL":{

         },
         "_in_progress":false,
         "additional_info":[
            {
               "rating":{
                  "stars":1
               }
            },
            {
               "deals":{
                  "deal_name":"Black Friday Deal",
                  "deal_details":"If you are looking for good Amazon deals and bargains, Black Friday Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
                  "coupons":[
                     {
                        "special_coupons":{
                           "special_coupon_name":"Friday Bumper Coupon",
                           "special_coupon_details":"Save up to 70 percent on purchasing items worth a total price of 2000 USD.",
                           "special_coupon_discount_rate":70
                        }
                     },
                     {
                        "faqs":{
                           "coupon_faqs":[
                              {
                                 "question":"How to avail coupon benefits?",
                                 "answer":"<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>"
                              },
                              {
                                 "question":"Where can I find the coupons I collected?",
                                 "answer":"<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>"
                              },
                              {
                                 "question":"Can you collect a coupon first and purchase an item later?",
                                 "answer":"<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>"
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "related_products":{
                  "products":[
                     {
                        "uid":"bltdbe63e789fd3d08e",
                        "_content_type_uid":"product"
                     }
                  ],
                  "home_appliances":[
                     {
                        "uid":"bltee5deb99c3be1b75",
                        "_content_type_uid":"electronics"
                     },
                     {
                        "uid":"blt2349e9c0b7ce06fa",
                        "_content_type_uid":"electronics"
                     },
                     {
                        "uid":"blt7375bb3c0e4859de",
                        "_content_type_uid":"electronics"
                     },
                     {
                        "uid":"blt44857e1ae5e9e272",
                        "_content_type_uid":"kitchen_appliances"
                     },
                     {
                        "uid":"blt49139d483f5799bc",
                        "_content_type_uid":"kitchen_appliances"
                     },
                     {
                        "uid":"blt1ecc761f990dc547",
                        "_content_type_uid":"kitchen_appliances"
                     }
                  ]
               }
            }
         ],
         "bank_offers":[
            {
               "bank":[
                  {
                     "uid":"bltfbe674ca5af1ffa3",
                     "_content_type_uid":"bank"
                  }
               ],
               "card_type":[
                  "Debit Card"
               ],
               "discount_in_percentage":12
            },
            {
               "bank":[
                  {
                     "uid":"bltd477bad133866222",
                     "_content_type_uid":"bank"
                  }
               ],
               "card_type":[
                  "Debit Card"
               ],
               "discount_in_percentage":10
            }
         ],
         "brand":[
            {
               "uid":"blte6095f030e4b7a30",
               "_content_type_uid":"brand"
            }
         ],
         "categories":[
            {
               "uid":"blt9d72fa3afc11d27f",
               "_content_type_uid":"category"
            }
         ],
         "color":"Black",
         "created_at":"2020-05-10T13:09:01.499Z",
         "created_by":"blt42e55757d70d5f81026a2b9f",
         "description":"<p>iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance.&nbsp;And it looks every bit as powerful as it is. This is iPhone 7.</p>",
         "images":[
            {
               "uid":"bltc4f54f7ce3155b0e",
               "created_at":"2019-08-16T08:05:15.889Z",
               "updated_at":"2019-08-16T08:05:15.889Z",
               "created_by":"bltcd82b2c6bf913241",
               "updated_by":"bltcd82b2c6bf913241",
               "content_type":"image/jpeg",
               "file_size":"48163",
               "tags":[

               ],
               "filename":"iphone7.jpg",
               "url":"https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltc4f54f7ce3155b0e/5d5663bbdf859f364dbe36dd/iphone7.jpg",
               "ACL":[

               ],
               "is_dir":false,
               "_version":1,
               "title":"iphone7.jpg",
               "publish_details":{
                  "environment":"blta39a4441696e35e0",
                  "locale":"en-us",
                  "time":"2019-08-19T12:28:56.964Z",
                  "user":"blt587a89fc7883c56700a95bfe"
               }
            }
         ],
         "instock":true,
         "launch_date":"2016-09-07",
         "price_in_usd":749,
         "size":128,
         "tags":[

         ],
         "title":"iPhone 7 128GB",
         "updated_at":"2020-05-11T14:29:53.230Z",
         "updated_by":"blt42e55757d70d5f81026a2b9f",
         "url":"/mobiles/iphone-7",
         "publish_details":{
            "environment":"blta39a4441696e35e0",
            "locale":"en-us",
            "time":"2020-05-11T14:30:07.305Z",
            "user":"blt42e55757d70d5f81026a2b9f"
         }
      }
   ]
}
```
