---
title: "locale"
description: "Language code of which the entries need to be included. Only the entries published in this locale will be displayed"
url: "https://www.contentstack.com/python-query-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

Language code of which the entries need to be included. Only the entries published in this locale will be displayed

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
response = query.locale()
```
