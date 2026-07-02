---
title: "fetch"
description: "The \"Get a language\" call returns information about a specific language available on the stack. When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-locale-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get a language" call returns information about a specific language available on the stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
