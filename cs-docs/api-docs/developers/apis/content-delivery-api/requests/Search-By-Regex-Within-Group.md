---
title: "Search By Regex Within Group"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={ 'group_UID.field_UID': { '$regex': 'value' } }
url: developers/apis/content-delivery-api/requests/search-by-regex-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-28
---

# Search By Regex Within Group


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={ "group_UID.field_UID": { "$regex": "value" } }`

Get entries by using regular expressions to query fields of a Group field. These regex queries will help to retrieve all the entries of a content type that have field values matching the condition provided in the query parameter.

**Note:** This query is specifically for fields that are part of the Group field.

**Example:** In the Products content type, we have a Group field named Bank Offers ("uid":"bank_offers"). And, within this Group field, we have a Reference field named Bank ("uid":"bank"). If, for instance, you want to retrieve the entries in which the value for the Card Type starts with “Credit Card,” use the following value in the query parameter:

{ "bank_offers.card_type": { "$regex": "^Credit Card" } }

##### Search by Regex Within Modular Blocks

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed. |

| query | { "bank_offers.card_type": { "$regex": "^Credit Card" } } | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
    "entries": [
        {
            "title": "Redmi Note 3",
            "url": "/mobiles/redmi-note-3",
            "description": "<p>Redmi Note 3 is really fast—flagship fast. The high-performance Snapdragon 650 processor uses ARM's flagship Cortex-A72 cores to launch apps in a split-second. Its next-gen Adreno 510 graphics processor delivers a fluid gaming experience. The hexa-core processor delivers up to 1.8GHz clock speed, supports dual-channel memory and eMMC 5.0 flash. Combined with MIUI 7's system-level speed optimizations, Redmi Note 3 responds to every touch in a snap.</p>",
            "size": 16,
            "color": "Gold",
            "images": [
                {
                    "uid": "blt9c3dff6e3151d374",
                    "title": "download.jpg",
                    "created_by": "bltcd82b2c6bf913241",
                    "updated_by": "bltcd82b2c6bf913241",
                    "created_at": "2019-08-16T08:05:27.886Z",
                    "updated_at": "2019-08-16T08:05:27.886Z",
                    "content_type": "image/jpeg",
                    "file_size": "5275",
                    "filename": "download.jpg",
                    "ACL": [],
                    "_version": 1,
                    "is_dir": false,
                    "tags": [],
                    "publish_details": {
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us",
                        "time": "2019-08-19T12:28:47.432Z",
                        "user": "blt587a89fc7883c56700a95bfe"
                    },
                    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt9c3dff6e3151d374/5d5663c79722fb38d7db52e5/download.jpg"
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
            "additional_info": [
                {
                    "rating": {
                        "stars": 5,
                        "_metadata": {
                            "uid": "csf8f6535afcf26334"
                        }
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
                                    "coupon_discount_rate": 50,
                                    "_metadata": {
                                        "uid": "cs180286fc85d60546"
                                    }
                                }
                            },
                            {
                                "special_coupons": {
                                    "special_coupon_name": "Beat the Heat Coupon",
                                    "special_coupon_details": "Save 40 percent on electronic items purchased during the summer when your item costs 1500 USD and above.",
                                    "special_coupon_discount_rate": 40,
                                    "_metadata": {
                                        "uid": "cs9f7c67a727d57393"
                                    }
                                }
                            },
                            {
                                "faqs": {
                                    "coupon_faqs": [
                                        {
                                            "question": "How to avail coupon benefits?",
                                            "answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>",
                                            "_metadata": {
                                                "uid": "cs19857ac5abc467f3"
                                            }
                                        },
                                        {
                                            "question": "Where can I find the coupons I collected?",
                                            "answer": "<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>",
                                            "_metadata": {
                                                "uid": "csc0ada9a8725ff210"
                                            }
                                        },
                                        {
                                            "question": "Can you collect a coupon first and purchase an item later?",
                                            "answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>",
                                            "_metadata": {
                                                "uid": "cs7a60d1dd3e4327f8"
                                            }
                                        }
                                    ],
                                    "_metadata": {
                                        "uid": "csb5652c661bc7276c"
                                    }
                                }
                            }
                        ],
                        "_metadata": {
                            "uid": "cs5f189ae7f3044866"
                        }
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
                        ],
                        "_metadata": {
                            "uid": "cs4d3587e8e37736ae"
                        }
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
                    "discount_in_percentage": 12,
                    "_metadata": {
                        "uid": "cs92f2dd7b31db24e8"
                    }
                }
            ],
            "tags": [
                "redmi",
                "smart"
            ],
            "locale": "en-us",
            "uid": "blta250054cfa4f5aab",
            "created_by": "blt42e55757d70d5f81026a2b9f",
            "updated_by": "blt6563a9b067fc1bc9",
            "created_at": "2020-05-11T14:12:28.805Z",
            "updated_at": "2021-07-18T15:51:14.934Z",
            "ACL": {},
            "_version": 4,
            "_in_progress": false,
            "frequently_bought_together": [
                {
                    "uid": "blt10e68dbbfc14b75b",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt23f4282bd1173ae9",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt44857e1ae5e9e272",
                    "_content_type_uid": "kitchen_appliances"
                },
                {
                    "uid": "blt46128ea08fdeb168",
                    "_content_type_uid": "kitchen_appliances"
                }
            ],
            "product_rating": 5,
            "helpful_links": {
                "seller": "https://company-name.com",
                "return-policy": "https://policies.com"
            },
            "cart_items": {
                "type": "doc",
                "attrs": {},
                "uid": "f5bb3be707ed4929b5afad253626163d",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "df52846a8b554b01831d3c7a2547986b",
                        "children": [
                            {
                                "text": "Items in your Shopping Cart:"
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "e32cd5e033a74a4198830b09bfde1918",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "690b99c453374f1f9db532c303fe46af",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "bltee5deb99c3be1b75",
                            "locale": "en-us",
                            "content-type-uid": "electronics"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "ef7011b9481e4ce18df23d9048b61096",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt46128ea08fdeb168",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "0350a91ca6454ae1aef23b350e820a71",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt1ecc761f990dc547",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "a3a55e55258d4bcbb8c5ff4c5fe83681",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "bf32bd0b7ed548f8b331746d50c7cc53",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "541c8ade61c5475e981272cb4a415dba",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "blt6e0b1713123d2566",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6e0b1713123d2566/60f44c5180ce947e9b4fbe0b/Logo.png",
                            "asset-name": "Logo.png",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 4
            },
            "publish_details": {
                "environment": "blta39a4441696e35e0",
                "locale": "en-us",
                "time": "2021-07-18T15:51:55.121Z",
                "user": "blt6563a9b067fc1bc9"
            }
        },
        {
            "title": "iPhone 7 128GB",
            "url": "/mobiles/iphone-7",
            "description": "<p>iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance.&nbsp;And it looks every bit as powerful as it is. This is iPhone 7.</p>",
            "images": [
                {
                    "uid": "bltc4f54f7ce3155b0e",
                    "title": "iphone7.jpg",
                    "created_by": "bltcd82b2c6bf913241",
                    "updated_by": "bltcd82b2c6bf913241",
                    "created_at": "2019-08-16T08:05:15.889Z",
                    "updated_at": "2019-08-16T08:05:15.889Z",
                    "content_type": "image/jpeg",
                    "file_size": "48163",
                    "filename": "iphone7.jpg",
                    "ACL": [],
                    "_version": 1,
                    "is_dir": false,
                    "tags": [],
                    "publish_details": {
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us",
                        "time": "2019-08-19T12:28:56.964Z",
                        "user": "blt587a89fc7883c56700a95bfe"
                    },
                    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltc4f54f7ce3155b0e/5d5663bbdf859f364dbe36dd/iphone7.jpg"
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
            "locale": "en-us",
            "size": 128,
            "color": "Black",
            "additional_info": [
                {
                    "rating": {
                        "stars": 1,
                        "_metadata": {
                            "uid": "cscc24c2cc9cb09048"
                        }
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
                                    "special_coupon_discount_rate": 68,
                                    "_metadata": {
                                        "uid": "csafb68d37b06d5300"
                                    }
                                }
                            },
                            {
                                "faqs": {
                                    "coupon_faqs": [
                                        {
                                            "question": "How to avail coupon benefits?",
                                            "answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>",
                                            "_metadata": {
                                                "uid": "cs17336dc2d6990bc5"
                                            }
                                        },
                                        {
                                            "question": "Where can I find the coupons I collected?",
                                            "answer": "<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>",
                                            "_metadata": {
                                                "uid": "cs39abbcbd75de27ed"
                                            }
                                        },
                                        {
                                            "question": "Can you collect a coupon first and purchase an item later?",
                                            "answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>",
                                            "_metadata": {
                                                "uid": "cs02f8db316b3be669"
                                            }
                                        }
                                    ],
                                    "_metadata": {
                                        "uid": "cs59ea9c4069a88ddf"
                                    }
                                }
                            }
                        ],
                        "_metadata": {
                            "uid": "cs7da177f7ae4e245e"
                        }
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
                            },
                            {
                                "uid": "blt7d3413d9daf14f5f",
                                "_content_type_uid": "electronics"
                            }
                        ],
                        "_metadata": {
                            "uid": "cs2a9c02cd41711ba1"
                        }
                    }
                }
            ],
                {
                    "bank": [
                        {
                            "uid": "bltd477bad133866222",
                            "_content_type_uid": "bank"
                        }
                    ],
                    "card_type": [
                        "Debit Card",
                        "Credit Card"
                    ],
                    "discount_in_percentage": 10,
                    "_metadata": {
                        "uid": "cs898e84810f3e2553"
                    }
                }
            ],
            "uid": "blt6549021b3bbeae5c",
            "created_by": "blt42e55757d70d5f81026a2b9f",
            "updated_by": "blt6563a9b067fc1bc9",
            "created_at": "2020-05-10T13:09:01.499Z",
            "updated_at": "2021-07-18T15:50:07.899Z",
            "ACL": {},
            "_version": 6,
            "_in_progress": false,
            "frequently_bought_together": [
                {
                    "uid": "blt0e302e4595da19c1",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt44857e1ae5e9e272",
                    "_content_type_uid": "kitchen_appliances"
                },
                {
                    "uid": "blt49139d483f5799bc",
                    "_content_type_uid": "kitchen_appliances"
                }
            ],
            "product_rating": 5,
            "helpful_links": {
                "seller": "https://company-name.com",
                "return-policy": "https://policies.com"
            },
            "cart_items": {
                "type": "doc",
                "attrs": {},
                "uid": "16c79b3b075048a9ba829bfd2ab5f948",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "dc8342eb5899466ab9dde915dee44646",
                        "children": [
                            {
                                "text": "Items in your Shopping Cart:"
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "85ef916a99ee4cb18b40b429ac377626",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "1761c3a9ba954bab9e516bf2f498f70b",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt44857e1ae5e9e272",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "9beb74de52964ccb972c33022f2e7051",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt10e68dbbfc14b75b",
                            "locale": "en-us",
                            "content-type-uid": "electronics"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "33c00b31c0224c749d28837090cafe51",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt49139d483f5799bc",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "8d740b6c0a3144ddb82e47d13ae5be35",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "b578c192d6f6415e9eb6035d915e9769",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "fa0826918c8a475a8631d49a06aaf375",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "blt6e0b1713123d2566",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6e0b1713123d2566/60f44c5180ce947e9b4fbe0b/Logo.png",
                            "asset-name": "Logo.png",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 6
            },
            "publish_details": {
                "environment": "blta39a4441696e35e0",
                "locale": "en-us",
                "time": "2021-07-18T15:51:55.129Z",
                "user": "blt6563a9b067fc1bc9"
            }
        },
        {
            "title": "iPhone 7 64GB",
            "url": "/mobiles/iphone-7",
            "description": "<p>iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance.&nbsp;And it looks every bit as powerful as it is. This is iPhone 7.</p>",
            "images": [
                {
                    "uid": "bltda02effe8bc97bb9",
                    "title": "Apple-iPhone-SE-Rose-Gold.jpg",
                    "created_by": "bltcd82b2c6bf913241",
                    "updated_by": "bltcd82b2c6bf913241",
                    "created_at": "2019-08-16T08:05:09.588Z",
                    "updated_at": "2019-08-16T08:05:09.588Z",
                    "content_type": "image/jpeg",
                    "file_size": "45091",
                    "filename": "Apple-iPhone-SE-Rose-Gold.jpg",
                    "ACL": [],
                    "_version": 1,
                    "is_dir": false,
                    "tags": [],
                    "publish_details": {
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us",
                        "time": "2019-08-19T12:28:56.964Z",
                        "user": "blt587a89fc7883c56700a95bfe"
                    },
                    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltda02effe8bc97bb9/5d5663b546d2e3383a96ec5e/Apple-iPhone-SE-Rose-Gold.jpg"
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
            "locale": "en-us",
            "size": 32,
            "color": "Rose Gold",
            "additional_info": [
                {
                    "rating": {
                        "stars": 5,
                        "_metadata": {
                            "uid": "csaf7044f6ec878c06"
                        }
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
                                    "special_coupon_discount_rate": 40,
                                    "_metadata": {
                                        "uid": "csabd69c10a6d182c0"
                                    }
                                }
                            },
                            {
                                "faqs": {
                                    "coupon_faqs": [
                                        {
                                            "question": "How to avail coupon benefits?",
                                            "answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>",
                                            "_metadata": {
                                                "uid": "cs4f42a56dc637cb40"
                                            }
                                        },
                                        {
                                            "question": "Where can I find the coupons I collected?",
                                            "answer": "<p>On the Homepage, navigate to the Services & Benefits section and then click on Coupons. Here, you can find all the coupons you have collected under My Coupons.</p>",
                                            "_metadata": {
                                                "uid": "cs043d4c2b3b499e78"
                                            }
                                        },
                                        {
                                            "question": "Can you collect a coupon first and purchase an item later?",
                                            "answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>",
                                            "_metadata": {
                                                "uid": "cs392b72bdc654c66f"
                                            }
                                        }
                                    ],
                                    "_metadata": {
                                        "uid": "csfed25618659ed58a"
                                    }
                                }
                            }
                        ],
                        "_metadata": {
                            "uid": "cs79b806ce3f9ce242"
                        }
                    }
                },
                {
                    "related_products": {
                        "products": [
                            {
                                "uid": "blt6549021b3bbeae5c",
                                "_content_type_uid": "product"
                            },
                            {
                                "uid": "bltdbe63e789fd3d08e",
                                "_content_type_uid": "product"
                            },
                            {
                                "uid": "blta250054cfa4f5aab",
                                "_content_type_uid": "product"
                            }
                        ],
                        "home_appliances": [
                            {
                                "uid": "blt0e302e4595da19c1",
                                "_content_type_uid": "electronics"
                            },
                            {
                                "uid": "blt7375bb3c0e4859de",
                                "_content_type_uid": "electronics"
                            },
                            {
                                "uid": "blt49139d483f5799bc",
                                "_content_type_uid": "kitchen_appliances"
                            },
                            {
                                "uid": "blt1ecc761f990dc547",
                                "_content_type_uid": "kitchen_appliances"
                            }
                        ],
                        "_metadata": {
                            "uid": "csa3614a080ea030c6"
                        }
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
                    "discount_in_percentage": 60,
                    "_metadata": {
                        "uid": "csdd78a3f3499070db"
                    }
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
                    "discount_in_percentage": 55,
                    "_metadata": {
                        "uid": "cs011d11b13ff490a9"
                    }
                }
            ],
            "uid": "bltdbe63e789fd3d08e",
            "created_by": "blt42e55757d70d5f81026a2b9f",
            "updated_by": "blt6563a9b067fc1bc9",
            "created_at": "2020-05-11T12:47:32.533Z",
            "updated_at": "2021-07-18T15:47:11.766Z",
            "ACL": {},
            "_version": 6,
            "_in_progress": false,
            "frequently_bought_together": [
                {
                    "uid": "blt7375bb3c0e4859de",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt2349e9c0b7ce06fa",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt0e302e4595da19c1",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt1ecc761f990dc547",
                    "_content_type_uid": "kitchen_appliances"
                },
                {
                    "uid": "blt44857e1ae5e9e272",
                    "_content_type_uid": "kitchen_appliances"
                }
            ],
            "product_rating": 4,
            "helpful_links": {
                "seller": "https://company-name.com",
                "return-policy": "https://policies.com"
            },
            "cart_items": {
                "type": "doc",
                "attrs": {},
                "uid": "e2b3c8a0c42b4f9fb951678a6ad1bae6",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "cf07af8ac9f34e55ab68b35a3d19756f",
                        "children": [
                            {
                                "text": "Items in your Shopping Cart:"
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "1f68ee412830432f88fe96fb6d5445e1",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "db7920cc2a5a41faad1d27db252328c0",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt0e302e4595da19c1",
                            "locale": "en-us",
                            "content-type-uid": "electronics"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "0c3c4dae7837491bb81fce8987768fd6",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt46128ea08fdeb168",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "b518379240794d1bb1e0124564fddea5",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt44857e1ae5e9e272",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "d3f73824313046e4a0546f755ed8b871",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "d5d74e99e7774d97b0650bb09af94fcc",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "3912e4b364b7475b9063a5912ee3bdc0",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "blt6e0b1713123d2566",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6e0b1713123d2566/60f44c5180ce947e9b4fbe0b/Logo.png",
                            "asset-name": "Logo.png",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 6
            },
            "publish_details": {
                "environment": "blta39a4441696e35e0",
                "locale": "en-us",
                "time": "2021-07-18T15:51:55.114Z",
                "user": "blt6563a9b067fc1bc9"
            }
        },
        {
            "title": "Redmi Note Prime",
            "url": "/redmi-note-prime",
            "description": "<p>64-bit Qualcomm® SnapdragonTM 410, 2GB RAM,</p>\n<p>16GB Flash (up to 32GB microSD support), 13.97cm (5.5) HD IPS display, 13MP rear camera, 4G dual SIM, 3100mAh removable battery</p>",
            "images": [
                {
                    "uid": "blt50a7a9dd6866776f",
                    "title": "01.jpg",
                    "created_by": "bltcd82b2c6bf913241",
                    "updated_by": "bltcd82b2c6bf913241",
                    "created_at": "2019-08-16T08:05:18.932Z",
                    "updated_at": "2019-08-16T08:05:18.932Z",
                    "content_type": "image/jpeg",
                    "file_size": "145200",
                    "filename": "01.jpg",
                    "ACL": [],
                    "_version": 1,
                    "is_dir": false,
                    "tags": [],
                    "publish_details": {
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us",
                        "time": "2019-08-19T12:28:56.964Z",
                        "user": "blt587a89fc7883c56700a95bfe"
                    },
                    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt50a7a9dd6866776f/5d5663be34d39437c37c5376/01.jpg"
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
            "locale": "en-us",
            "size": 16,
            "color": "Black",
            "additional_info": [
                {
                    "rating": {
                        "stars": 2,
                        "_metadata": {
                            "uid": "cs291c6399e1539311"
                        }
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
                                    "coupon_discount_rate": 20,
                                    "_metadata": {
                                        "uid": "cs2a17f3f059dd9e7b"
                                    }
                                }
                            },
                            {
                                "special_coupons": {
                                    "special_coupon_name": "Kitchen Bonanza",
                                    "special_coupon_details": "Save 60 percent when you purchase kitchen appliances worth a total price of 3000 USD.",
                                    "special_coupon_discount_rate": 60,
                                    "_metadata": {
                                        "uid": "cse8bc70b701541c2b"
                                    }
                                }
                            }
                        ],
                        "_metadata": {
                            "uid": "csc9f344e9eed58485"
                        }
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
                                "uid": "blt2349e9c0b7ce06fa",
                                "_content_type_uid": "electronics"
                            },
                            {
                                "uid": "blt46128ea08fdeb168",
                                "_content_type_uid": "kitchen_appliances"
                            }
                        ],
                        "_metadata": {
                            "uid": "cs572e9c4a17ad2692"
                        }
                    }
                }
            ],
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
                    "discount_in_percentage": 24,
                    "_metadata": {
                        "uid": "cs9cc5da2d0bfbc08d"
                    }
                }
            ],
            "uid": "blte63b2ff6f6414d8e",
            "created_by": "blt42e55757d70d5f81026a2b9f",
            "updated_by": "blt6563a9b067fc1bc9",
            "created_at": "2020-05-11T12:44:49.928Z",
            "updated_at": "2021-07-18T15:45:50.906Z",
            "ACL": {},
            "_version": 6,
            "_in_progress": false,
            "frequently_bought_together": [
                {
                    "uid": "blt7375bb3c0e4859de",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt2349e9c0b7ce06fa",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt7d3413d9daf14f5f",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt46128ea08fdeb168",
                    "_content_type_uid": "kitchen_appliances"
                }
            ],
            "product_rating": 4,
            "helpful_links": {
                "seller": "https://company-name.com",
                "return-policy": "https://policies.com"
            },
            "cart_items": {
                "type": "doc",
                "attrs": {},
                "uid": "2b35f3429dca426e9dcfdb614b5ce60f",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "833515f543e44c4f99c6e8c406129256",
                        "children": [
                            {
                                "text": "Items in your Shopping Cart:"
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "818774a71f8047d990d1a2ab8ad0ee17",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "319a19710e0b4601b93bfff2d85cce2b",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt49139d483f5799bc",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "7d0472d3f4984e19bad7dfc672f2120d",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt10e68dbbfc14b75b",
                            "locale": "en-us",
                            "content-type-uid": "electronics"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "d69bf28413a645e88da17927341f54be",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt1ecc761f990dc547",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "1dbc20aa47a349db8f1b1fd3ce192f13",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "df6e776bc88142f9a391c7d37b931852",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "bf5295ea97c34661b26b21d735136d4d",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "blt6e0b1713123d2566",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6e0b1713123d2566/60f44c5180ce947e9b4fbe0b/Logo.png",
                            "asset-name": "Logo.png",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 6
            },
            "publish_details": {
                "environment": "blta39a4441696e35e0",
                "locale": "en-us",
                "time": "2021-07-18T15:51:55.101Z",
                "user": "blt6563a9b067fc1bc9"
            }
        },
        {
            "title": "Galaxy J1",
            "url": "/mobiles/galaxy-j1",
            "description": "<p>Enjoy vibrant colours and deeper contrast while you watch your favourite videos on a Super AMOLED display. All the while getting the most out of your 4G experience with Ultra Data Saving Mode that helps you save up to 50% of data.</p>",
            "size": 8,
            "color": "Black",
            "images": [
                {
                    "uid": "blt11b00b9a335ed526",
                    "title": "samsung-galaxy-j1.jpg",
                    "created_by": "bltcd82b2c6bf913241",
                    "updated_by": "bltcd82b2c6bf913241",
                    "created_at": "2019-08-16T08:05:18.935Z",
                    "updated_at": "2019-08-16T08:05:18.935Z",
                    "content_type": "image/jpeg",
                    "file_size": "166189",
                    "filename": "samsung-galaxy-j1.jpg",
                    "ACL": [],
                    "_version": 1,
                    "is_dir": false,
                    "tags": [],
                    "publish_details": {
                        "environment": "blta39a4441696e35e0",
                        "locale": "en-us",
                        "time": "2019-08-19T12:28:56.964Z",
                        "user": "blt587a89fc7883c56700a95bfe"
                    },
                    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt11b00b9a335ed526/5d5663be995bf53944dfaf7b/samsung-galaxy-j1.jpg"
                }
            ],
            "categories": [
                {
                    "uid": "blt9d72fa3afc11d27f",
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
            "additional_info": [
                {
                    "rating": {
                        "stars": 4,
                        "_metadata": {
                            "uid": "cs27ff637006a76423"
                        }
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
                                    "special_coupon_discount_rate": 70,
                                    "_metadata": {
                                        "uid": "cs20f74cc5a6e04d6c"
                                    }
                                }
                            },
                            {
                                "faqs": {
                                    "coupon_faqs": [
                                        {
                                            "question": "How to avail coupon benefits?",
                                            "answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>",
                                            "_metadata": {
                                                "uid": "cs87b6d2e8a1d339de"
                                            }
                                        },
                                        {
                                            "question": "Where can I find the coupons I collected?",
                                            "answer": "<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>",
                                            "_metadata": {
                                                "uid": "cs88ecda7859078845"
                                            }
                                        },
                                        {
                                            "question": "Can you collect a coupon first and purchase an item later?",
                                            "answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>",
                                            "_metadata": {
                                                "uid": "cs80452887bd7278d8"
                                            }
                                        }
                                    ],
                                    "_metadata": {
                                        "uid": "cs0780c9446a68875c"
                                    }
                                }
                            }
                        ],
                        "_metadata": {
                            "uid": "cs04a24121462c26a1"
                        }
                    }
                },
                {
                    "related_products": {
                        "products": [
                            {
                                "uid": "bltd8ff819f10c6973b",
                                "_content_type_uid": "product"
                            },
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
                        ],
                        "_metadata": {
                            "uid": "cs3dbebc9a30618e31"
                        }
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
                    "discount_in_percentage": 25,
                    "_metadata": {
                        "uid": "csb29efc6f8ef02d01"
                    }
                },
                {
                    "bank": [
                        {
                            "uid": "bltd477bad133866222",
                            "_content_type_uid": "bank"
                        }
                    ],
                    "card_type": [
                        "Credit Card",
                        "Debit Card"
                    ],
                    "discount_in_percentage": 30,
                    "_metadata": {
                        "uid": "csbb444f7ec5d40610"
                    }
                }
            ],
            "tags": [],
            "locale": "en-us",
            "uid": "blt1e1d4385e656835a",
            "created_by": "blt42e55757d70d5f81026a2b9f",
            "updated_by": "blt6563a9b067fc1bc9",
            "created_at": "2020-05-11T13:32:18.406Z",
            "updated_at": "2021-07-18T15:44:32.861Z",
            "ACL": {},
            "_version": 6,
            "_in_progress": false,
            "frequently_bought_together": [
                {
                    "uid": "blt7375bb3c0e4859de",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt23f4282bd1173ae9",
                    "_content_type_uid": "electronics"
                },
                {
                    "uid": "blt44857e1ae5e9e272",
                    "_content_type_uid": "kitchen_appliances"
                }
            ],
            "product_rating": 2,
            "helpful_links": {
                "seller": "https://company-name.com",
                "return-policy": "https://policies.com"
            },
            "cart_items": {
                "type": "doc",
                "attrs": {},
                "uid": "b1698509b1544b7db2dba99ca1f4f8ec",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "03a7cd34c2f747ed935796a417f77ad1",
                        "children": [
                            {
                                "text": "Items in your Shopping Cart:"
                            }
                        ]
                    },
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "7aef68e211cf4368b2915e77a1394cdf",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "0316b37defe14122ab8deaab655ccc42",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt44857e1ae5e9e272",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "19e2c3cb90f742f7a636ba550b2b32bb",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt0e302e4595da19c1",
                            "locale": "en-us",
                            "content-type-uid": "electronics"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "1ce6281292ff4405912b004db181af1e",
                        "type": "reference",
                        "attrs": {
                            "display-type": "block",
                            "type": "entry",
                            "class-name": "embedded-entry redactor-component block-entry",
                            "entry-uid": "blt49139d483f5799bc",
                            "locale": "en-us",
                            "content-type-uid": "kitchen_appliances"
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "21e5c329ca9e45d4ad9714e24836c1a1",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "5026a2b9171c4dc9a10f51b922dc54ea",
                        "type": "p",
                        "attrs": {},
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    },
                    {
                        "uid": "91bebb33099748068e8d048be217256f",
                        "type": "reference",
                        "attrs": {
                            "display-type": "display",
                            "asset-uid": "blt6e0b1713123d2566",
                            "content-type-uid": "sys_assets",
                            "asset-link": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt6e0b1713123d2566/60f44c5180ce947e9b4fbe0b/Logo.png",
                            "asset-name": "Logo.png",
                            "asset-type": "image/png",
                            "type": "asset",
                            "class-name": "embedded-asset",
                            "inline": false
                        },
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 6
            },
            "publish_details": {
                "environment": "blta39a4441696e35e0",
                "locale": "en-us",
                "time": "2021-07-18T15:51:55.144Z",
                "user": "blt6563a9b067fc1bc9"
            }
        }
    ]
}
```
