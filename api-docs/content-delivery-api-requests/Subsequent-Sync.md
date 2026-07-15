---
title: "Subsequent Sync"
description: GET /stacks/sync?sync_token={sync_token}
url: developer-apis/content-delivery-api-requests/subsequent-sync
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-19
---

# Subsequent Sync

**GET** `/stacks/sync?sync_token={sync_token}`

The Subsequent Sync request is used to retrieve the updated content (i.e., published or unpublished content, or any published content that has been deleted) since the last performed complete Sync.

In this API request, you need to provide the sync_token that you received in the last complete sync process. If there are more than 100 records, you will get a pagination_token instead. This token can be used to fetch the next batch of data. Refer the [Sync using pagination token](#sync-using-pagination-token) section for more details.

**Tip:** Once you have performed the Initial Sync process, you do not need to perform it again. For retrieving the subsequent delta changes, use the sync_token received either in the Initial Sync process or the previous Subsequent Sync requests to sync new changes. Also, when executing the API request, pass the Delivery Token as the value to the access_token parameter.

## Query Parameters

- **sync_token** (required)
  Enter the sync token that you received in the response body of the previous completed Synchronization process to get the delta updates
  Default: `csb17b3a47ffa057cb0b9d938c59e13ed3`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
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
			"type": "entry_unpublished",
			"event_at": "2017-11-23T00:00:000Z",
			"content_type_uid": "Blog",
			"data": {
				"uid": "5",
				"locale": "en-us",
				"title": "My Fifth Blog"
			}
		},
		{
			"type": "asset_unpublished",
			"event_at": "2017-11-23T00:00:000Z",
			"data": {
				"uid": "5",
				"locale": "en-us",
				"title": "My Fifth Blog Image",
				"filename": "Blog6.img"
			}
		},
		{
			"type": "content_type_deleted",
			"event_at": "2017-11-22T00:00:000Z",
			"content_type_uid": "Blog Suggestions",
			"data": {}
		}
	],
	"skip": 0,
	"limit": 3,
	"total_count": 3,
	"sync_token": "blt1223344556677"
}
```

