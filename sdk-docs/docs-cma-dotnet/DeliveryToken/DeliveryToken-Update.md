---
title: "Update"
description: "The Update request lets you update the details of a delivery token."
url: "https://www.contentstack.com/dotnet-management-deliverytoken-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update request lets you update the details of a delivery token.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").DeliveryToken("<DELIVERY_TOKEN_UID>").Update(model);
```
