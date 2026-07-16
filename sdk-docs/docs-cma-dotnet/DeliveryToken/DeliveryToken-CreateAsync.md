---
title: "CreateAsync"
description: "The Create request is used to create a delivery token in the stack."
url: "https://www.contentstack.com/dotnet-management-deliverytoken-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateAsync

The Create request is used to create a delivery token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | DeliveryTokenModel | Yes | — | Delivery Token Model for creating delivery token. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Tokens;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
DeliveryTokenModel model = new DeliveryTokenModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").DeliveryToken().CreateAsync(model);
```
