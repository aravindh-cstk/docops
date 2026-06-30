---
title: "sync"
description: "Syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates"
url: "https://www.contentstack.com/php-stack-sync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## sync

Syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.init | boolean | No | — | initializing sync |
| param.locale | string | No | — | initializing sync with entries of a specific locale |
| param.start_date | string | No | initializing sync with entries published after a specific date |  |
| param.content_type_uid | string | No | — | initializing sync with entries of a specific content type |
| param.type | string | No | — | Use the type parameter to get a specific type of content.Supports 'asset_published', 'entry_published', 'asset_unpublished', 'entry_unpublished', 'asset_deleted', 'entry_deleted', 'content_type_deleted' |
| param.pagination_token | string | No | — | Fetching the next batch of entries using pagination token |
| param.sync_token | string | No | — | Performing subsequent sync after initial sync |

Returns:
Type
Promise

**For initializing sync:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true});
```

**For initializing sync with entries of a specific locale:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true, 'locale'=> 'en-us'});
```

**For initializing sync with entries published after a specific date:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true, 'start_date'=> '2018-10-22'});
```

**For initializing sync with entries of a specific content type:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true, 'content_type_uid'=> 'session'});
```

**For ****initializing sync with ****specific type:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true, 'type'=> 'entry_published'});
```

**For fetching the next batch of entries using pagination token:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'pagination_token'=> '<page_token>'});
```

** For performing subsequent sync after initial sync:**

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'sync_token'=> '<sync_token>'})
```
