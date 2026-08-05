---
title: "linkContentTypes"
description: "The `linkContentTypes` method links one or more content types to a variant group. Use it to enable personalization by associating content types with variant logic."
url: "https://www.contentstack.com/java-management-variantgroup-linkcontenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## linkContentTypes

The `linkContentTypes` method links one or more content types to a variant group. Use it to enable personalization by associating content types with variant logic.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUids | String… | No | — | Links one or more content types to a variant group. Accepts a variable number of `String` arguments. |

Returns:
Type
Call<ResponseBody>

```
import Contentstack;

// Set an Authorization header using a Bearer token

Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();

// Get the stack instance using the API key

Stack stack = contentstack.stack(API_KEY);
VariantGroup variantgroup = stack.variantGroup(); 

// Link multiple content types to the variant group using their UIDs

Response<ResponseBody>  response = variantGroup.linkContentTypes("contentType1", "contentType2").execute();

if (response.isSuccessful() && response.body() != null) {           
  System.out.println("Successfully linked: " + response.body().string());  
} else {      
  System.out.println("Error: " + response.errorBody().string());  
}
```
