---
title: "delete"
description: "The \"Delete label\" call is used to delete a specific label. When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account"
url: "https://www.contentstack.com/java-management-label-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete label" call is used to delete a specific label.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
Call<ResponseBody> response = label.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
