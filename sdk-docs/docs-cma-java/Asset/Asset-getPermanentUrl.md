---
title: "getPermanentUrl"
description: "The \"Download an asset with a permanent URL\" request displays an asset in the response. The asset returned to the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL. This request will return the most recent version of the asset; however, to download the latest published version of the asset, pass the environment query parameter with the environment name."
url: "https://www.contentstack.com/java-management-asset-getpermanenturl"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getPermanentUrl

The "Download an asset with a permanent URL" request displays an asset in the response. The asset returned to the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL.

This request will return the most recent version of the asset; however, to download the latest published version of the asset, pass the environment query parameter with the environment name.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| slugUrl | String | Yes | — | The unique identifier of the asset. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.getPermanentUrl("slugUrl").execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
