---
title: "IncludeBranch"
description: "Include branch for publish content."
url: "https://www.contentstack.com/dotnet-asset-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeBranch

Include branch for publish content.

No parameters.

Returns:
Type
Asset

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").IncludeBranch().Fetch();
```
