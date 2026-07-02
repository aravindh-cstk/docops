---
title: "rteInformation"
description: "The \"Get information on RTE assets\" call returns comprehensive information on all assets uploaded through the Rich Text Editor field."
url: "https://www.contentstack.com/java-management-asset-rteinformation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## rteInformation

The "Get information on RTE assets" call returns comprehensive information on all assets uploaded through the Rich Text Editor field.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.rteInformation().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
