---
title: "version"
description: "When no version is specified, it returns the latest version, To retrieve a specific version, specify the version number under this parameter. In such a case, DO NOT specify any environment"
url: "https://www.contentstack.com/python-entry-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version

When no version is specified, it returns the latest version, To retrieve a specific version, specify the version number under this parameter. In such a case, DO NOT specify any environment

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.version(number)
```
