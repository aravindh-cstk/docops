---
title: "update"
description: "The \"Update or move folder\" request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder. When executing the API request, provide the UID of the folder that you want to move/update."
url: "https://www.contentstack.com/java-management-folder-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update or move folder" request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder.

When executing the API request, provide the UID of the folder that you want to move/update.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Folder folder = contentstack.stack().folder();
Call<ResponseBody> response = folder.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
