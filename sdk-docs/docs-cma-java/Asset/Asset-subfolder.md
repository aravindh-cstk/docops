---
title: "subfolder"
description: "The \"Get assets and folders of a parent folder\" retrieves details of assets and asset subfolders within a specific parent asset folder."
url: "https://www.contentstack.com/java-management-asset-subfolder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## subfolder

The "Get assets and folders of a parent folder" retrieves details of assets and asset subfolders within a specific parent asset folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folderUid | String | Yes | — | Folder uid. |
| isIncludeFolders | Boolean | Yes | — | Provide true or false. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset.subfolder("folderUid", True).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
