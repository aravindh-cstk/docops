---
title: "transferOwnership"
description: "The Transfer stack ownership to other users calls sends the specified user an email invitation for accepting the ownership of a particular stack. Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have permission on the stack."
url: "https://www.contentstack.com/java-management-stack-transferownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## transferOwnership

The Transfer stack ownership to other users calls sends the specified user an email invitation for accepting the ownership of a particular stack.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have permission on the stack.

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
Call<ResponseBody> response = stack.transferOwnership(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
