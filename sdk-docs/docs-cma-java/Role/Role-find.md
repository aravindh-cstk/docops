---
title: "find"
description: "The \"Get all roles\" request returns comprehensive information about all roles created in a stack. You can add queries to extend the functionality of this API request."
url: "https://www.contentstack.com/java-management-roles-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all roles" request returns comprehensive information about all roles created in a stack.

You can add queries to extend the functionality of this API request.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Roles roles = contentstack.stack().roles();
Call<ResponseBody> response = roles.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
