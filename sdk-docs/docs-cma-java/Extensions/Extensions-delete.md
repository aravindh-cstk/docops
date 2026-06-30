---
title: "delete"
description: "The \"Delete custom field\" request deletes a specific custom field."
url: "https://www.contentstack.com/java-management-extensions-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The "Delete custom field" request deletes a specific custom field.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Extensions extension = contentstack.stack().extensions();
Call<ResponseBody> response = extension.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
