---
title: "Get a single entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}
url: /get-a-single-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:03.184Z
updated_at: 2026-06-05T12:22:51.202Z
---

# Get a single entry

<p>The <span data-type='inlineCode'>Get a single entry</span> request fetches a particular entry of a content type.</p><p class="tip"><strong>Tip</strong>: To get a specific version, refer to the <a href="/docs/developers/apis/content-management-api/#get-a-single-entry" target="_self">Get a Single Entry</a> management API. This request returns only the latest version.</p><p>Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.</p><p>You will find the entry metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre>"_metadata": {<br />    "extensions": {<br />        "{extension_uid}": [{<br />            "image_copyrights": "Contentstack Branding",<br />            "scope": "local"<br />        }]<br />    }<br />}<br /></pre><p>If an entry is not published in a specific locale, make use of the “<span data-type='inlineCode'>include_fallback=true</span>” query parameter to fetch the published content from its fallback locale.</p><p class="note"><strong>Note:</strong> If the fallback language of the specified locale is the master language itself, this parameter won't be applicable.</p><p>To include the publish details in the response, make use of the <span data-type='inlineCode'>include_publish_details=true</span> parameter. This will return the publishing details of the entry in every environment along with the version number that is published in each of the environments.</p><p class="note"><strong>Note</strong>: To retrieve an entry from a particular branch, provide the <span class="code">branch_uid</span> under the branch header.</p><p>You can add other <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> to extend the functionality of this API call. Add a query parameter named query and provide your query (in JSON format) as the value.</p><p><strong>When using Delivery Tokens</strong></p><ul><li>Fetches ONLY published content</li><li><p>Passing the environment as a query parameter is optional but recommended to ensure that the CDN delivers the most recent content</p></li><li>Locale is <strong>optional</strong><ul><li>If no locale is specified, it returns the entry from the master locale</li><li>If you specify a locale in the query, it returns the latest published version of the&nbsp;localized entry/entries</li><li>If an entry is not localized, make use of the <span data-type='inlineCode'>include_fallback=true</span> query parameter to fetch the published content from its fallback locale</li></ul></li></ul>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you want to retrieve the entries. The content type UID is often based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you want to fetch.&nbsp;</p>

## Query Parameters

- **environment** (optional)
  <p>Enter the environment scoped to your delivery token. For example, if your delivery token is scoped to the production environment, pass the value as <span class="code">production</span>.</p>
- **locale** (optional)
  <p>Enter the code of the language of which you want to include&nbsp;the entries. Only the published localized entries will be displayed.</p>
- **include_fallback** (optional)
  <p>Enter 'true' to include the published localized content from the fallback locale when the specified locale does not contain published content.</p>
- **include_branch** (optional)
  <p>Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

