---
title: "fetchAsPojo "
description: "The fetchAsPojo method fetches a single entry by UID and deserializes it into a POJO."
url: "https://www.contentstack.com/java-delivery-entry-fetchaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAsPojo 

The fetchAsPojo method fetches a single entry by UID and deserializes it into a POJO.

No parameters.

Returns:
Type
Call<EntryResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().contentType(content_type_uid).entry(entry_uid);
Response<EntryResponse> response = entry.fetchAsPojo().execute();
if (response.isSuccessful() && response.body() != null) {
    EntryResponse entryResponse = response.body();
    EntryPojo entrypojo = entryResponse.getEntryPojo();
    System.out.println(" Entry Title: " + entrypojo.title);
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
