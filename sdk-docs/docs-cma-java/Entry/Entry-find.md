---
title: "find"
description: "The \"Find\" call fetches the list of all the entries of a particular content type. It also returns the content of each entry in JSON format. You can also specify the environment and locale where you wish to get the entries."
url: "https://www.contentstack.com/java-management-entry-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Find" call fetches the list of all the entries of a particular content type. It also returns the content of each entry in JSON format. You can also specify the environment and locale where you wish to get the entries.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
