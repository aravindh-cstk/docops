---
title: "find"
description: "The \"Get all assets\" request returns comprehensive information on all assets available in a stack."
url: "https://www.contentstack.com/java-management-alias-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Get all assets" request returns comprehensive information on all assets available in a stack.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.find().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
