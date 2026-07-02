---
title: "find"
description: "The \"Find label\" call fetches all the existing labels of the stack. When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account. Using addParam(String, Object), you can add queries to extend the functionality of this API call. Under the URI Parameters section, insert a parameter named query and provide a query in JSON format as the value."
url: "https://www.contentstack.com/java-management-label-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Find label" call fetches all the existing labels of the stack.

When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

Using addParam(String, Object), you can add queries to extend the functionality of this API call. Under the URI Parameters section, insert a parameter named query and provide a query in JSON format as the value.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
Call<ResponseBody> response = label.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
