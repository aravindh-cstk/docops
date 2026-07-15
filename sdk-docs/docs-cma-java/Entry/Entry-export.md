---
title: "export"
description: "The \"Export an entry\" call is used to export an entry. The exported entry data is saved in a downloadable JSON file."
url: "https://www.contentstack.com/java-management-entry-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

The "Export an entry" call is used to export an entry. The exported entry data is saved in a downloadable JSON file.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.export().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
