---
title: "getLanguage"
description: "The \"Get languages of an entry\" call returns the details of all the languages that an entry exists in."
url: "https://www.contentstack.com/java-management-entry-getlanguage"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getLanguage

The "Get languages of an entry" call returns the details of all the languages that an entry exists in.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.getLanguage().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
