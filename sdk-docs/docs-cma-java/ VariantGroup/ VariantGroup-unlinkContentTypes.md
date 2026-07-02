---
title: "unlinkContentTypes"
description: "The unlinkContentTypes method removes one or more content types from a variant group. Use this method to detach content types previously linked for personalization."
url: "https://www.contentstack.com/java-management-variantgroup-unlinkcontenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## unlinkContentTypes

The `unlinkContentTypes` method removes one or more content types from a variant group. Use this method to detach content types previously linked for personalization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUids | String… | No | — | Unlinks one or more content types to a variant group. Accepts variable-length `String` arguments. |

Returns:
Type
Call<ResponseBody>

```
import Contentstack;

// Initialize the Contentstack client using an auth token

Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();

// Get the stack instance using the API key

Stack stack = contentstack.stack(API_KEY);

// Get the VariantGroup instance

VariantGroup variantgroup = stack.variantGroup();  

// Unlink one or more content types from the variant group using their UIDs
    
Response<ResponseBody> response = variantGroup.unlinkContentTypes("contentType1").execute();

if (response.isSuccessful() && response.body() != null) {           
  System.out.println("Successfully unlinked: " + response.body().string());  
} else {      
  System.out.println("Error: " + response.errorBody().string());  
}
```
