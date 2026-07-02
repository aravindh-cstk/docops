---
title: "getByType"
description: "Based on the query request, \"Get either images or videos\" retrieves assets that are either image files or video files."
url: "https://www.contentstack.com/java-management-asset-getbytype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getByType

Based on the query request, "Get either images or videos" retrieves assets that are either image files or video files.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| assetType | String | Yes | — | Asset type that you want to retrieve. - For images, "images" - For videos, "videos" |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.getByType("assetType").execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
