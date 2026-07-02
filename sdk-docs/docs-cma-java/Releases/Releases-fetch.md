---
title: "fetch"
description: "The fetch method retrieves details of a specific release using its UID."
url: "https://www.contentstack.com/java-management-releases-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The `fetch` method retrieves details of a specific release using its UID.

No parameters.

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.stack().releases("RELEASE_UID").fetch().execute();
if (response.isSuccessful()) {
    System.out.println("Fetched release.");
}
```
