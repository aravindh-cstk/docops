---
title: "delete"
description: "The delete method removes a specific release from the stack"
url: "https://www.contentstack.com/java-management-releases-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The `delete` method removes a specific release from the stack

No parameters.

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.stack().releases("RELEASE_UID").delete().execute();
if (response.isSuccessful()) {
    System.out.println("Release deleted successfully.");
}
```
