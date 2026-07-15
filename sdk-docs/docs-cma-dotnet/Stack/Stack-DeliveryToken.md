---
title: "DeliveryToken"
description: "You can use DeliveryToken to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment."
url: "https://www.contentstack.com/dotnet-management-stack-deliverytoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeliveryToken

You can use DeliveryToken to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, delivery token uid. |

Returns:
Type
Environment

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
DeliveryToken deliveryToken = client.stack("<API_KEY>").DeliveryToken("<UID>");
```
