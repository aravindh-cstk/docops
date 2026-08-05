---
title: "folder"
description: "Get folder instance."
url: "https://www.contentstack.com/copy-of-java-management-asset-folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## folder

Get folder instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folderUid | String | No | — | The UID of the folder that you want either to update or move. |

Returns:
Type
Folder

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.folder("folderUid").execute();
[OR]
Call<ResponseBody> response = asset.folder().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
