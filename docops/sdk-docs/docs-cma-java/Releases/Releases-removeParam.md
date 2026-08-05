---
title: "removeParam"
description: "The `removeParam` method removes a previously set query parameter from the release request."
url: "https://www.contentstack.com/java-management-releases-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeParam

The `removeParam` method removes a previously set query parameter from the release request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Key of the query parameter to remove |

Returns:
Type
Void

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Release release = contentstack.stack().release();
release.removeParam("key");
```
