---
title: "unshare"
description: "The \"Unshare stack\" removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account."
url: "https://www.contentstack.com/java-management-stack-unshare"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## unshare

The "Unshare stack" removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body in JSONObject format. |

Returns:
Type
Stack

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.unshare(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
