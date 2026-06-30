---
title: "update"
description: "The \"Update an entry\" call lets you update the content of an existing entry. Passing the locale parameter will cause the entry to be localized in the specified locale."
url: "https://www.contentstack.com/java-management-entry-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update an entry" call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body for the entry update. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.update(requestBody).execute();
if (response.isSuccessful()){
   System.out.println(response.body().string());} else {   System.out.println(response.errorBody().string());
}
```
