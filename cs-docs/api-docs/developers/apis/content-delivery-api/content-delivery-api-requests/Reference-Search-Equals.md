---
title: "Reference Search Equals"
description: GET /content_types/{content_type_uid}/entries?locale={locale_code}&query={'reference_field_uid':{'$in_query':{'referenced_content_type's_field_uid':'value'}}}
url: developers/apis/content-delivery-api/requests/reference-search-equals
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-15
---

# Reference Search Equals

**GET** `/content_types/{content_type_uid}/entries?locale={locale_code}&query={"reference_field_uid":{"$in_query":{"referenced_content_type's_field_uid":"value"}}}`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy the query conditions made on referenced fields.  
This query will work for entries only.

**Example:**In the Product content type, if you wish to retrieve all entries that have their brand (Reference field) title set to Apple Inc. So, the query that needs to be run is given below:

{"brand": { "$in_query": { "title": "Apple Inc."}}}

If you have enabled multiple content type referencing, you need to mention the content type UID of the parent content type as follows:

{"brand":{"$in_query":{"title":"Apple Inc.", "_content_type_uid":"brand"}, "_content_type_uid":"product"}}

You can use queries within this query (nested querying) in order to query on the referred entries. In this case, the syntax of the query will be as follows:

- General query: {"reference_field_uid":{"$in_query":{"referred_content_type's_field_uid":{"query_to_be_applied"}}}}
- Multiple content type reference query: {"reference_field_uid":{"$in_query":{"referred_content_type's_field_uid":{"query_to_be_applied"}}}, "_content_type_uid":"UID_of_referred_content_type"}

Additionally, to retrieve entries that also include references to entries of multiple content types, you need to specify the content type UIDs of all the referred entries when querying.

For example, “Parent Reference” has a Reference field that points to “Reference content type 1” and “Reference content type 1” has a Reference field that points to both “Reference content type 2” and “Reference content type 3”.

So, to retrieve an entry in “Parent Reference” that has referred to an entry of “Reference content type 1” whose Reference field has referred an entry titled “Sample” of “Reference content type 2”. The query format is as follows:

- General query: {"referred_parent_content_type_field_uid": {"$in_query": {"referred_content_type_2_field_uid": { "$in_query": {"title": "Sample"}}}}}
- Multiple content type reference query: {"referred_parent_content_type_field_uid": {"$in_query": {"referred_content_type_2_field_uid": { "$in_query": {"title": "Sample", "_content_type_uid": "referred_content_type_3_uid"} }, "_content_type_uid": "referred_content_type_2_uid"}, "_content_type_uid": "referred_parent_content_type_uid"}}

##### Reference Search Equals for Nested Querying

You can use queries within this query (nested querying) in order to query on the referred entries.This query will work for entries only.

The syntax of the query will be as follows:

- General query: {"reference_field_uid": { "$in_query": { "referred_fieldname": {"query_to_be_applied"}}}}
- Multiple content type referencing query: {"reference_field_uid": { "$in_query": { "referred_fieldname": {"query_to_be_applied"}}, "_content_type_uid ":"UID_of_parent_content_type"}}

**Example**: If you want to retrieve all entries that have referenced entries with title that starts with ‘S’ within the frequently_bought_together field, you need to run the query given below:

- General query: {"frequently_bought_together": {"$in_query": {"title": {"$regex": "^s", "$options": "i"}}}}
- Multiple content type referencing query: {"frequently_bought_together": {"$in_query": {"title": {"$regex": "^a", "$options": "i"}, "_content_type_uid": "electronics"}, "_content_type_uid": "kitchen_appliances"}}

In the above query, ‘[Search by Regex](#search-by-regex)’ query has been applied on the referred field. Other queries that can be applied are: [Equals Operator](#equals-operator), [Equals Within Group Operator](#equals-operator-within-group), [Not-equals Operator](#not-equals-operator), [Array Equals Operator,](#array-equals-operator) [Array Not-equals Operator](#array-not-equals-operator), [AND Operator](#and-operator), [OR Operator](#or-operator), [Less Than](#less-than), [Less Than Or Equal To](#less-than-or-equal-to), [Greater Than](#greater-than), [Greater Than Or Equal To](#greater-than-or-equal-to), and [Exists](#exists).

##### Reference Search Equals Within Group

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you wish to search for entries.
  Default: `product`

## Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **query** (required)
  Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.
  Default: `{"brand":{"$in_query":{"title":"Apple Inc."}}}`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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
    }
  ]
}
```

