---
title: "findAsPojo "
description: "The findAsPojo method fetches multiple entries for a content type and deserializes them into POJOs."
url: "https://www.contentstack.com/java-delivery-entry-findaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findAsPojo 

The findAsPojo  method fetches multiple entries for a content type and deserializes them into POJOs.

No parameters.

Returns:
Type
Call<EntryListResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Response<EntryListResponse> response = contentstack.stack().contentType(content_type_uid).entry().findAsPojo().execute();
if (response.isSuccessful() && response.body() != null) {
    EntryListResponse entryListResponse = response.body();
    List<EntryPojo> entries = entryListResponse.getEntries();
    for (EntryPojo entry : entries) {
        System.out.println(" Entry Title: " + entry.title);
    }
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
