---
title: "Initial Sync"
description: GET /stacks/sync?init=true&content_type_uid={content_type_uid}&locale={locale_code}&start_from={iso_date}&type={type}
url: developers/apis/content-delivery-api/requests/initial-sync
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-21
---

# Initial Sync

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

## Query Parameters

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

## Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the delivery token of the publishing environment. [Read more](https://www.contentstack.com/developers/create-tokens/types-of-tokens#access-tokens).
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

