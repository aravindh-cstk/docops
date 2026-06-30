---
title: "entry"
description: "An entry is a content created using one of the defined content types."
url: "https://www.contentstack.com/java-management-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## entry

An entry is a content created using one of the defined content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entryUid | String | No | — | The entry uid. |

Returns:
Type
Entry

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.entry(entryUid).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
