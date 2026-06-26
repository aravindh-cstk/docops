---
title: "tags"
description: "Include tags with which to search entries"
url: "https://www.contentstack.com/java-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags

Include tags with which to search entries

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String[] | Yes | — | Comma separated array of tags with which to search entries. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.tags(new String[] { "tag1", "tag2" });
```
