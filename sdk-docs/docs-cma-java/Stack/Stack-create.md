---
title: "create"
description: "The \"Create stack call\" creates a new stack in your Contentstack account."
url: "https://www.contentstack.com/java-management-stack-ceate"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The "Create stack call" creates a new stack in your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationUid | String | Yes | — | The organization uid. |
| requestBody | JSONObject | Yes | — | The request body should be in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.create("organizationUid", requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
