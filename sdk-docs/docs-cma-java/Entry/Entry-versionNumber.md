---
title: "versionNumber "
description: "Atomic operations are particularly useful when we do not want content collaborators to overwrite data. Though it works efficiently for singular fields, these operations come in handy, especially in the case of fields that are marked as \"Multiple\"."
url: "https://www.contentstack.com/java-management-entry-versionnumber"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## versionNumber 

Atomic operations are particularly useful when we do not want content collaborators to overwrite data. Though it works efficiently for singular fields, these operations come in handy, especially in the case of fields that are marked as "Multiple".

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| versionNumber | Integer | Yes | — | Enter the version number of the entry that you want to delete. |
| requestBody | JSONObject  | Yes | — | Request body for the delete operation. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.versionNumber(versionNumber, requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
