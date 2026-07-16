---
title: "skip"
description: "The number of objects to skip before returning any. skip\\_count No of objects to skip from returned objects"
url: "https://www.contentstack.com/python-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skip

The number of objects to skip before returning any. skip_count No of objects to skip from returned objects

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query.skip(count)
```
