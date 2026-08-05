---
title: "find"
description: "The \"Get all environments\" call fetches the list of all environments available in a stack. You can add queries to extend the functionality of this API call."
url: "https://www.contentstack.com/java-management-environment-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all environments" call fetches the list of all environments available in a stack.

You can add queries to extend the functionality of this API call.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Environment environment = contentstack.stack().environment();
Call<ResponseBody> response = environment.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
