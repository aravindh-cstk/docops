---
title: "includeFallback"
description: "Retrieve the published content of the fallback locale if an entry is not localized in specified locale."
url: "https://www.contentstack.com/dart-assetquery-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

Retrieve the published content of the fallback locale if an entry is not localized in specified locale.

No parameters.

Returns:
Type
void

import contentstack

final var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');
final asset = stack.assetQuery()..includeFallback();
