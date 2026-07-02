---
title: "create"
description: "The \"Add an environment call\" will add a publishing environment for a stack. When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-environment-token-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The "Add an environment call" will add a publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Environment environment = contentstack.stack().environment();
Call<ResponseBody> response = environment.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
