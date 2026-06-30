---
title: "setting"
description: "The \"Get stack settings\" call retrieves the configuration settings of an existing stack."
url: "https://www.contentstack.com/java-management-stack-setting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setting

The "Get stack settings" call retrieves the configuration settings of an existing stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.setting().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
