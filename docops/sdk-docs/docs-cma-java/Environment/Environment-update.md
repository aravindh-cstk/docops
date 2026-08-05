---
title: "update"
description: "The \"Update environment\" call will update the details of an existing publishing environment for a stack. When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-environment-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update environment" call will update the details of an existing publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Environment environment = contentstack.stack().environment();
Call<ResponseBody> response = environment.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
