---
title: "alias"
description: "An alias acts as a pointer to a particular branch. You can specify the alias ID in your frontend code to pull content from the target branch associated with an alias."
url: "https://www.contentstack.com/java-management-stack-alias"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## alias

An alias acts as a pointer to a particular branch. You can specify the alias ID in your frontend code to pull content from the target branch associated with an alias.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| aliasUid | String | No | — | The unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the Get all aliases call to retrieve the UID of an alias |

Returns:
Type
alias

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.alias("aliasUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
