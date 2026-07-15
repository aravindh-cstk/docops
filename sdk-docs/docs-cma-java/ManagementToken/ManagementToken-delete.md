---
title: "delete"
description: "The Delete management token request deletes a specific management token"
url: "https://www.contentstack.com/copy-of-java-management-managementtoken-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete management token request deletes a specific management token

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ManagementToken managementToken = contentstack.stack().managementToken();
Call<ResponseBody> response = folder.delete().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
