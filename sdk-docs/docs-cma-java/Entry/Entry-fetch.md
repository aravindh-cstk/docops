---
title: "fetch"
description: "The \"Get a single entry\" request fetches a particular entry of a content type. The content of the entry is returned in JSON format. You can also specify the environment and locale from which you wish to retrieve the entries."
url: "https://www.contentstack.com/java-management-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single entry" request fetches a particular entry of a content type.

The content of the entry is returned in JSON format. You can also specify the environment and locale from which you wish to retrieve the entries.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
