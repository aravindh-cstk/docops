---
title: "fetch"
description: "The \"Get label\" call returns information about a particular label of a stack."
url: "https://www.contentstack.com/java-management-label-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get label" call returns information about a particular label of a stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
Call<ResponseBody> response = label.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
