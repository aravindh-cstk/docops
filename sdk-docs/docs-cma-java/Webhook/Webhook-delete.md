---
title: "delete"
description: "The \"Delete webhook\" call deletes an existing webhook from a stack."
url: "https://www.contentstack.com/java-management-webhook-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The "Delete webhook" call deletes an existing webhook from a stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
