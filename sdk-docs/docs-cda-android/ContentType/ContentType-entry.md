---
title: "entry"
description: "The entry method retrieves a specific entry, which is an actual piece of content created using one of the defined content types."
url: "https://www.contentstack.com/android-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

The `entry` method retrieves a specific entry, which is an actual piece of content created using one of the defined content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entryUid | String | Yes | — | TThe unique ID of the entry that you want to fetch |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.entry("entryUid")
```
