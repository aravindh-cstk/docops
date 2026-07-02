---
title: "share"
description: "The Share a stack call shares a stack with the specified user to collaborate on the stack."
url: "https://www.contentstack.com/java-management-stack-share"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## share

The Share a stack call shares a stack with the specified user to collaborate on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | String | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.share("requestBody").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
