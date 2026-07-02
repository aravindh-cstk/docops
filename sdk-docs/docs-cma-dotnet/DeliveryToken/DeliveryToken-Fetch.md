---
title: "Fetch"
description: "The Fetch function returns the details of all the delivery tokens created in a stack."
url: "https://www.contentstack.com/dotnet-management-deliverytoken-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch

The Fetch function returns the details of all the delivery tokens created in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Tokens;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").DeliveryToken("<DELIVERY_TOKEN_UID>").Fetch();
```
