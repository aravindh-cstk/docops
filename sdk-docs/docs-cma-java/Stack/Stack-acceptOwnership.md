---
title: "acceptOwnership"
description: "The \"Accept stack owned by another user\" call allows a user to accept the ownership of a particular stack via an email invitation. Once the user accepts the invitation by clicking the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack."
url: "https://www.contentstack.com/java-management-stack-acceptownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## acceptOwnership

The "Accept stack owned by another user" call allows a user to accept the ownership of a particular stack via an email invitation.

Once the user accepts the invitation by clicking the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ownershipToken | String | Yes | — | The ownership token received via email by another user. |

Returns:
Type
the stack

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.acceptOwnership("ownershipToken").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
