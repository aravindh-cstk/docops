---
title: "delete"
description: "The \"Delete role\" call deletes an existing role from your stack."
url: "https://www.contentstack.com/java-management-roles-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The "Delete role" call deletes an existing role from your stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Roles roles = contentstack.stack().roles();
Call<ResponseBody> response = roles.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
