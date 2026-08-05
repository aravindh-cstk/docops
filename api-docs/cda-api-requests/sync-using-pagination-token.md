---
title: "Sync using pagination token"
description: /stacks/sync?pagination_token={pagination_token}
url: /sync-using-pagination-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.146Z
updated_at: 2026-02-19T10:08:58.075Z
---

# Sync using pagination token

<p>When running the <a href="#initial-synchronization">Initial Synchronization</a> or the <a href="#subsequent-sync">Subsequent Sync</a> request, if the result of the&nbsp;sync (initial or subsequent) request exceeds 100 records you will get a <span data-type="inlineCode">pagination_token</span>.</p>
<p>The <span data-type="inlineCode">Sync using pagination token</span> request uses the <span data-type="inlineCode">pagination_token</span> to retrieve the next batch of data (100 records) while performing the sync. You can reiterate the process until you get a <span data-type="inlineCode">sync_token</span>.</p>
<p class="note"><strong>Note:</strong> When executing the API request, pass the Delivery Token as the value to the <span data-type="inlineCode">access_token</span> parameter.</p>

**API Endpoint**: `/stacks/sync?pagination_token={pagination_token}`

**Method**: `GET`

## Query Parameters

- **pagination_token** (required)
  <p>Enter the pagination token that you received in the response body of the previous sync process.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of stack of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
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
			"type": "entry_published",
			"event_at": "2017-11-22T23:50:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "2",
				"locale": "en-us",
				"title": "My Second Blog"
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
			"type": "entry_published",
			"event_at": "2017-12-23T00:00:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "4",
				"locale": "en-us",
				"title": "My Fourth Blog"
			}

		},
		{
			"type": "asset_published",
			"event_at": "2017-12-22T22:59:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "4",
				"locale": "en-us",
				"title": "My Fourth Blog Image",
				"filename": "Blog4.jpg"
			}
		}
	],
	"skip": 100,
	"limit": 100,
	"total_count": 300,
	"pagination_token": "blt122334455667"
}
```

