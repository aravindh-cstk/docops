---
title: "version"
description: "Specify the version number of the asset that you wish to retrieve."
url: "https://www.contentstack.com/dart-assetquery-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## version

Specify the version number of the asset that you wish to retrieve.

No parameters.

Returns:
Type
void

import contentstack
final var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');
final asset = stack.assetQuery()..version(3);
