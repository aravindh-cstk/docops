---
title: "delete"
description: "The \"Delete language\" call deletes an existing language from your stack. When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-locale-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete language" call deletes an existing language from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.delete().execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```
