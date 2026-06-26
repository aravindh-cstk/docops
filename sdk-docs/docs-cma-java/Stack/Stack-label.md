---
title: "label"
description: "Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together."
url: "https://www.contentstack.com/java-management-stack-label"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## label

Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| labelUid | String | No | — | The label. |

Returns:
Type
Label

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.label("labelUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
