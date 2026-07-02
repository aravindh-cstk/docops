---
title: "removeParam"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-deliverytoken-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeParam

Sets header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Remove query parameters of request by key. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack().deliveryToken();
deliveryToken.removeParam("key");
```
