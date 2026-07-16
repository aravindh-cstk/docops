---
title: "export"
description: "This request is used to export a specific global field and its schema. The data is exported in JSON format."
url: "https://www.contentstack.com/java-management-globalfield-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

This request is used to export a specific global field and its schema. The data is exported in JSON format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | Integer | No | — | The version of the content type you want to retrieve. If the version number is not specified, you will get the latest version of the content type. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
Call<ResponseBody> response = globalField.export().execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```
