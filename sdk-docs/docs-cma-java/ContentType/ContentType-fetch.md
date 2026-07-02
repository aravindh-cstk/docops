---
title: "fetch"
description: "The \"Get a single content type\" call returns information about a specific content type."
url: "https://www.contentstack.com/java-management-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get a single content type" call returns information about a specific content type.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
