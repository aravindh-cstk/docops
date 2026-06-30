---
title: "find"
description: "The \"Get all custom fields\" request is used to get the information of all custom fields created in a stack."
url: "https://www.contentstack.com/java-management-extensions-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all custom fields" request is used to get the information of all custom fields created in a stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Extensions extension = contentstack.stack().extensions();
Call<ResponseBody> response = extension.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
