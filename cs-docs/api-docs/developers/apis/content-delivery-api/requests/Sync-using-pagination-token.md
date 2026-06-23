---
title: "Sync using pagination token"
description: GET /stacks/sync?pagination_token={pagination_token}
url: developers/apis/content-delivery-api/requests/sync-using-pagination-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-19
---

# Sync using pagination token

**GET** `/stacks/sync?pagination_token={pagination_token}`

When running the [Initial Synchronization](#initial-synchronization) or the [Subsequent Sync](#subsequent-sync) request, if the result of the sync (initial or subsequent) request exceeds 100 records you will get a pagination_token.

The Sync using pagination token request uses the pagination_token to retrieve the next batch of data (100 records) while performing the sync. You can reiterate the process until you get a sync_token.

**Note:** When executing the API request, pass the Delivery Token as the value to the access_token parameter.

## Query Parameters

- **pagination_token** (required)
  Enter the pagination token that you received in the response body of the previous sync process.
  Default: `cs45036e6b26c1396296ff34bb875480cd`

## Headers

- **api_key** (required)
  Enter the API key of stack of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Default: `main`

## Sample Response

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

