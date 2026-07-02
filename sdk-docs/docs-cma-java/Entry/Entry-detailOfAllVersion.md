---
title: "detailOfAllVersion"
description: "The \"Get Details of All Versions of an Entry\" request allows you to retrieve the details of all the versions of an entry. The version details returned include the actual version number of the entry; the version name along with details such as the assigned version name, the UID of the user who assigned the name, and the time when the version was assigned a name; and the locale of the entry."
url: "https://www.contentstack.com/java-management-entry-detailofallversion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## detailOfAllVersion

The "Get Details of All Versions of an Entry" request allows you to retrieve the details of all the versions of an entry.

The version details returned include the actual version number of the entry; the version name along with details such as the assigned version name, the UID of the user who assigned the name, and the time when the version was assigned a name; and the locale of the entry.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.detailOfAllVersion().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
