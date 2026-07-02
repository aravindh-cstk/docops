---
title: "locale"
description: "Contentstack has a sophisticated, multilingual capability. It allows you to create and publish entries in any language. This feature allows you to set up multilingual websites and cater to a wide variety of audiences by serving content in their local language(s)."
url: "https://www.contentstack.com/java-management-stack-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

Contentstack has a sophisticated, multilingual capability. It allows you to create and publish entries in any language. This feature allows you to set up multilingual websites and cater to a wide variety of audiences by serving content in their local language(s).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| code | String | No | — | The locale code. |

Returns:
Type
Locale

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.locale("code").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
