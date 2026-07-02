---
title: "includeReference"
description: "The includeReference method retrieves the content of the referenced entry."
url: "https://www.contentstack.com/java-management-entry-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

The includeReference method retrieves the content of the referenced entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceField | String / String[] | Yes | — | Enter the reference_field value |

Returns:
Type
Entry

**includeReference with reference_field_uid as String:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack("apiKey").contentType("contentType")
.entry("entry_uid");
Response<ResponseBody> response = entry
.includeReference("reference_uid_1")
.execute();
if (response.isSuccessful()) {
    System.out.println("Response" + response.body().string());
} else {
    System.out.println("Error Body" + response.errorBody().string());
}
```

**includeReference with reference_field_uids as an array:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack("apiKey").contentType("contentType")
.entry("entry_uid")
String[] array = {"reference_uid_1","reference_uid_2"};
Response<ResponseBody> response = entry.includeReference(array).execute();
if (response.isSuccessful()) {
    System.out.println("Response" + response.body().string());
} else {
    System.out.println("Error Body" + response.errorBody().string());
}
```
