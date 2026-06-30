---
title: "fetch"
description: "The \"Get a single role\" request returns comprehensive information on a specific role."
url: "https://www.contentstack.com/java-management-roles-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single role" request returns comprehensive information on a specific role.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Roles roles = contentstack.stack().roles();
Call<ResponseBody> response = roles.fetch().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
