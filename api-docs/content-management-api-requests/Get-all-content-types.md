---
title: "Get all content types"
description: GET /content_types?include_count={boolean_value}&include_global_field_schema={boolean_value}
url: developer-apis/content-management-api-requests/get-all-content-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-01-08
---

# Get all content types

**GET** `/content_types?include_count={boolean_value}&include_global_field_schema={boolean_value}`

The Get all content types call returns comprehensive information of all the content types available in a particular stack in your account.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:readscope.

When executing the API call, you can add queries to extend the functionality of this API call.

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass the include_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](../../../../api-detail/content-delivery-api.md#queries))

**Note**:

- This API request will return a maximum of 100 content types. To retrieve the next batch of content types, make use of the skip parameter (or refer Pagination for more details).
- Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

## Query Parameters

- **include_count** (optional)
  Set this to 'true' to include in response the total count of content types available in your stack.
  Default: `false`
- **include_global_field_schema** (optional)
  Set this to 'true' to include in response the details of all the fields within the Global field's schema.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"content_types": [{
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
		},
		{
			"created_at": "2017-01-09T10:02:47.685Z",
			"updated_at": "2019-03-27T10:12:48.323Z",
			"title": "Category",
			"uid": "category",
			"_version": 3,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true,
						"instruction": "Category Name"
					},
					"multiple": false
				},
				{
					"data_type": "text",
					"display_name": "Description",
					"uid": "description",
					"field_metadata": {
						"allow_rich_text": true,
						"description": "",
						"multiline": false,
						"rich_text_type": "advanced",
						"version": 1
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2019-03-27T09:10:42.566Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:51:24.732Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:51:24.732Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
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
					},
					{
						"uid": "blt6a44259832d467a1",
						"read": true,
						"sub_acl": {
							"read": true,
							"delete": true
						}
					}
				],
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
				}
			}
		},
		{
			"created_at": "2017-01-09T09:59:48.324Z",
			"updated_at": "2017-01-10T09:19:55.274Z",
			"title": "Brand",
			"uid": "brand",
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
						"description": "",
						"instruction": "Company Name"
					},
					"multiple": false
				},
				{
					"data_type": "file",
					"display_name": "Logo",
					"uid": "logo",
					"field_metadata": {
						"description": "",
						"rich_text_type": "standard"
					},
					"multiple": false,
					"mandatory": false,
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
					"data_type": "text",
					"display_name": "Website",
					"uid": "website",
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
					"data_type": "text",
					"display_name": "Email",
					"uid": "email",
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
					"data_type": "number",
					"display_name": "Phone",
					"uid": "phone",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "group",
					"display_name": "Head Office Address",
					"field_metadata": {},
					"schema": [{
							"data_type": "text",
							"display_name": "Street",
							"uid": "street",
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
							"data_type": "text",
							"display_name": "City",
							"uid": "city",
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
							"data_type": "text",
							"display_name": "Country",
							"uid": "country",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"format": "",
							"multiple": false,
							"mandatory": false,
							"unique": false
						}
					],
					"uid": "head_office_address",
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2018-02-23T07:51:32.188Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:51:32.188Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:51:32.188Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
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
					},
					{
						"uid": "blt6a44259832d467a1",
						"read": true,
						"sub_acl": {
							"read": true,
							"delete": true
						}
					}
				],
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
				}
			}
		},
		{
			"created_at": "2018-02-23T07:13:53.667Z",
			"updated_at": "2018-02-23T07:13:53.717Z",
			"title": "Bank",
			"uid": "bank",
			"_version": 1,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true
					},
					"multiple": false
				},
				{
					"data_type": "file",
					"display_name": "Logo",
					"uid": "logo",
					"extensions": [],
					"field_metadata": {
						"description": "",
						"rich_text_type": "standard"
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2018-02-23T07:17:06.731Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:17:06.731Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:17:06.731Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
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
	]
}
```

