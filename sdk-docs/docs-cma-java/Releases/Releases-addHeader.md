---
title: "addHeader "
description: "The `addHeader` method sets a header for the release request."
url: "https://www.contentstack.com/java-management-releases-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader 

The `addHeader` method sets a header for the release request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Key of the header |
| value | Object | Yes | — | Value of the header |

Returns:
Type
Void

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Release release = contentstack.stack().release();
release.addHeader("key", value);
```
