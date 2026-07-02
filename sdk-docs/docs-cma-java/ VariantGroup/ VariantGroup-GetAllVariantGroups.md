---
title: "Get All Variant Groups"
description: "The variantGroup.find() method retrieves all variant groups linked to your stack. This helps list available groups for content personalization."
url: "https://www.contentstack.com/java-management-variant-groups-get-all-variant-groups"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get All Variant Groups

The `variantGroup.find()` method retrieves all variant groups linked to your stack. This helps list available groups for content personalization.

No parameters.

Returns:
Type
Call<ResponseBody>

```
import Contentstack;

// Replace AUTHTOKEN and API_KEY with your actual credentials
Contentstack contentstack = new 
Contentstack.Builder().setAuthToken(AUTHTOKEN).build();
Stack stack = contentstack.stack(API_KEY);

VariantGroup variantGroup = stack.variantGroup();
Response<ResponseBody> response = variantGroup.find().execute();

if (response.isSuccessful() && response.body() != null) {           
  System.out.println("Fetched Variant Groups: " + response.body().string());  
} else {      
  System.out.println("Error: " + response.errorBody().string());  
}
```
