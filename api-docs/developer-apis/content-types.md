---
title: "CMA | Content Types"
description: Create, update, fetch, and manage content type schemas with fields, validations, and configuration options.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/content-types
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Content Types

[Content type](/docs/developers/create-content-types) defines the structure or schema of a page or a section of your web or mobile property. To create content for your application, you are required to first create a content type, and then create entries using the content type. 

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Additional Resource**: To get an idea of building your content type as per webpage’s layout, we recommend you to check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide.

## Get All Content Types

### Get all content types

**GET** `/content_types?include_count={boolean_value}&include_global_field_schema={boolean_value}`

The Get all content types call returns comprehensive information of all the content types available in a particular stack in your account.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:readscope.

When executing the API call, you can add queries to extend the functionality of this API call.

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass the include_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](../../../api-detail/content-delivery-api.md#queries))

**Note**:

- This API request will return a maximum of 100 content types. To retrieve the next batch of content types, make use of the skip parameter (or refer Pagination for more details).
- Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

#### Query Parameters

- **include_count** (optional)
  Set this to 'true' to include in response the total count of content types available in your stack.
  Default: `false`
- **include_global_field_schema** (optional)
  Set this to 'true' to include in response the details of all the fields within the Global field's schema.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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




## Get Single Content Type

### Get a single content type

**GET** `/content_types/{content_type_uid}?version={content_type_version}`

The Get a single content type call returns information of a specific content type.

Enter the version of the content type of which you want to retrieve the details as a query parameter. If no version is specified, you will get the latest version of the content type.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:read scope.

**Note:** The schema of the content type returned will depend on the provided version. If no version is specified, you will get the latest version of the content type.

To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](../../../api-detail/content-delivery-api.md#queries)

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass theinclude_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

**Note**: Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the details. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `product`

#### Query Parameters

- **version** (optional)
  Enter the version of the content type of which you want to retrieve the details. If no version is specified, you will get the latest version of the content type.
  Default: `1`
- **include_global_field_schema** (optional)
  Set this to 'true' to include in response the details of all the fields within the Global field's schema.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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




## Create Content Type

### Create a content type

**POST** `/content_types`

The Create a content type call creates a new content type in a particular stack of your Contentstack account.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type. You can refer the [JSON schema for creating a content type](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add fields into your content type through API.

To mark a field as non-unique, you need to set the unique parameter to false. For example, to remove the unique constraint on the default 'title' field, you need to update the JSON schema of the title field as follows:

```
{
    "display_name": "Title",
    "uid": "title",
    "data_type": "text",
    "mandatory": true,
    "unique": false,
    "field_metadata": {
      "_default": true
    },
    "multiple": false
}
```

##### Create Content Type with Select Field

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API Key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Content Type created successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e506e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```


### Create content type with select field

**POST** `/content_types`

The Create content type with select field request allows you to add a Select field while creating a content type. You can add choices within the Select field either in the form of single values or key-value pairs.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

To add single-value choices, under enum, set the advanced parameter to false and define the choice values under the choices parameter.

The schema of the **Select** field will look as follows:

```
"enum":{
    "advanced":false,
    "choices":[
        {
            "value":"1"
        },
        {
            "value":"2"
        },
        {
            "value":"3"
        }
    ]
},
```

  

To add key-value pairs as choices, under enum, set the advanced parameter to true and define the key-value choices under the choices parameter.

The schema of the **Select** field that contains key-value pairs will look as follows:

```
"enum":{
    "advanced":true,
    "choices":[
        {
            "key":"New York",
            "value":"NY"
        },
        {
            "key":"India",
            "value":"IN"
        },
        {
            "key":"Australia",
            "value":"AUS"
        }
    ]
},
```

  

**Additional Resource:** In the “Body” section, you need to provide the updated schema of your content type with the select field schema. You can refer to the [Select field JSON schema](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#select) document to know how you can add/update schema for the Select field in your content type through API.

##### Create Content Type with JSON RTE

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "content_type":{
        "title":"Page",
        "uid":"page",
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "display_name":"URL",
                "uid":"url",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_one",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_two",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            }
        ],
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "singleton":false,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/"
        }
    }
}
```

#### Sample Response

```json
{
    "notice":"Content Type created successfully.",
    "content_type":{
        "created_at":"2015-03-13T07:37:03.494Z",
        "updated_at":"2015-03-13T07:37:03.494Z",
        "title":"Page",
        "uid":"page",
        "inbuilt_class":false,
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "display_name":"URL",
                "uid":"url",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            }
        ],
        "last_activity":[
            
        ],
        "maintain_revisions":true,
        "description":"",
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/",
            "singleton":false
        },
        "abilities":{
            
        },
        "DEFAULT_ACL":{
            "roles":[
                
            ],
            "users":[
                {
                    "uid":"abcdef1234567890",
                    "read":true,
                    "create":false
                }
            ],
            "others":{
                "read":false,
                "create":false
            }
        },
        "SYS_ACL":{
            "others":{
                "read":false,
                "update":false,
                "delete":false,
                "create":false,
                "publish":false,
                "sub_acl":{
                    "read":false,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "publish":false
                }
            },
            "roles":[
                {
                    "uid":"abcd29513cc6e50299",
                    "read":true,
                    "update":true,
                    "delete":true,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                },
                {
                    "uid":"apqr13cc6e506e50299",
                    "read":true,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                }
            ]
        }
    }
}
```


### Create content type with JSON RTE

**POST** `/content_types`

The Create content type with JSON RTE request shows you how to add a JSON RTE field while creating a content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type with the JSON RTE schema as follows. You can find more details in the [JSON schema of the JSON RTE](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#json-rich-text-editor) document.

```
{
  "data_type":"json",
  "display_name":"JSON RTE",
  "uid":"json_rte",
  "field_metadata":{
    "allow_json_rte":true,
    "rich_text_type":"advanced",
    "description":"",
    "default_value":""
  },
  "reference_to":[
    "content_type_uid"
  ],
  "non_localizable":false,
  "multiple":false,
  "mandatory":false,
  "unique":false
}
```

Under the reference_to parameter, mention the UIDs of the content types whose entries you wish to embed within the JSON RTE field.

##### Create content type with custom asset field

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "content_type":{
    "title":"JSON test",
    "uid":"json_test",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "mandatory":true,
        "unique":true,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "mandatory":false,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false,
        "unique":false
      },
      {
        "data_type":"json",
        "display_name":"JSON RTE",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "description":"",
          "default_value":""
        },
        "reference_to":[
          "blog_posts"
        ],
        "non_localizable":false,
        "multiple":false,
        "mandatory":false,
        "unique":false
      }
    ],
    "options":{
      "is_page":true,
      "singleton":false,
      "title":"title",
      "sub_title":[
        
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    }
  }
}
```

#### Sample Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2021-07-20T18:15:37.107Z",
        "updated_at": "2021-07-20T18:15:37.107Z",
        "title": "JSON test",
        "uid": "json_test",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "mandatory": true,
                "unique": true,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "mandatory": false,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false,
                "unique": false
            },
            {
                "data_type": "json",
                "display_name": "JSON RTE",
                "uid": "json_rte",
                "field_metadata": {
                    "allow_json_rte": true,
                    "description": "",
                    "default_value": ""
                },
                "reference_to": [
                    "blog_posts"
                ],
                "non_localizable": false,
                "multiple": false,
                "mandatory": false,
                "unique": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt119d2427a94457f9"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [],
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
        },
        "options": {
            "is_page": true,
            "singleton": false,
            "title": "title",
            "sub_title": [],
            "url_pattern": "/:title",
            "url_prefix": "/"
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```


### Create content type with custom asset field

**POST** `/content_types`

The Create content type with custom asset field request is used to create a content type with a custom field that accepts data of type asset.

##### Create content type with taxonomy

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Request

```json
{
  "content_type":{
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":3,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{},
        "data_type":"json",
        "reference_to": [
           "sys_assets"
        ]

      }
    ],
    "options":{
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
    }
  }
}
```

#### Sample Response

```json
{
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2022-02-23T19:11:05.596Z",
    "updated_at":"2022-02-23T19:11:05.596Z",
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{
          
        },
        "data_type":"json"
      }
    ],
    "last_activity":{
      
    },
    "maintain_revisions":true,
    "description":"",
    "DEFAULT_ACL":{
      "others":{
        "read":false,
        "create":false
      },
      "users":[
        {
          "read":true,
          "sub_acl":{
            "read":true
          },
          "uid":"blt65eb8e54cb105da1"
        }
      ],
      "management_token":{
        "read":true
      }
    },
    "SYS_ACL":{
      "roles":[
        
      ],
      "others":{
        "read":false,
        "create":false,
        "update":false,
        "delete":false,
        "sub_acl":{
          "read":false,
          "create":false,
          "update":false,
          "delete":false,
          "publish":false
        }
      }
    },
    "options":{
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
    },
    "abilities":{
      "get_one_object":true,
      "get_all_objects":true,
      "create_object":true,
      "update_object":true,
      "delete_object":true,
      "delete_all_objects":true
    }
  }
}
```


### Create content type with taxonomy

**POST** `/content_types`

The Create content type with taxonomy request shows you how to add a taxonomy field while creating a content type.

In the “Body” section, you need to provide the complete schema of the content type with the Taxonomy schema as follows:

```
{
   "uid":"taxonomies",
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_1",
         "max_terms":5,
         "mandatory":true,
         "non_localizable":false
      },
      {
         "taxonomy_uid":"taxonomy_2",
         "max_terms":10,
         "mandatory":false,
         "non_localizable":false
      }
   ],
   "multiple":true
}
```

#### Headers

- **api_key** (required)
  Enter the API Key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Default: `your_management_token`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
    "content_type": {
        "title": "Products",
        "uid": "products",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ]
        },
        "options": {
            "is_page": false,
            "singleton": true,
            "sub_title": [],
            "title": "title"
        }
    }
```

#### Sample Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2023-11-20T09:54:01.988Z",
        "updated_at": "2023-11-20T09:54:01.988Z",
        "title": "Products",
        "uid": "products",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt320416c2d73b856a"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [],
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
        },
        "options": {
            "title": "title",
            "is_page": false,
            "singleton": false
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```




## Update Content Type

### Update Content Type

**PUT** `/content_types/{content_type_uid}`

The Update Content Type call is used to update the schema of an existing content type.

**Note:** Whenever you update a content type, it will auto-increment the content type version.

When executing the API call, in the “URL Parameters” section, provide the uid of your content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the updated schema of your content type. You can refer the [JSON schema for creating a content type](../../../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add/update fields in your content type through API.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Content Type updated successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"_version": 2,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "Reference",
				"uid": "reference",
				"data_type": "reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```




## Set Field Visibility Rule for Content Type

### Set Field Visibility Rule for Content Type

**PUT** `/content_types/{content_type_uid}`

The Set Field Visibility Rule for Content Type API request lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

[Field Visibility Rules](../../../../cs-docs/developers/create-content-types/about-field-visibility-rules.md) can be set while creating your content type (via UI, only after you’ve added all the required fields to the content type and saved it) or while editing a content type (both via UI and API).

To set a Field Visibility Rule, you need to add the following code snippet in the Request body of the content type:

```
{
    ...
    "content_type": {
        "field_rules": [{
            "conditions": [{
                "operand_field": "operand_field_uid",
                "operator": "equals",
                "value": "value_corresponding_to_operator"
            }],
            "match_type": "all",
            "actions": [{
                "action": "show",
                "target_field": "target_field_uid"
            }]
        }]
    }
    ...
}
```

Let’s look at the keys used in the above code snippet:

- operand_field: Pass the UID of the Operand field (operand_field_uid) i.e., the field on which you want to set the condition.
- operator: Pass the operator that you want to act on the operand field. Here’s the list of operators that are applicable based on the data type of your operand field:

| Data Types | Operations |
| --- | --- |
| Text | matches, does_not_match, starts_with, ends_with, contains |
| Number | equals, not_equals, less_than, greater_than, less_than_or_equals, greater_than_or_equals |
| Date | equals, not_equals, before_date, after_date |
| Boolean | is, is_not |
| Select | is, is_not |
| Reference | is, is_not |
- value: Pass the value that is corresponding to the operator that you have used. Note that for Date data type, you need to pass the date in ISO format.
- match_type: You need to pass either all or any depending on whether you want all your conditions or any one of your conditions to be met.
- action: You need to pass either show or hide depending on whether you want to show or hide the Target field.
- target_field: Pass the UID of the Target field (target_field_uid) i.e., the field on which you want to perform the action.

For more details, check out the [Define Conditions](../../../../cs-docs/developers/create-content-types/add-a-field-visibility-rule.md#define-conditions) section when adding a Field Visibility Rule.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you want to add field rules. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": ["url"],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Content Type updated successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"_version": 2,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": ["url"],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```




## Delete Content Type

### Delete Content Type

**DELETE** `/content_types/{content_type_uid}?force={boolean value}`

The Delete Content Type call deletes an existing content type and all the entries within it.

When executing the API call, in the “URL Parameters” section, provide the UID of your content type.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

#### Query Parameters

- **force** (optional)
  Enter 'true' to force delete a content type.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Content Type deleted successfully."
}
```




## Content Type References

### Get all references of content type

**GET** `/content_types/{content_type_uid}/references?include_global_fields={boolean_value}`

The Get all references of content type request retrieves a list of all content types where the specified content type is referenced. This includes both direct and nested references.

For example, if content type A is referenced in B, B in C, then making this request for C will return A and B.

This ensures you have complete visibility into every referenced content type, direct or nested, within the specified content type.

To configure the permissions for your application via OAuth, please include the cm.content-type:readscope.

Additionally, to fetch all Global fields in which the specified content type is referenced, you need to pass include_global_fields as a query parameter. Set this parameter to true to include the Global fields along with the content types.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the references. The Unique ID of a content type is unique across a stack.
  Default: `brand`

#### Query Parameters

- **include_global_fields** (optional)
  Set the include_global_fields parameter to “true” to retrieve all the Global fields in which the specified content type is referenced.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"references": [
		"Product",
		"Blog"
	]
}
```




## Export Content Type

### Export a content type

**GET** `/content_types/{content_type_uid}/export?version={content_type_version}`

This call is used to export a specific content type and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.content-types:export scope.

However, please note that the entries of the specified content type are not exported through this call.

The schema of the content type returned will depend on the version number provided.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type you want to retrieve. The unique ID of a content type is unique across a stack.
  Default: `product`

#### Query Parameters

- **version** (optional)
  Enter the version of content type you want to retrieve. If no version is specified, you will get the latest version of the content type.
  Default: `1`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"created_at": "2016-10-03T11:44:11.839Z",
	"updated_at": "2016-10-03T11:44:11.908Z",
	"title": "Page",
	"uid": "page",
	"inbuilt_class": false,
	"_version": 1,
	"schema": [{
			"display_name": "Title",
			"uid": "title",
			"data_type": "text",
			"field_metadata": {
				"_default": true
			},
			"unique": false,
			"multiple": false,
			"mandatory": true,
			"non_localizable": false
		},
		{
			"display_name": "URL",
			"uid": "url",
			"data_type": "text",
			"field_metadata": {
				"_default": true
			},
			"unique": false,
			"multiple": false,
			"mandatory": true,
			"non_localizable": false
		},
			{
				"display_name": "Reference",
				"uid": "reference",
				"data_type": "reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			}
	],
	"last_activity": [],
	"maintain_revisions": true,
	"description": "",
	"options": {
		"title": "title",
		"publishable": true,
		"is_page": true,
		"sub_title": [
			"url"
		],
		"url_pattern": "/:title",
		"url_prefix": "/",
		"singleton": false
	},
	"abilities": {},
	"DEFAULT_ACL": {
		"roles": [],
		"users": [{
			"uid": "abcdef1234567890",
			"read": true,
			"create": false
		}],
		"others": {
			"read": false,
			"create": false
		}
	},
	"SYS_ACL": {
		"others": {
			"read": false,
			"update": false,
			"delete": false,
			"create": false,
			"publish": false,
			"sub_acl": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false
			}
		},
		"roles": [{
				"uid": "abcd29513cc6e50299",
				"read": true,
				"update": true,
				"delete": true,
				"sub_acl": {
					"read": true,
					"update": true,
					"delete": true,
					"create": true,
					"publish": true
				}
			},
			{
				"uid": "apqr13cc6e50299",
				"read": true,
				"update": false,
				"delete": false,
				"create": false,
				"sub_acl": {
					"read": true,
					"update": true,
					"delete": true,
					"create": true,
					"publish": true
				}
			}
		]
	}
}
```




## Import Content Type

### Import a content type

**POST** `/content_types/import?overwrite={boolean_value}`

The Import a content type call imports a content type into a stack by uploading JSON file.   
To configure the permissions for your application via OAuth, please include the cm.content-types:import scope.

**Tip:** You can try the call manually in any REST API client, such as Postman. You can export the required content type's JSON file, make the necessary changes to the data and then import the content type. While importing, you need to pass a form-data parameter named content_type and select the input type as 'File'. Then, select the JSON file of the content type that you wish to import.

#### Query Parameters

- **overwrite** (optional)
  Select 'true' to replace the existing content type with the imported content type file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"notice": "Content Type imported successfully.",
	"content_type": {
		"created_at": "2019-07-31T10:34:25.910Z",
		"updated_at": "2019-07-31T10:34:25.910Z",
		"title": "Page",
		"uid": "page",
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
					"version": 3
				},
				"multiple": false,
				"non_localizable": false
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
				"unique": false,
				"non_localizable": false
			},
			{
				"data_type": "reference",
				"display_name": "Reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"uid": "reference",
				"mandatory": false,
				"multiple": false,
				"unique": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"mandatory": true,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"is_page": true,
			"singleton": false,
			"title": "title",
			"sub_title": [],
			"url_pattern": "/:title",
			"url_prefix": "/"
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"others": {
				"read": false,
				"create": false
			},
			"users": [{
				"read": true,
				"sub_acl": {
					"read": true
				},
				"uid": "blt66bfb66666b6666c"
			}]
		},
		"SYS_ACL": {
			"roles": [],
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
	}
}
```

