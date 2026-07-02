---
title: "update"
description: "The Update stack call lets you update the name and description of an existing stack."
url: "https://www.contentstack.com/java-management-stack-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update stack call lets you update the name and description of an existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body in JSONObject format. |

Returns:
Type
Stack

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
