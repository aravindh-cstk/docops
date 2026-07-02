---
title: "includeReference"
description: "When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry"
url: "https://www.contentstack.com/dart-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceFieldUid | String | Yes | — | Key who has reference to some other class object |
| includeReferenceField | IncludeReference | No | — | provides three options, none, only and except i.e accepts list of fieldUid |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.includeReference("referenceFieldUid", IncludeReference.except(fieldUidList: fieldUid));;
```
