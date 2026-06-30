---
title: "fetch"
description: "The \"Get a single management token\" request returns the details of a specific management token generated in a stack and NOT the actual management token."
url: "https://www.contentstack.com/java-management-managementtoken-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single management token" request returns the details of a specific management token generated in a stack and NOT the actual management token.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ManagementToken managementToken = contentstack.stack().managementToken();
Call<ResponseBody> response = managementToken.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
