---
title: "create"
description: "The \"Create a folder\" call is used to create an asset folder and/or add a parent folder to it (if required)."
url: "https://www.contentstack.com/java-management-folder-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The "Create a folder" call is used to create an asset folder and/or add a parent folder to it (if required).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body to create a delivery token. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Folder folder = contentstack.stack().folder();
Call<ResponseBody> response = folder.create(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
