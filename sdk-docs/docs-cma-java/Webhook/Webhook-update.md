---
title: "update"
description: "The \"Update webhook\" request allows you to update the details of an existing webhook in the stack."
url: "https://www.contentstack.com/java-management-webhook-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update webhook" request allows you to update the details of an existing webhook in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The body should be of a JSONObject type. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
