---
title: "fetch"
description: "The \"Get a single environment\" call returns more details about the specified environment of a stack. When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-environment-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get a single environment" call returns more details about the specified environment of a stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Environment environment = contentstack.stack().environment();
Call<ResponseBody> response = environment.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
