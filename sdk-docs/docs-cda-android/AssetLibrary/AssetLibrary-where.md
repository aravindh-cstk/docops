---
title: "where"
description: "The where method retrieves assets from the stack by applying filter conditions on any field UID associated with the assets."
url: "https://www.contentstack.com/android-assetlibrary-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

The `where` method retrieves assets from the stack by applying filter conditions on any field UID associated with the assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_name | String | No | — | Enter the field UID of the asset |
| value | String | No | — | Enter the value |

Returns:
Type
AssetLibrary

**Example:**

```
import com.contentstack.sdk.*;
   Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
   AssetLibrary assets = stack.assetLibrary().where("field_name","value");
   assets.fetchAll(new FetchAssetsCallback(){
    @Override
    public void onCompletion(ResponseType responseType,List<Asset> assets,Error 
    error)
{ 
  System.out.println(assets);
 }});
```
