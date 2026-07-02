---
title: "updateSetting"
description: "The \"Add stack settings\" request lets you add additional settings for your existing stack."
url: "https://www.contentstack.com/java-management-stack-updatesetting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## updateSetting

The "Add stack settings" request lets you add additional settings for your existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body in JSONObject format. |

Returns:
Type
Stack

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.updateSetting(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
