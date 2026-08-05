---
title: "delete"
description: "\"Delete environment\" call will delete an existing publishing environment from your stack. When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-environment-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

"Delete environment" call will delete an existing publishing environment from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Environment environment = contentstack.stack().environment();
Call<ResponseBody> response = environment.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
