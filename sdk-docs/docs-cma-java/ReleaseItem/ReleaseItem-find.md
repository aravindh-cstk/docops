---
title: "find"
description: "The \"Get all items in a Release request\" retrieves a list of all items (entries and assets) that are part of a specific Release."
url: "https://www.contentstack.com/java-management-releaseitem-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Get all items in a Release request" retrieves a list of all items (entries and assets) that are part of a specific Release.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
Call<ResponseBody> response = releaseItem.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
