---
title: "delete"
description: "The \"Delete Content Type\" call deletes an existing content type and all the entries within it. When executing the API call, in the URI Parameters section, provide the UID of your content type."
url: "https://www.contentstack.com/java-management-contenttype-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete Content Type" call deletes an existing content type and all the entries within it. When executing the API call, in the URI Parameters section, provide the UID of your content type.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
