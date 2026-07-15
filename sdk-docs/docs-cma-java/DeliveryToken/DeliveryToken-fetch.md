---
title: "fetch"
description: "The \"Get a single delivery token\" request returns the details of all the delivery tokens created in a stack."
url: "https://www.contentstack.com/java-management-deliverytoken-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single delivery token" request returns the details of all the delivery tokens created in a stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
DeliveryToken deliveryToken = contentstack.stack().deliveryToken();
Call<ResponseBody> response = deliveryToken.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
