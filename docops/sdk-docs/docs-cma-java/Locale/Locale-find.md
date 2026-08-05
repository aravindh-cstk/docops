---
title: "find"
description: "This call fetches the list of all languages (along with the language codes) available for a stack. When executing the API call, under the Header section, you need to enter the authtoken that you receive after logging into your account. You can add queries to extend the functionality of this API call. Under the URI Parameters section, insert a parameter named query and provide a query in JSON format as the value."
url: "https://www.contentstack.com/java-management-locale-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

This call fetches the list of all languages (along with the language codes) available for a stack.

When executing the API call, under the Header section, you need to enter the authtoken that you receive after logging into your account.

You can add queries to extend the functionality of this API call. Under the URI Parameters section, insert a parameter named query and provide a query in JSON format as the value.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
