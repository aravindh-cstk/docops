---
title: "entry"
description: "This function provide option to get single entry as well as all the entries"
url: "https://www.contentstack.com/dart-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

This function provide option to get single entry as well as all the entries

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | String | No | — | the entry uid |

Returns:
Type
void

```
import Contentstack
final stack = contentstack.Stack('apiKey','deliveryToken','environment');
final contentType = stack.contentType();
final entry = contentType.entry(entryUid: 'entry_uid');
```
