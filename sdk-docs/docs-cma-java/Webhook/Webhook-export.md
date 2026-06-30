---
title: "export"
description: ""
url: "https://www.contentstack.com/java-management-webhook-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.export().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
