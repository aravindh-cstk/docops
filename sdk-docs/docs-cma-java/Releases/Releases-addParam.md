---
title: "addParam"
description: "The addParam method sets a query parameter for the release request."
url: "https://www.contentstack.com/java-management-releases-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The `addParam` method sets a query parameter for the release request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Key of the query parameter |
| value | Object | Yes | — | Value of the query parameter |

Returns:
Type
Void

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Release release = contentstack.stack().release();
release.addParam("key", value);
```
