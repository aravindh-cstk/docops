---
title: "delete"
description: "The \"Delete a folder\" call is used to delete an asset folder along with all the assets within that folder. When executing the API call, provide the parent folder UID."
url: "https://www.contentstack.com/java-management-folder-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete a folder" call is used to delete an asset folder along with all the assets within that folder.

When executing the API call, provide the parent folder UID.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Folder folder = contentstack.stack().folder();
Call<ResponseBody> response = folder.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
