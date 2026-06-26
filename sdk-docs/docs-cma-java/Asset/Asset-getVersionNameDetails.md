---
title: "getVersionNameDetails"
description: "The \"Get details of all versions of an asset\" request allows you to retrieve the details of all the versions of an asset. The details returned include the actual version number of the asset; the version name along with details such as the assigned version name, the UID of the user who assigned the name, and the time when the version was assigned a name; and the count of the versions."
url: "https://www.contentstack.com/copy-of-java-management-asset-getversionnamedetails"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getVersionNameDetails

The "Get details of all versions of an asset" request allows you to retrieve the details of all the versions of an asset.

The details returned include the actual version number of the asset; the version name along with details such as the assigned version name, the UID of the user who assigned the name, and the time when the version was assigned a name; and the count of the versions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Integer | No | — | Enter the maximum number of version details to be returned. |
| named | Boolean | No | — | Set to true if you want to retrieve only the named versions of your asset. |
| include_count | Boolean | No | — | Enter 'true' to get the total count of the asset version details. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset. getVersionNameDetails().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
