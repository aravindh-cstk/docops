---
title: "includeBranch"
description: "Included branch in the response."
url: "https://www.contentstack.com/dart-assetquery-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

Included branch in the response.

No parameters.

Returns:
Type
void

import contentstack
final var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');
final asset = stack.assetQuery()..includeBranch();
