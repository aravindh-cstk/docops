---
title: "allUsers"
description: "The \"Get all users\" of a stack call fetches the list of all users of a particular stack."
url: "https://www.contentstack.com/java-management-stack-allusers"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## allUsers

The "Get all users" of a stack call fetches the list of all users of a particular stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.allUsers().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
