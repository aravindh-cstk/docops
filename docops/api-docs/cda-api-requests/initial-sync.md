---
title: "Initial Sync"
description: /stacks/sync?init=true&content_type_uid={content_type_uid}&locale={locale_code}&start_from={iso_date}&type={type}
url: /initial-sync
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:06.839Z
updated_at: 2024-06-21T12:22:39.889Z
---

# Initial Sync

<p>The <span data-type='inlineCode'>Initial Sync</span>&nbsp;request syncs the entries and assets of a stack, published on a specific environment.</p><p>Set <span data-type='inlineCode'>init</span> to ‘true’ if you want to sync all the published entries and assets. This is usually used when the app does not have any content and you want to get all the content for the first time.</p><p class="note"><strong>Note:</strong> When executing the API request, pass the Delivery Token as the value to the <span data-type='inlineCode'>access_token</span> parameter.</p><p>Applicable parameters:<br /></p><div class="cs-table-wrapper"><div class="cs-table"><table><tbody><tr><td><strong>Parameter</strong></td><td><strong>Values</strong></td></tr><tr><td><span data-type='inlineCode'>content_type_uid</span></td><td>Enter content type UID. e.g., <span data-type='inlineCode'>products</span><br />This retrieves published entries of specified content type.</td></tr><tr><td><span data-type='inlineCode'>locale</span></td><td>Enter locale code. e.g., <span data-type='inlineCode'>en-us</span><br />This retrieves published entries of specific locale.</td></tr><tr><td><span data-type='inlineCode'>start_from</span></td><td>Enter the start date. e.g., <span data-type='inlineCode'>2018-08-14T00:00:00.000Z</span><br />This retrieves published entries starting from a specific date.</td></tr><tr><td><span data-type='inlineCode'>type</span></td><td>Applicable values are:<br /><ul><li><span data-type='inlineCode'>entry_published</span></li><li><span data-type='inlineCode'>asset_published</span></li><li><span data-type='inlineCode'>entry_unpublished</span></li><li><span data-type='inlineCode'>asset_unpublished</span></li><li><span data-type='inlineCode'>entry_deleted</span></li><li><span data-type='inlineCode'>asset_deleted</span></li><li><span data-type='inlineCode'>content_type_deleted</span></li></ul><p>If you do not specify any value, it will bring all published entries and published assets. You can pass multiple types as comma-separated values, for example, <span data-type='inlineCode'>entry_published,entry_unpublished,asset_published</span>.</p></td></tr></tbody></table></div></div><p class="note"><strong>Note</strong>: If you specify any value for <span data-type='inlineCode'>content_type_uid</span>, <span data-type='inlineCode'>locale</span>, <span data-type='inlineCode'>start_from</span>, or <span data-type='inlineCode'>type</span>, the values for these parameters will remain unchanged for all subsequent sync requests.<br /></p><p>Once you perform an initial sync, you will either get a <span data-type='inlineCode'>sync_token</span> or a <span data-type='inlineCode'>pagination_token</span> in response. These tokens don't have an expiry time.</p><p>You can use the <span data-type='inlineCode'>sync_token</span> later to perform subsequent sync, which fetches only new changes through delta updates.</p><p>If there are more than 100 records, you get a <span data-type='inlineCode'>pagination_token</span> in response. This token can be used to fetch the next batch of data. Read <a href="#sync-using-pagination-token" target="_self">Sync using pagination token</a> for more details.</p>

**API Endpoint**: `/stacks/sync?init=true&content_type_uid={content_type_uid}&locale={locale_code}&start_from={iso_date}&type={type}`

**Method**: `GET`

## Query Parameters

- **init** (required)
  <p>Enter ‘true’ to perform a complete sync of all your app data.</p>
- **content_type_uid** (optional)
  <p>Enter the content type UID, if you want to sync entries of specific content types.</p>
- **locale** (optional)
  <p>Enter the locale to retrieve and sync the content published on a specific locale.</p>
- **start_from** (optional)
  <p>Specify the start date, if you want to retrieve and sync data starting from a specific date.</p>
- **type** (optional)
  <p>Enter the type(s) of content you want to retrieve and sync. You can pass multiple types as comma-separated values.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack</p>
- **access_token** (required)
  <p>Enter the delivery token of the publishing environment. <a href="https://www.contentstack.com/developers/create-tokens/types-of-tokens#access-tokens" target="_blank">Read more</a>.</p>
- **branch** (optional)

## Response

```json
{
	"items": [{
			"type": "entry_published",
			"event_at": "2017-11-23T00:00:000Z",
			"content_type_uid": "Blog",
			"data": {
                                "uid": "1",
                                "locale": "en-us",
                                "title": "My First Blog"
                        }

		},
		{
			"type": "asset_published",
			"event_at": "2017-11-22T22:59:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "3",
				"locale": "en-us",
				"title": "My Third Blog Image",
				"filename": "Blog3.jpg"
			}
		},
		{
			"type": "entry_unpublished",
			"event_at": "2017-11-22T23:50:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "2",
				"locale": "en-us",
				"title": "My Second Blog"
			}
		}
	],
	"skip": 100,
	"limit": 100,
	"total_count": 300,
	"sync_token": "blt122334455667"
}
```

