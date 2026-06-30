---
title: "findAsPojo"
description: "The findAsPojo method fetches a list of content types and deserializes them into POJOs."
url: "https://www.contentstack.com/java-contenttype-findaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAsPojo

The findAsPojo method fetches a list of content types and deserializes them into POJOs.

No parameters.

Returns:
Type
Call<ContentTypesResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Response<ContentTypesResponse> response = contentstack.stack().contentTypes().findAsPojo().execute();
if (response.isSuccessful() && response.body() != null) {
    ContentTypesResponse ctResponse = response.body();
    List<ContentTypePojo> contentTypes = ctResponse.getContentTypes();
    for (ContentTypePojo ct : contentTypes) {
        System.out.println(" Content Type UID: " + ct.uid);
        System.out.println(" Content Type Title: " + ct.title);
    }
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
