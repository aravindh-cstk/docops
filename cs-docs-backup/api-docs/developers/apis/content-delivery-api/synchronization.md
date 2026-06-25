---
title: "CDA | Synchronization"
description: Use the Sync API to retrieve published content changes, deletions, and pagination tokens for incremental delivery updates.
url: https://www.contentstack.com/docs/developers/apis/content-delivery-api/synchronization
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CDA | Synchronization

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.

**Note:** When executing the following synchronization API Requests, you need to pass the Delivery Token as the value to the access_token parameter.

## Initial Synchronization

### Initial Sync

**GET** `/stacks/sync?init=true&content_type_uid={content_type_uid}&locale={locale_code}&start_from={iso_date}&type={type}`

The Initial Sync request syncs the entries and assets of a stack, published on a specific environment.

Set init to ‘true’ if you want to sync all the published entries and assets. This is usually used when the app does not have any content and you want to get all the content for the first time.

**Note:** When executing the API request, pass the Delivery Token as the value to the access_token parameter.

Applicable parameters:

| Parameter | Values |
| --- | --- |
| content_type_uid | Enter content type UID. e.g., productsThis retrieves published entries of specified content type. |
| locale | Enter locale code. e.g., en-usThis retrieves published entries of specific locale. |
| start_from | Enter the start date. e.g., 2018-08-14T00:00:00.000ZThis retrieves published entries starting from a specific date. |
| type | Applicable values are:entry_publishedasset_publishedentry_unpublishedasset_unpublishedentry_deletedasset_deletedcontent_type_deletedIf you do not specify any value, it will bring all published entries and published assets. You can pass multiple types as comma-separated values, for example, entry_published,entry_unpublished,asset_published. |

**Note**: If you specify any value for content_type_uid, locale, start_from, or type, the values for these parameters will remain unchanged for all subsequent sync requests.

Once you perform an initial sync, you will either get a sync_token or a pagination_token in response. These tokens don't have an expiry time.

You can use the sync_token later to perform subsequent sync, which fetches only new changes through delta updates.

If there are more than 100 records, you get a pagination_token in response. This token can be used to fetch the next batch of data. Read [Sync using pagination token](#sync-using-pagination-token) for more details.

#### Query Parameters

- **init** (required)
  Enter ‘true’ to perform a complete sync of all your app data.
  Default: `true`
- **content_type_uid** (optional)
  Enter the content type UID, if you want to sync entries of specific content types.
  Default: `for_synchronization_calls`
- **locale** (optional)
  Enter the locale to retrieve and sync the content published on a specific locale.
  Default: `en-us`
- **start_from** (optional)
  Specify the start date, if you want to retrieve and sync data starting from a specific date.
  Default: `2018-01-14T00:00:00.000Z`
- **type** (optional)
  Enter the type(s) of content you want to retrieve and sync. You can pass multiple types as comma-separated values.
  Default: `entry_published, entry_unpublished, asset_published`

#### Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the delivery token of the publishing environment. [Read more](https://www.contentstack.com/developers/create-tokens/types-of-tokens#access-tokens).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Default: `main`

#### Sample Response

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




## Sync using pagination token

### Sync using pagination token

**GET** `/stacks/sync?pagination_token={pagination_token}`

When running the [Initial Synchronization](#initial-synchronization) or the [Subsequent Sync](#subsequent-sync) request, if the result of the sync (initial or subsequent) request exceeds 100 records you will get a pagination_token.

The Sync using pagination token request uses the pagination_token to retrieve the next batch of data (100 records) while performing the sync. You can reiterate the process until you get a sync_token.

**Note:** When executing the API request, pass the Delivery Token as the value to the access_token parameter.

#### Query Parameters

- **pagination_token** (required)
  Enter the pagination token that you received in the response body of the previous sync process.
  Default: `cs45036e6b26c1396296ff34bb875480cd`

#### Headers

- **api_key** (required)
  Enter the API key of stack of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Default: `main`

#### Sample Response

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




## Subsequent Sync

### Subsequent Sync

**GET** `/stacks/sync?sync_token={sync_token}`

The Subsequent Sync request is used to retrieve the updated content (i.e., published or unpublished content, or any published content that has been deleted) since the last performed complete Sync.

In this API request, you need to provide the sync_token that you received in the last complete sync process. If there are more than 100 records, you will get a pagination_token instead. This token can be used to fetch the next batch of data. Refer the [Sync using pagination token](#sync-using-pagination-token) section for more details.

**Tip:** Once you have performed the Initial Sync process, you do not need to perform it again. For retrieving the subsequent delta changes, use the sync_token received either in the Initial Sync process or the previous Subsequent Sync requests to sync new changes. Also, when executing the API request, pass the Delivery Token as the value to the access_token parameter.

#### Query Parameters

- **sync_token** (required)
  Enter the sync token that you received in the response body of the previous completed Synchronization process to get the delta updates
  Default: `csb17b3a47ffa057cb0b9d938c59e13ed3`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Default: `main`

#### Sample Response

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

