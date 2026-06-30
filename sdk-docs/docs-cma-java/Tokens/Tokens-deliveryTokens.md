---
title: "deliveryTokens"
description: "You can use Delivery Tokens to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment."
url: "https://www.contentstack.com/java-management-tokens-deliverytokens"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## deliveryTokens

You can use Delivery Tokens to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tokenUid | String | No | — | The UID of the token that you want to retrieve. |

Returns:
Type
DeliveryToken

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack();
Call<ResponseBody> response = deliveryToken.deliveryTokens("tokenUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
