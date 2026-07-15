---
title: "include_reference"
description: "When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry"
url: "https://www.contentstack.com/python-query-include_reference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_reference

When you fetch an entry of a content type that has a reference field, by default, the content of the referred entry is not fetched. It only fetches the UID of the referred entry, along with the content of the specified entry

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.include_reference()
```
