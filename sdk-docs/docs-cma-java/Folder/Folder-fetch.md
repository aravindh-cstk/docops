---
title: "fetch"
description: "The \"Get a single folder\" call gets the comprehensive details of a specific asset folder using folder UID. When executing the API call to search for a subfolder, you will need to provide the parent folder UID."
url: "https://www.contentstack.com/java-management-folder-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get a single folder" call gets the comprehensive details of a specific asset folder using folder UID.

When executing the API call to search for a subfolder, you will need to provide the parent folder UID.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Folder folder = contentstack.stack().folder();
Call<ResponseBody> response = folder.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
