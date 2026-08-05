---
title: "byFolderUid"
description: "The \"Get assets of a specific folder\" retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of sub-folders within it."
url: "https://www.contentstack.com/java-management-asset-byfolderuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## byFolderUid

The "Get assets of a specific folder" retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of sub-folders within it.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folderUid | String | Yes | — | The folderUid of a specific folder. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.byFolderUid("folderUid").execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
