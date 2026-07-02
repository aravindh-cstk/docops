---
title: "delete"
description: "The \"Remove an item from a Release\" request removes one or more items (entries and/or assets) from a specific Release."
url: "https://www.contentstack.com/java-management-releaseitem-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Remove an item from a Release" request removes one or more items (entries and/or assets) from a specific Release.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
Call<ResponseBody> response = releaseItem.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
