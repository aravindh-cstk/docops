---
title: "includeDimension"
description: "include the dimensions (height and width) of the image in the response."
url: "https://www.contentstack.com/dart-assetquery-includedimension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeDimension

include the dimensions (height and width) of the image in the response.

No parameters.

Returns:
Type
void

import contentstack

final var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');final asset = stack.assetQuery()..includeCount();
