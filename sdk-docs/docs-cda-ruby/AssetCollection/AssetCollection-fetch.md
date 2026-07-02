---
title: "fetch"
description: "Fetch assets uploaded to the Contentstack."
url: "https://www.contentstack.com/ruby-assetcollection-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetch assets uploaded to the Contentstack.

No parameters.

Returns:
Type
AssetCollection

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@assets = @stack.assets.fetch;
```
