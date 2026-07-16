---
title: "imports"
description: "The \"Import an entry\" call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to. The Import an existing entry call will import a new version of an existing entry. You can create multiple versions of an entry."
url: "https://www.contentstack.com/java-management-entry-imports"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imports

The "Import an entry" call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to.

The Import an existing entry call will import a new version of an existing entry. You can create multiple versions of an entry.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.imports().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
