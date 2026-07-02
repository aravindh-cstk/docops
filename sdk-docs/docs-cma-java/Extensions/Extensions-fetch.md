---
title: "fetch"
description: "The \"Fetch\" request returns information about a specific extension."
url: "https://www.contentstack.com/java-management-extensions-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Fetch" request returns information about a specific extension.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Extensions extension = contentstack.stack().extensions();
Call<ResponseBody> response = extension.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
