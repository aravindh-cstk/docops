---
title: "generatePermanentUrl"
description: "Generate Permanent Asset URL request allows you to generate a permanent URL for an asset. This URL remains constant irrespective of any subsequent updates to the asset."
url: "https://www.contentstack.com/java-management-asset-folder-generatepermanenturl"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## generatePermanentUrl

Generate Permanent Asset URL request allows you to generate a permanent URL for an asset. This URL remains constant irrespective of any subsequent updates to the asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The JSONObject request body. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset.generatePermanentUrl(body).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
