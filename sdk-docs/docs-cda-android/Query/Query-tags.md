---
title: "tags"
description: "The `tags` method includes the specified tags as a search criterion in the query to retrieve entries."
url: "https://www.contentstack.com/android-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags

The `tags` method includes the specified tags as a search criterion in the query to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String[] | Yes | — | Comma separated array of tags with which to search entries. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.tags(new String[] { "tag1", "tag2" });
```
