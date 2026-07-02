---
title: "fetch"
description: "Fetch a particular asset using uid."
url: "https://www.contentstack.com/ruby-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetch a particular asset using uid.

No parameters.

Returns:
Type
Asset

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@asset = @stack.asset("asset_uid").fetch;
```
