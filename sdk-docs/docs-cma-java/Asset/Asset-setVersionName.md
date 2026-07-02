---
title: "setVersionName"
description: "The \"Set version name for asset\" request allows you to assign a name to a specific version of an asset."
url: "https://www.contentstack.com/java-management-asset-setversionname"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setVersionName

The "Set version name for asset" request allows you to assign a name to a specific version of an asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| versionNumber | Integer | Yes | — | Asset version number. |
| requestBody | JSONObject | Yes | — | The request body of JSONObject. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset.setVersionName(3, body).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
