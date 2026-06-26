---
title: "addHeader"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-publishqueue-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader

Sets header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | H eader key for the request. |
| value | Object | Yes | — | H eader value for the request. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
PublishQueue publishQueue = contentstack.stack().publishQueue();
publishQueue.addHeader("key", value);
```
