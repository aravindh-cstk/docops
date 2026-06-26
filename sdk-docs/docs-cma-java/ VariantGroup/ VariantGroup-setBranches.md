---
title: "setBranches"
description: "The `setBranches` method defines the branches used in the request body when linking or unlinking content types from a variant group. By default, only the main branch is included."
url: "https://www.contentstack.com/java-management-variantgroup-setbranches"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setBranches

The `setBranches` method defines the branches used in the request body when linking or unlinking content types from a variant group. By default, only the main branch is included.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branches | List<String> or String… | No | — | A list of branch names to apply to the request. Accepts either a `List<String>` or a variable number of `String` arguments. |

Returns:
Type
VariantGroup

```
import Contentstack;

// Initialize the Contentstack client using an auth token

Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();

// Get the stack instance using the API key

Stack stack = contentstack.stack(API_KEY);

// Get the VariantGroup instance

VariantGroup variantgroup = stack.variantGroup();

// Set the branches used in the request (e.g., main and dev branches)

variantgroup.setBranches("main", "dev");

// Link content types (by UID) with the selected branches   
     
Response<ResponseBody> response = variantGroup.linkContentTypes("contentType").execute();

if (response.isSuccessful() && response.body() != null) {           
  System.out.println("Successfully linked: " + response.body().string());  
} else {      
  System.out.println("Error: " + response.errorBody().string());  
}
```
