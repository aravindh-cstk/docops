---
title: "includeCount"
description: "To retrieve the count of entries."
url: "https://www.contentstack.com/dart-assetquery-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeCount

To retrieve the count of entries.

No parameters.

import contentstack
var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');final asset = stack.assetQuery()..includeCount();
