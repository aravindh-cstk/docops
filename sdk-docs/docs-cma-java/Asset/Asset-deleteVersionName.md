---
title: "deleteVersionName"
description: "The \"Delete Version Name of an Asset\" request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number."
url: "https://www.contentstack.com/java-management-asset-deleteversionname"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## deleteVersionName

The "Delete Version Name of an Asset" request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| versionNumber | Integer | Yes | — | The asset version. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.deleteVersionName(version).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
