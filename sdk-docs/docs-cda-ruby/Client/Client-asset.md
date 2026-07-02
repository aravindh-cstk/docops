---
title: "asset"
description: "Retrieve a single asset with its UID."
url: "https://www.contentstack.com/ruby-client-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset

Retrieve a single asset with its UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | The asset uid |

Returns:
Type
Asset

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@asset = @stack.asset("asset_uid").fetch;
```
