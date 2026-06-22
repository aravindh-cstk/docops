---
title: "Get a single content type"
description: GET /content_types/{content_type_uid}?version={content_type_version}
url: developers/apis/content-management-api/requests/get-a-single-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-01-08
---

# Get a single content type


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}?version={content_type_version}`

The Get a single content type call returns information of a specific content type.

Enter the version of the content type of which you want to retrieve the details as a query parameter. If no version is specified, you will get the latest version of the content type.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:read scope.

**Note:** The schema of the content type returned will depend on the provided version. If no version is specified, you will get the latest version of the content type.

To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](/docs/developers/apis/content-delivery-api#queries)

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass theinclude_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

**Note**: Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the unique ID of the content type of which you want to retrieve the details. The UID is generated based on the title of the content type. The unique ID of |

| version | 1 | Enter the version of the content type of which you want to retrieve the details. If no version is specified, you will get the latest version of the content type |

| include_global_field_schema | true | Set this to 'true' to include in response the details of all the fields within the Global field's schema. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"content_type": {
		"created_at": "2017-01-09T10:03:25.096Z",
		"updated_at": "2018-02-23T07:34:33.802Z",
		"title": "Product",
		"uid": "product",
		"_version": 1,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"mandatory": true,
				"unique": true,
				"field_metadata": {
					"_default": true,
					"instruction": "Product Name"
				},
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"mandatory": false,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			},
			{
				"data_type": "text",
				"display_name": "Description",
				"uid": "description",
				"field_metadata": {
					"allow_rich_text": true,
					"description": "",
					"multiline": false,
					"rich_text_type": "advanced"
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "number",
				"display_name": "Size (in GB)",
				"uid": "size",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "text",
				"display_name": "Color",
				"uid": "color",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"format": "",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "file",
				"display_name": "Images",
				"uid": "images",
				"field_metadata": {
					"description": "",
					"rich_text_type": "standard",
					"image": true
				},
				"multiple": true,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "reference",
				"display_name": "Categories",
				"reference_to": "category",
				"field_metadata": {
					"ref_multiple": true
				},
				"uid": "categories",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "number",
				"display_name": "Price in USD",
				"uid": "price_in_usd",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "reference",
				"display_name": "Brand",
				"reference_to": "brand",
				"field_metadata": {
					"ref_multiple": false
				},
				"uid": "brand",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "isodate",
				"display_name": "Launch Date",
				"uid": "launch_date",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false,
				"endDate": null,
				"startDate": null
			},
			{
				"data_type": "boolean",
				"display_name": "instock",
				"uid": "instock",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "blocks",
				"display_name": "Additional Info",
				"blocks": [{
						"title": "Related Products",
						"uid": "related_products",
						"schema": [{
							"data_type": "reference",
							"display_name": "Products",
							"reference_to": "product",
							"field_metadata": {
								"ref_multiple": true
							},
							"uid": "products",
							"mandatory": false,
							"multiple": false,
							"unique": false
						}]
					},
					{
						"title": "Rating",
						"uid": "rating",
						"schema": [{
							"data_type": "number",
							"display_name": "Stars",
							"display_type": "dropdown",
							"enum": {
								"advanced": false,
								"choices": [{
										"value": 1
									},
									{
										"value": 2
									},
									{
										"value": 3
									},
									{
										"value": 4
									},
									{
										"value": 5
									}
								]
							},
							"multiple": false,
							"uid": "stars",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"min_instance": null,
							"max_instance": null,
							"mandatory": false,
							"unique": false
						}]
					},
					{
						"title": "Deals",
						"uid": "deals",
						"schema": [{
								"data_type": "text",
								"display_name": "Deal Name",
								"display_type": "dropdown",
								"enum": {
									"advanced": false,
									"choices": [{
											"value": "Summer Deal"
										},
										{
											"value": "Independence Day Deal"
										},
										{
											"value": "Black Friday Deal"
										},
										{
											"value": "Christmas Deal"
										},
										{
											"value": "Deals of the Day"
										}
									]
								},
								"multiple": false,
								"uid": "deal_name",
								"field_metadata": {
									"description": "",
									"default_value": ""
								},
								"min_instance": null,
								"max_instance": null,
								"mandatory": false,
								"unique": false
							},
							{
								"data_type": "text",
								"display_name": "Deal Details",
								"uid": "deal_details",
								"field_metadata": {
									"description": "",
									"default_value": "",
									"multiline": true
								},
								"format": "",
								"error_messages": {
									"format": ""
								},
								"multiple": false,
								"mandatory": false,
								"unique": false
							}
						]
					}
				],
				"multiple": true,
				"uid": "additional_info",
				"field_metadata": {},
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "group",
				"display_name": "Bank Offers",
				"field_metadata": {},
				"schema": [{
						"data_type": "reference",
						"display_name": "Bank",
						"reference_to": "bank",
						"field_metadata": {
							"ref_multiple": false
						},
						"uid": "bank",
						"multiple": false,
						"mandatory": false,
						"unique": false
					},
					{
						"data_type": "text",
						"display_name": "Card Type",
						"display_type": "dropdown",
						"enum": {
							"advanced": false,
							"choices": [{
									"value": "Credit Card"
								},
								{
									"value": "Debit Card"
								}
							]
						},
						"multiple": true,
						"uid": "card_type",
						"field_metadata": {
							"description": "",
							"default_value": ""
						},
						"mandatory": false,
						"unique": false
					},
					{
						"data_type": "number",
						"display_name": "Discount In Percentage",
						"uid": "discount_in_percentage",
						"field_metadata": {
							"description": "",
							"default_value": ""
						},
						"multiple": false,
						"mandatory": false,
						"unique": false
					}
				],
				"uid": "bank_offers",
				"multiple": true,
				"mandatory": false,
				"unique": false
			}
		],
		"last_activity": {
			"environments": [{
				"uid": "bltf078df13a2193938",
				"details": [{
						"locale": "en-us",
						"time": "2019-03-28T13:08:48.487Z"
					},
					{
						"locale": "fr-fr",
						"time": "2019-02-06T06:35:09.156Z"
					},
					{
						"locale": "ja-jp",
						"time": "2019-02-06T06:35:09.156Z"
					}
				]
			}]
		},
		"maintain_revisions": true,
		"description": "",
		"options": {
			"is_page": true,
			"singleton": false,
			"title": "title",
			"sub_title": [],
			"url_pattern": "/:title",
			"url_prefix": "/mobiles/"
		},
		"abilities": {
			"get_one_object": true,
			"get_all_objects": true,
			"create_object": true,
			"update_object": true,
			"delete_object": true,
			"delete_all_objects": true
		},
		"DEFAULT_ACL": {
			"others": {
				"read": false,
				"create": false
			},
			"users": [{
				"uid": "bltf770cd8b4d387a19",
				"read": true,
				"sub_acl": {
					"read": true
				}
			}]
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"create": false,
				"update": false,
				"delete": false,
				"sub_acl": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "blt83a787d5fd1d32a3",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					},
					"update": true,
					"delete": true
				},
				{
					"uid": "blta62a52cdea3c4641",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					}
				},
				{
					"uid": "blt3595d257a5d36730",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					},
					"update": true,
					"delete": true
				}
			]
		}
	}
}
```
