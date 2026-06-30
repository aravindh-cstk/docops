---
title: "getReferences"
description: "The \"Get asset references\" request returns the details of the entries and the content types in which the specified asset is referenced."
url: "https://www.contentstack.com/copy-of-java-management-asset-getreferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getReferences

The "Get asset references" request returns the details of the entries and the content types in which the specified asset is referenced.

No parameters.

Returns:
Type
call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject body = new JSONBody();
Call<ResponseBody> response = asset. getReferences().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
