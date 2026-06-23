---
title: "CDA | Entries"
description: Fetch published entries, single entry records, references, locales, and variants through delivery endpoints.
url: https://www.contentstack.com/docs/developers/apis/content-delivery-api/entries
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-08
---

# CDA | Entries

An [entry](/docs/content-managers/author-content/about-entries) is the actual piece of content created using one of the defined [content types](/docs/developers/create-content-types/about-content-types).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack.

**Note**: [Branches](/docs/developers/branches) is a plan-based feature that is available only in the new Contentstack interface.

Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## All Entries

### Get all entries

**GET** `/content_types/{content_type_uid}/entries?locale={locale_code}&include_fallback=true`

The Get all entries request fetches the list of all the entries of a particular content type. It returns the content of each entry in JSON format.

Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

If an entry is not published in a specific locale, make use of the “include_fallback=true” query parameter to fetch the published content from its fallback locale.

**Note:** If the fallback language of the specified locale is the master language itself, this parameter won't be applicable.

To include the publish details in the response, make use of the include_publish_details=true parameter. This will return the publishing details of the entry in every environment along with the version number that is published in each of the environments.

You can add other [Queries](/docs/developers/apis/content-delivery-api#queries) to extend the functionality of this API call. Add a query parameter named query and provide your query (in JSON format) as the value.

**When using Delivery Tokens**

- Fetches ONLY published content
- Passing the environment as a query parameter is optional but recommended to ensure that the CDN delivers the most recent content
- Locale is optionalIf no locale is specified, it returns the entry from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized entry/entries
- If an entry is not localized, make use of the include_fallback=true query parameter to fetch the published content from its fallback locale

**Tip:** This request returns only the first 100 entries of the specified content type. Refer to the [Pagination](/docs/developers/apis/content-delivery-api#pagination) section to retrieve the rest of your entries in a paginated form.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the entries. The UID is often based on the title of the content type and it is unique across a stack.
  Default: `product`

#### Query Parameters

- **environment** (optional)
  Enter the environment scoped to your delivery token. For example, if your delivery token is scoped to the production environment, pass the value as production.
  Default: `production`
- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **include_fallback** (optional)
  Enter 'true' to include the published localized content from the fallback locale when the specified locale does not contain published content.
  Default: `true`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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




## Single Entry

### Get a single entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}`

The Get a single entry request fetches a particular entry of a content type.

**Tip**: To get a specific version, refer to the [Get a Single Entry](/docs/developers/apis/content-management-api/#get-a-single-entry) management API. This request returns only the latest version.

Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

If an entry is not published in a specific locale, make use of the “include_fallback=true” query parameter to fetch the published content from its fallback locale.

**Note:** If the fallback language of the specified locale is the master language itself, this parameter won't be applicable.

To include the publish details in the response, make use of the include_publish_details=true parameter. This will return the publishing details of the entry in every environment along with the version number that is published in each of the environments.

**Note**: To retrieve an entry from a particular branch, provide the branch_uid under the branch header.

You can add other [Queries](/docs/developers/apis/content-delivery-api#queries) to extend the functionality of this API call. Add a query parameter named query and provide your query (in JSON format) as the value.

**When using Delivery Tokens**

- Fetches ONLY published content
- Passing the environment as a query parameter is optional but recommended to ensure that the CDN delivers the most recent content
- Locale is optionalIf no locale is specified, it returns the entry from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized entry/entries
- If an entry is not localized, make use of the include_fallback=true query parameter to fetch the published content from its fallback locale

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the entries. The content type UID is often based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to fetch.
  Default: `blta250054cfa4f5aab`

#### Query Parameters

- **environment** (optional)
  Enter the environment scoped to your delivery token. For example, if your delivery token is scoped to the production environment, pass the value as production.
  Default: `production`
- **locale** (optional)
  Enter the code of the language of which you want to include the entries. Only the published localized entries will be displayed.
  Default: `en-us`
- **include_fallback** (optional)
  Enter 'true' to include the published localized content from the fallback locale when the specified locale does not contain published content.
  Default: `true`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
	"entry": {
		"locale": "en-us",
		"title": "Redmi Note 3",
		"url": "/mobiles/redmi-note-3",
		"description": "<p>Redmi Note 3 is really fast—flagship fast. The high-performance Snapdragon 650 processor uses ARM's flagship Cortex-A72 cores to launch apps in a split-second. Its next-gen Adreno 510 graphics processor delivers a fluid gaming experience. The hexa-core processor delivers up to 1.8GHz clock speed, supports dual-channel memory and eMMC 5.0 flash. Combined with MIUI 7's system-level speed optimizations, Redmi Note 3 responds to every touch in a snap.</p>",
		"images": [{
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
		"price_in_usd": 146,
		"brand": [{
			"uid": "blta2e0d2130eb86263",
			"_content_type_uid": "brand"
		}],
		"launch_date": "2016-03-09",
		"instock": true,
		"tags": [
			"redmi",
			"smart"
		],
		"size": 16,
		"color": "Gold",
		"additional_info": [{
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
		"bank_offers": [{
			"bank": [{
				"uid": "bltc00b46e648007a0c",
				"_content_type_uid": "bank"
			}],
			"card_type": [
				"Credit Card"
			],
			"discount_in_percentage": 12
		}],
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
	}
}
```




## Get information on embedded RTE objects

### Get information on embedded RTE objects

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}?&locale={locale_code}&include_embedded_items[]=BASE`

The Get information on embedded RTE objects request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.

If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the include_embedded_items[]=BASE query parameter.

You can view information about the embedded objects under the _embedded_items parameter in the JSON response body.

**Note**: Contentstack’s [Content Delivery SDKs](/docs/developers/fetch-content#fetch-content-using-content-delivery-sdks) help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the front end however required.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the entries. The content type UID is often based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to fetch.
  Default: `blta250054cfa4f5aab`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language of which you want to include the entries.
  Default: `en-us`
- **include_embedded_items[]** (optional)
  Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field.
  Default: `BASE`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "entry": {
        "title": "Sample One",
        "tags": [],
        "locale": "en-us",
        "uid": "blte16f93640bfa7f93",
        "created_by": "blt3cs27664f6b61df3",
        "updated_by": "blt3df27964f6b61df3",
        "created_at": "2022-11-30T05:43:01.357Z",
        "updated_at": "2022-12-02T07:26:27.624Z",
        "ACL": {},
        "_version": 4,
        "_in_progress": false,
        "_embedded_items": {
            "rich_text_editor": [
                {
                    "title": "Test Entry",
                    "json_rte": {
                        "type": "doc",
                        "attrs": {},
                        "uid": "40d2bcb7222f4712a27cbd906295b437",
                        "children": [
                            {
                                "type": "p",
                                "uid": "78ca555c91aa4bbbaa93fd13b1974649",
                                "attrs": {},
                                "children": [
                                    {
                                        "text": "Sample blog content."
                                    }
                                ]
                            }
                        ],
                        "_version": 2
                    },
                    "rich_text_editor": "<span>Sample blog content.</span>",
                    "modular_blocks": [
                        {
                            "block_1": {
                                "rich_text_editor": "<span>Sample blog content.</span>",
                                "_metadata": {
                                    "uid": "cs5a4e5837bbac8516"
                                }
                            }
                        }
                    ],
                    "tags": [],
                    "locale": "en-us",
                    "uid": "bltdf3d45019b5ef76c",
                    "created_by": "blt3cf27834e6b61df3",
                    "updated_by": "blt3cf37864e6b61df3",
                    "created_at": "2022-11-29T11:12:23.183Z",
                    "updated_at": "2022-12-02T07:25:54.847Z",
                    "_content_type_uid": "sample",
                    "ACL": {},
                    "_version": 2,
                    "_workflow": {
                        "uid": "blt1198186676a58926",
                        "updated_at": "2022-11-29T11:12:23.183Z",
                        "updated_by": "blt3cf27864e6b61df3",
                        "version": 1
                    },
                    "_in_progress": false
                },
                {
                    "uid": "blt3324e18f48c4d71c",
                    "created_at": "2022-08-17T06:11:07.365Z",
                    "updated_at": "2022-08-17T06:11:54.542Z",
                    "created_by": "blt3cf27864e6b61df3",
                    "updated_by": "blt3cf27864e6b61df3",
                    "content_type": "image/jpeg",
                    "file_size": "1161714",
                    "tags": [],
                    "filename": "1.jpg",
                    "url": "https://images.contentstack.io/v3/assets/blta8a5690107d35d6e/blt3324e18f48c4d71c/62fc867b9b71c064a0584583/1.jpg",
                    "ACL": [],
                    "parent_uid": null,
                    "_version": 2,
                    "title": "1.jpg",
                    "_content_type_uid": "sys_assets"
                }
            ]
        },
        "rich_text_editor": "<p>This is a sample article.</p><div class=\"embedded-entry redactor-component block-entry\" type=\"entry\" data-sys-entry-uid=\"bltdf3d97019a5ef76c\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample\" sys-style-type=\"block\"></div><p></p><figure class=\"embedded-asset\" content-type-uid=\"sys_assets\" type=\"asset\" data-sys-asset-filelink=\"https://images.contentstack.io/v3/assets/blta8a5690107d35d6e/blt3324e18f48c4d71c/62fc867b9b71c064a0584583/1.jpg\" data-sys-asset-uid=\"blt3324e18f48c4d71c\" data-sys-asset-filename=\"1.jpg\" data-sys-asset-contenttype=\"image/jpeg\" sys-style-type=\"display\"></figure>"
    }
}
```




## Get all entries with defined taxonomies

### Get all entries with defined taxonomies

**GET** `/taxonomies/entries?query={"taxonomies.taxonomy_uid": "term_uid"}`

The Get all entries with defined taxonomies request returns comprehensive information of all the entries associated with a specific taxonomy or term available in a particular stack in your organization.

To retrieve entries that match only taxonomy and term UID and belong to a specific content type.

```
query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": "_content_type_uid"
}
```

**Example**: If you want to match entries with the term red from the products content type.

```
query={
  "taxonomies.color" : "red",
  "_content_type_uid": "products"
}
```

To retrieve entries that match only taxonomy and term UID and belong to multiple content types.

```
query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": { "$in" : ["_content_type_uid1", "_content_type_uid2"] }
}
```

**Example**: If you want to match entries with the term red from the products or blogs content types.

```
query={
  "taxonomies.color" : "red",
  "_content_type_uid": { "$in" : ["products", "blogs"] }
}
```

**Note**: Refer to the [Taxonomy Queries](/docs/developers/apis/content-delivery-api#taxonomy-queries) section for more query filters.

#### Query Parameters

- **query** (optional)
  Provide a custom query in string format.
  Default: `{"taxonomies.taxonomy_uid" : "term_uid"}`
- **resolve_terms** (optional)
  If true, includes resolved term metadata (name, depth, order) for each taxonomy field.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "entries": [
    {
      "uid": "entry_uid_1",
      "title": "Summer Hat",
      "color": [
        {
          "uid": "yellow",
          "name": "Yellow",
          "depth": 1,
          "order": 2
        }
      ],
      "_content_type_uid": "accessories"
    }
  ]
}
```

