---
title: "include_reference_content_type_uid"
description: "This method also includes the content type UIDs of the referenced entries returned in the response"
url: "https://www.contentstack.com/python-query-include_reference_content_type_uid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_reference_content_type_uid

This method also includes the content type UIDs of the referenced entries returned in the response

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.include_reference_content_type_uid()
```
