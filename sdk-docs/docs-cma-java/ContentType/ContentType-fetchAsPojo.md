---
title: "fetchAsPojo"
description: "The fetchAsPojo method fetches a single content type and deserializes the response into a POJO."
url: "https://www.contentstack.com/java-contenttype-fetchaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAsPojo

The fetchAsPojo method fetches a single content type and deserializes the response into a POJO.

No parameters.

Returns:
Type
Call<ContentTypeResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType(content_type_uid);
Response<ContentTypeResponse> response = contentType.fetchAsPojo().execute();
      if (response.isSuccessful() && response.body() != null) {
          ContentTypeResponse ctResponse = response.body();
          System.out.println("ContentType JSON: " + ctResponse.toString());
          if (ctResponse != null) {
           ContentTypePojo ctPojo = ctResponse.getContentPojo();
           System.out.println(" Content Type UID: " + ctPojo.uid);
           System.out.println(" Content Type Title: " + ctPojo.title);
     }
 }  else {
           System.out.println("Error: " + response.errorBody().string());
}
```
