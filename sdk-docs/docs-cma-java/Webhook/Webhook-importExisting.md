---
title: "importExisting"
description: "The \"Import an Existing Webhook\" request will allow you to update the details of an existing webhook."
url: "https://www.contentstack.com/java-management-webhook-importexisting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## importExisting

The "Import an Existing Webhook" request will allow you to update the details of an existing webhook.

No parameters.

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.importExisting().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
