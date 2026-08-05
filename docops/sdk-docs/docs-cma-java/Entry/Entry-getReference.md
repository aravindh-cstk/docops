---
title: "getReference"
description: "The \"Get references of an entry\" call returns all the entries of content types that are referenced by a particular entry."
url: "https://www.contentstack.com/java-management-entry-getreference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getReference

The "Get references of an entry" call returns all the entries of content types that are referenced by a particular entry.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.getReference().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
