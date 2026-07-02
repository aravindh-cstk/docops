---
title: "includeReference"
description: "Include Reference: When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry."
url: "https://www.contentstack.com/dart-entry-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

Include Reference: When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceFieldUid | String | Yes | — | referenceFieldUid Key who has reference to some other class object |
| includeReferenceField | Include | No | — | includeReference provides three options, none, only and except |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.includeReference("referenceFieldUid", IncludeReference.none(fieldUidList: null));
```
