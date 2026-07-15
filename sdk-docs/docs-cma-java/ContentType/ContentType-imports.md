---
title: "imports"
description: "The \"Import a content type\" call imports a content type into a stack by uploading a JSON file."
url: "https://www.contentstack.com/java-management-contenttype-imports"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imports

The "Import a content type" call imports a content type into a stack by uploading a JSON file.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.imports().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
