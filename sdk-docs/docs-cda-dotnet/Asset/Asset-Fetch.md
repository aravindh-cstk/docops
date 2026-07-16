---
title: "Fetch"
description: "fetches the latest version of a specific asset of a particular stack."
url: "https://www.contentstack.com/dotnet-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

fetches the latest version of a specific asset of a particular stack.

No parameters.

Returns:
Type
Task<Asset>

```
using Contentstack.Core; 
using Contentstack.Core.Models;
ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").Fetch();
```
