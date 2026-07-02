---
title: "environment"
description: "Enter the name of the environment of which the entries needs to be included"
url: "https://www.contentstack.com/python-entry-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## environment

Enter the name of the environment of which the entries needs to be included

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.environment('environment_name')
```
