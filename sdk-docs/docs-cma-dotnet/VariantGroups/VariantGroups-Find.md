---
title: "Find"
description: "The Find Variant Groups returns a list of all variant groups linked to your stack."
url: "https://www.contentstack.com/dotnet-management-variantgroups-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Find

The Find Variant Groups returns a list of all variant groups linked to your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").VariantGroups().Find();
```
