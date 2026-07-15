---
title: "relativeUrls"
description: "includes the relative URLs of the assets in the response"
url: "https://www.contentstack.com/dart-assetquery-relativeurls"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## relativeUrls

includes the relative URLs of the assets in the response

No parameters.

Returns:
Type
void

import contentstack
final var stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment');final asset = stack.assetQuery()..relativeUrls();
