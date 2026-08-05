---
title: "extensions"
description: "Extensions let you create custom fields and widgets to customize Contentment's default UI and behavior. Read more about Extensions."
url: "https://www.contentstack.com/java-management-stack-extensions"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## extensions

Extensions let you create custom fields and widgets to customize Contentment's default UI and behavior. Read more about Extensions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| customFieldUid | String | No | — | The customField Uid. |

Returns:
Type
Instance of Extensions

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.extensions("customFieldUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
