---
title: "importExisting"
description: "The \"Import an existing entry\" call will import a new version of an existing entry. You can create multiple versions of an entry."
url: "https://www.contentstack.com/java-management-entry-importexisting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## importExisting

The "Import an existing entry" call will import a new version of an existing entry. You can create multiple versions of an entry.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.importExisting().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
