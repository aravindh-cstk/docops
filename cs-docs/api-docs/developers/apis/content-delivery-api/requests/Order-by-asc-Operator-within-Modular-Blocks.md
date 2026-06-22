---
title: "Order by asc Operator within Modular Blocks"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&asc={modular_block_UID.block_UID.field_UID}
url: developers/apis/content-delivery-api/requests/order-by-asc-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-01
---

# Order by asc Operator within Modular Blocks


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}&asc={modular_block_UID.block_UID.field_UID}`

When fetching entries, you can sort your fetched entries in the ascending order with respect to the values of any block within a Modular Block field.

This query is specifically for entries and works on fields that are part of any block within a Modular Block field.

**Note:** Currently, this query is not applicable for Reference fields within Modular Blocks.

**Example:** In the Products content type, we have a Modular Block field named Additional Info ("uid":"additional_info") that contains the Rating ("uid":"rating") block. And, within this Rating block, we have a field named Stars ("uid":"stars"). Use the following URL to retrieve entries in ascending order based on the values of the Stars field:

https://cdn.contentstack.io/v3/content_types/product/entries?environment=production&asc=additional_info.rating.stars

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt02f7b45378b008ee | Enter the API key of your stack. |

| access_token | cs5b69faf35efdebd91d08bcf4 | Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication). |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type in which you wish to search for entries. |

| locale | en-us | Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed. |

| asc | additional_info.rating.stars | Enter the actual query that will be executed to retrieve entries. This query should be in JSON format. |

| include_branch | false | Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resid |

**Response (200):**

```json
{
	"entries": [{
			"title": "Galaxy Note",
			"url": "/mobiles/galaxy-note",
			"description": "<p>Snapdragon</p>",
			"size": 32,
			"color": "Gold",
			"images": [{
					"uid": "blt19c34e5374418484",
					"title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
					"created_by": "bltcd82b2c6bf913241",
					"updated_by": "bltcd82b2c6bf913241",
					"created_at": "2019-08-16T08:05:30.460Z",
					"updated_at": "2019-08-16T08:05:30.460Z",
					"content_type": "image/jpeg",
					"file_size": "69609",
					"filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
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
					"url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg"
				},
				{
					"uid": "bltf8c7852efd06d11f",
					"title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
					"created_by": "bltcd82b2c6bf913241",
					"updated_by": "bltcd82b2c6bf913241",
					"created_at": "2019-08-16T08:05:05.009Z",
					"updated_at": "2019-08-16T08:05:05.009Z",
					"content_type": "image/png",
					"file_size": "63422",
					"filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png",
					"ACL": [],
					"_version": 1,
					"is_dir": false,
					"tags": [],
					"publish_details": {
						"environment": "blta39a4441696e35e0",
						"locale": "en-us",
						"time": "2019-08-19T12:29:04.717Z",
						"user": "blt587a89fc7883c56700a95bfe"
					},
					"url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/bltf8c7852efd06d11f/5d5663b166aa1a361fba10f9/in-galaxy-note-5-n9208-sm-n9208zdvins-000000006-l30-2-gold-thumb.png"
				}
			],
			"categories": [{
					"uid": "blt9fa0f59d03862aa7",
					"_content_type_uid": "category"
				},
				{
					"uid": "blt9d72fa3afc11d27f",
					"_content_type_uid": "category"
				}
			],
			"price_in_usd": 101,
			"brand": [{
				"uid": "blt5499dd00bb716b14",
				"_content_type_uid": "brand"
			}],
			"launch_date": "2016-07-07",
			"instock": false,
			"tags": [
				"redmi"
			],
			"locale": "en-us",
			"additional_info": [{
					"rating": {
						"stars": 2,
						"_metadata": {
							"uid": "cs46f74dadd613e09f"
						}
					}
				},
				{
					"deals": {
						"deal_name": "Christmas Deal",
						"deal_details": "If you are looking for good Amazon deals and bargains, Christma's Deals is the place to come. We are your online one-stop shop for savings and specials on our products.",
						"coupons": [{
								"daily_coupons": {
									"coupon_name": "Early Bird Coupon",
									"coupon_details": "Save 50 percent on your first three purchases.",
									"coupon_discount_rate": 50,
									"_metadata": {
										"uid": "cs4fec082310f933dc"
									}
								}
							},
							{
								"special_coupons": {
									"special_coupon_name": "High Five",
									"special_coupon_details": "Save 5 percent on purchasing items worth a total price of 2000 USD.",
									"special_coupon_discount_rate": 5,
									"_metadata": {
										"uid": "csd636c1a11257a441"
									}
								}
							},
							{
								"faqs": {
									"coupon_faqs": [{
											"question": "How to avail coupon benefits?",
											"answer": "<p>Just click on the \"Collect Coupon\" button and enjoy using your coupons while purchasing various items across our site.</p>",
											"_metadata": {
												"uid": "csa2cee03fe308b928"
											}
										},
										{
											"question": "Where can I find the coupons I collected?",
											"answer": "<p>On the Homepage, navigate to the <strong>Services & Benefits</strong> section and then click on <strong>Coupons</strong>. Here, you can find all the coupons you have collected under <strong>My Coupons</strong>.</p>",
											"_metadata": {
												"uid": "cs0dd7cea1a72d730f"
											}
										},
										{
											"question": "Can you collect a coupon first and purchase an item later?",
											"answer": "<p>Sure, every coupon can be used any time before its expiry date. Once the coupon expires, however it would be deemed invalid.</p>",
											"_metadata": {
												"uid": "csacf3cdc9a9ac56b9"
											}
										}
									],
									"_metadata": {
										"uid": "cs4d01ac5b84c9adf4"
									}
								}
							}
						],
						"_metadata": {
							"uid": "csa1a68c5c926c9d9b"
						}
					}
				},
				{
					"related_products": {
						"products": [{
								"uid": "blte63b2ff6f6414d8e",
								"_content_type_uid": "product"
							},
							{
								"uid": "blta250054cfa4f5aab",
								"_content_type_uid": "product"
							}
						],
						"home_appliances": [{
								"uid": "blt23f4282bd1173ae9",
								"_content_type_uid": "electronics"
							},
							{
								"uid": "blt49139d483f5799bc",
								"_content_type_uid": "kitchen_appliances"
							}
						],
						"_metadata": {
							"uid": "csc9ff9c5b2819355c"
						}
					}
				}
			],
			"bank_offers": [{
				"bank": [{
					"uid": "blt83b7564e5d749a90",
					"_content_type_uid": "bank"
				}],
				"card_type": [
					"Debit Card"
				],
				"discount_in_percentage": 8,
				"_metadata": {
					"uid": "cse76e89589b3aa0f9"
				}
			}],
			"uid": "bltd8ff819f10c6973b",
			"created_by": "blt42e55757d70d5f81026a2b9f",
			"updated_by": "blt6563a9b067fc1bc9",
			"created_at": "2020-05-10T13:47:02.576Z",
			"updated_at": "2021-07-18T15:49:06.250Z",
			"ACL": {},
			"_version": 6,
			"_in_progress": false,
			"frequently_bought_together": [{
					"uid": "blt23f4282bd1173ae9",
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
			"product_rating": 4,
			"helpful_links": {
				"seller": "https://company-name.com",
				"return-policy": "https://policies.com"
			},
			"cart_items": {
				"type": "doc",
				"attrs": {},
				"uid": "023c0530719c438aafaf7d7afbf10bb5",
				"children": [{
						"type": "p",
						"attrs": {},
						"uid": "642f3257a86c4928a877e9cbd474be2d",
						"children": [{
							"text": "Items in your Shopping Cart:"
						}]
					},
					{
						"type": "p",
						"attrs": {},
						"uid": "21faecb3d39d43449fb623994abc780f",
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "10eb3255e63447ffb103d1085608a378",
						"type": "reference",
						"attrs": {
							"display-type": "block",
							"type": "entry",
							"class-name": "embedded-entry redactor-component block-entry",
							"entry-uid": "blt10e68dbbfc14b75b",
							"locale": "en-us",
							"content-type-uid": "electronics"
						},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "0d99c6ab42d94e92b7149b303c16e655",
						"type": "reference",
						"attrs": {
							"display-type": "block",
							"type": "entry",
							"class-name": "embedded-entry redactor-component block-entry",
							"entry-uid": "blt44857e1ae5e9e272",
							"locale": "en-us",
							"content-type-uid": "kitchen_appliances"
						},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "4ae0565eab834b14b2f2107f371d28ef",
						"type": "reference",
						"attrs": {
							"display-type": "block",
							"type": "entry",
							"class-name": "embedded-entry redactor-component block-entry",
							"entry-uid": "blt1ecc761f990dc547",
							"locale": "en-us",
							"content-type-uid": "kitchen_appliances"
						},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "1fc33192c79c4f46be8fa70d17387397",
						"type": "p",
						"attrs": {},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "e095fce1d1ff45e192502c7a01316f51",
						"type": "p",
						"attrs": {},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "b56879ccd99c4f339736740a28b8720f",
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
						"children": [{
							"text": ""
						}]
					}
				],
				"_version": 6
			},
			"publish_details": {
				"environment": "blta39a4441696e35e0",
				"locale": "en-us",
				"time": "2021-07-18T15:51:55.135Z",
				"user": "blt6563a9b067fc1bc9"
			}
		},
		{
			"title": "Redmi Note Prime",
			"url": "/redmi-note-prime",
			"description": "<p>64-bit Qualcomm® SnapdragonTM 410, 2GB RAM,</p>\n<p>16GB Flash (up to 32GB microSD support), 13.97cm (5.5) HD IPS display, 13MP rear camera, 4G dual SIM, 3100mAh removable battery</p>",
			"images": [{
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
			}],
			"categories": [{
					"uid": "blt9d72fa3afc11d27f",
					"_content_type_uid": "category"
				},
				{
					"uid": "blt9fa0f59d03862aa7",
					"_content_type_uid": "category"
				}
			],
			"price_in_usd": 117.3,
			"brand": [{
				"uid": "blta2e0d2130eb86263",
				"_content_type_uid": "brand"
			}],
			"launch_date": "2016-08-17",
			"instock": true,
			"tags": [],
			"locale": "en-us",
			"size": 16,
			"color": "Black",
			"additional_info": [{
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
						"coupons": [{
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
						"products": [{
								"uid": "blta250054cfa4f5aab",
								"_content_type_uid": "product"
							},
							{
								"uid": "bltd383742b89bef7af",
								"_content_type_uid": "product"
							}
						],
						"home_appliances": [{
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
			"bank_offers": [{
					"bank": [{
						"uid": "blt27729fae9269607c",
						"_content_type_uid": "bank"
					}],
					"card_type": [
						"Debit Card"
					],
					"discount_in_percentage": 27,
					"_metadata": {
						"uid": "cs1afd9bc9e656a8c4"
					}
				},
				{
					"bank": [{
						"uid": "bltfbe674ca5af1ffa3",
						"_content_type_uid": "bank"
					}],
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
			"frequently_bought_together": [{
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
				"children": [{
						"type": "p",
						"attrs": {},
						"uid": "833515f543e44c4f99c6e8c406129256",
						"children": [{
							"text": "Items in your Shopping Cart:"
						}]
					},
					{
						"type": "p",
						"attrs": {},
						"uid": "818774a71f8047d990d1a2ab8ad0ee17",
						"children": [{
							"text": ""
						}]
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
						"children": [{
							"text": ""
						}]
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
						"children": [{
							"text": ""
						}]
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
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "1dbc20aa47a349db8f1b1fd3ce192f13",
						"type": "p",
						"attrs": {},
						"children": [{
							"text": ""
						}]
					},
					{
						"uid": "df6e776bc88142f9a391c7d37b931852",
						"type": "p",
						"attrs": {},
						"children": [{
							"text": ""
						}]
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
						"children": [{
							"text": ""
						}]
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
		}
	]
}
```
