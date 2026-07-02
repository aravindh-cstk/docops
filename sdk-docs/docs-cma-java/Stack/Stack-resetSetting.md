---
title: "resetSetting"
description: "The \"Reset stack settings\" call resets your stack to default settings and, additionally, lets you add parameters to or modify the settings of an existing stack."
url: "https://www.contentstack.com/java-management-stack-resetsetting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## resetSetting

The "Reset stack settings" call resets your stack to default settings and, additionally, lets you add parameters to or modify the settings of an existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | String | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.resetSetting("requestBody").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
