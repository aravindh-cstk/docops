---
title: "FindAsync"
description: "The `FindAsync` Variant Groups returns a list of all variant groups linked to your stack."
url: "https://www.contentstack.com/dotnet-management-variantgroups-findasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FindAsync

The `FindAsync` Variant Groups returns a list of all variant groups linked to your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").VariantGroups().Find();
```
