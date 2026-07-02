---
title: "delete"
description: "Delete asset call deletes an existing asset from the stack."
url: "https://www.contentstack.com/java-management-asset-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

Delete asset call deletes an existing asset from the stack.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.delete().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
