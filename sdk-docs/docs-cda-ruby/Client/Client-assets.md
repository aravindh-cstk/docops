---
title: "assets"
description: "Retrieves all assets of a stack by default."
url: "https://www.contentstack.com/ruby-client-assets"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assets

Retrieves all assets of a stack by default.

No parameters.

Returns:
Type
AssetCollection

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@assets = @stack.assets.fetch;
```
