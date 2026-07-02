---
title: "update"
description: "The \"Update delivery token\" request lets you update the details of a delivery token. In the Request Body, you need to pass the updated details of the delivery token in JSON format. The details include the updated name, description, and/or the environment of the delivery token."
url: "https://www.contentstack.com/java-management-deliverytoken-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update delivery token" request lets you update the details of a delivery token.

In the Request Body, you need to pass the updated details of the delivery token in JSON format. The details include the updated name, description, and/or the environment of the delivery token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Thee body should be a JSON Object. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack().deliveryToken();
Call<ResponseBody> response = deliveryToken.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
