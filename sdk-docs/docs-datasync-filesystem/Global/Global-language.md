---
title: "language"
description: "The `language` method sets the locale to be used when querying entries."
url: "https://www.contentstack.com/datasync-filesystem-global-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## language

The `language` method sets the locale to be used when querying entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| languageCode | string | Yes | — | Language to query on |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('blog').entries().language('fr-fr').find();
```
