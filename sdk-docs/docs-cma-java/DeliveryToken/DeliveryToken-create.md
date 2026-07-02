---
title: "create"
description: "The Create delivery token request creates a delivery token in the stack. In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and environment of the delivery token."
url: "https://www.contentstack.com/java-management-deliverytoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create delivery token request creates a delivery token in the stack.

In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and environment of the delivery token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body to create a delivery token. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack().deliveryToken();
Call<ResponseBody> response = deliveryToken.create(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
