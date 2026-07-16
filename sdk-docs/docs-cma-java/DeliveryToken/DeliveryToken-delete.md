---
title: "delete"
description: "The \"Delete delivery token\" request deletes a specific delivery token."
url: "https://www.contentstack.com/java-management-deliverytoken-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The "Delete delivery token" request deletes a specific delivery token.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack().deliveryToken();
Call<ResponseBody> response = deliveryToken.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
