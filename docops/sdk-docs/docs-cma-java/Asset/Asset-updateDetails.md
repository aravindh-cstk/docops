---
title: "updateDetails​"
description: "The \"Update asset revision\" call upgrades a specified version of an asset as the latest version of that asset."
url: "https://www.contentstack.com/java-management-asset-updatedetails-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updateDetails​

The "Update asset revision" call upgrades a specified version of an asset as the latest version of that asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | JSON Request body. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONObject();
Call<ResponseBody> response = asset.updateDetails(body).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
