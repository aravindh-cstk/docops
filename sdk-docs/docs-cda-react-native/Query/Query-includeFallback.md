---
title: "includeFallback"
description: "Include the fallback locale publish content, if specified locale content is not publish."
url: "https://www.contentstack.com/js-query-include-fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

Include the fallback locale publish content, if specified locale content is not publish.

No parameters.

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
Stack.ContentType('content_type_uid;).Query().includeFallback().fetch();
```
