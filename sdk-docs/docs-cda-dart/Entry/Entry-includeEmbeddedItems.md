---
title: "includeEmbeddedItems"
description: "Include Embedded Objects (Entries and Assets) along with entry/entries details"
url: "https://www.contentstack.com/dart-entry-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeEmbeddedItems

Include Embedded Objects (Entries and Assets) along with entry/entries details

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.includeEmbeddedItems();
```
