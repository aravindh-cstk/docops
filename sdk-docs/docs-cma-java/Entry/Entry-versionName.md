---
title: "versionName"
description: "Version naming allows you to assign a name to a version of an entry for easy identification."
url: "https://www.contentstack.com/java-management-entry-versionname"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## versionName

Version naming allows you to assign a name to a version of an entry for easy identification.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | Integer | Yes | — | Enter the version number of the entry to which you want to assign a name. |
| requestBody | JSONObject | Yes | — | The request body in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.versionName(version, requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
