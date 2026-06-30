---
title: "delete"
description: "The \"Get assets and folders of a parent folder\" retrieves details of both assets and asset subfolders within a specific parent asset folder."
url: "https://www.contentstack.com/java-management-branch-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The "Get assets and folders of a parent folder" retrieves details of both assets and asset subfolders within a specific parent asset folder.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Branch branch = contentstack.stack().branch();
Call<ResponseBody> response = branch.delete().execute();
if (response.isSuccessful){
    System.out.println("Response" + response)
}
```
