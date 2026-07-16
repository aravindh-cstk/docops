---
title: "fetch"
description: "The \"Get webhook\" request returns comprehensive information on a specific webhook."
url: "https://www.contentstack.com/java-management-webhook-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get webhook" request returns comprehensive information on a specific webhook.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
