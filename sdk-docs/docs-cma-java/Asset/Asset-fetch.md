---
title: "fetch"
description: "The \"Get an asset\" call returns comprehensive information about a specific version of an asset of a stack Tip : To include the publishing details in the response, use the include_publish_details parameter and set its value to ‘true'. This query will return the publishing details of the entry in every environment, along with the version number published in each environment."
url: "https://www.contentstack.com/java-management-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get an asset" call returns comprehensive information about a specific version of an asset of a stack

**Tip**: To include the publishing details in the response, use the include_publish_details parameter and set its value to ‘true'. This query will return the publishing details of the entry in every environment, along with the version number published in each environment.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.fetch().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
