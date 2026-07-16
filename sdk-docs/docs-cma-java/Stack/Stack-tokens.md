---
title: "tokens"
description: "Contentstack provides different types of tokens to authorize API requests. You can use Delivery Tokens to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment. To authenticate Content Management API (CMA) requests over your stack content, you can use Management Tokens. Delivery tokens provide read-only access to the associated environments, while management tokens provide read-write access to the content of your stack. Use these tokens along with the stack API key to make authorized API requests"
url: "https://www.contentstack.com/java-management-stack-tokens"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tokens

Contentstack provides different types of tokens to authorize API requests. You can use Delivery Tokens to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment. To authenticate Content Management API (CMA) requests over your stack content, you can use Management Tokens.

Delivery tokens provide read-only access to the associated environments, while management tokens provide read-write access to the content of your stack. Use these tokens along with the stack API key to make authorized API requests

No parameters.

Returns:
Type
Tokens

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.tokens().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
