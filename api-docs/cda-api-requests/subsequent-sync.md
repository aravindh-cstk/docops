---
title: "Subsequent Sync"
description: /stacks/sync?sync_token={sync_token}
url: /subsequent-sync
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.874Z
updated_at: 2026-02-19T12:42:37.312Z
---

# Subsequent Sync

<p>The <span data-type="inlineCode">Subsequent Sync</span> request is used to retrieve the updated content (i.e., published or unpublished content, or any published content that has been deleted) since the last performed complete Sync.</p>
<p>In this API request, you need to provide the <span data-type="inlineCode">sync_token</span> that you received in the last complete sync process. If there are more than 100 records, you will get a <span data-type="inlineCode">pagination_token</span> instead. This token can be used to fetch the next batch of data. Refer the <a href="#sync-using-pagination-token">Sync using pagination token</a> section for more details.</p>
<p class="tip"><strong>Tip:</strong> Once you have performed the Initial Sync process, you do not need to perform it again. For retrieving the subsequent delta changes, use the <span data-type="inlineCode">sync_token</span> received either in the Initial Sync process or the previous <span data-type="inlineCode">Subsequent Sync</span> requests to sync new changes. Also, when executing the API request, pass the Delivery Token as the value to the <span data-type="inlineCode">access_token</span> parameter.</p>

**API Endpoint**: `/stacks/sync?sync_token={sync_token}`

**Method**: `GET`

## Query Parameters

- **sync_token** (required)
  <p>Enter the sync token that you received in the response body of the previous completed Synchronization process to get the delta updates</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)

## Response

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

