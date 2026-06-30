---
title: "sync"
description: "The sync method syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates."
url: "https://www.contentstack.com/typescript-delivery-stack-sync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## sync

The sync method syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | ISyncType | ISyncStack | Yes | — | An object that supports ‘locale’, ‘start_date’, ‘content_type_uid’, and ‘type’ queries |
| recursive | boolean | Yes | — | Specifies if the sync should be recursive |

Returns:
Type
promise

**Example:**

- For initializing sync:Stack.sync();
- For initializing sync with entries of a specific locale:Stack.sync({ 'locale': 'en-us'});
- For initializing sync with entries published after a specific date:Stack.sync({ 'start_date': '2018-10-22'});
- For initializing sync with entries of a specific content type:Stack.sync({ 'content_type_uid': 'session'});
- For initializing sync with a specific type of content:Stack.sync({ 'type': 'entry_published'});
//Use the type parameter to get a specific type of content. Supports 'asset_published', 'entry_published', 'asset_unpublished', 'entry_unpublished', 'asset_deleted', 'entry_deleted', 'content_type_deleted'
- For fetching the next batch of entries using pagination token:Stack.sync({'pagination_token': '<page_tkn>'});
- For performing subsequent sync after initial sync:Stack.sync({'sync_token': '<sync_tkn>'});
