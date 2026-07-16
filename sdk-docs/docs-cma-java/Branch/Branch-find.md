---
title: "find"
description: "The \"Get all branches\" request returns comprehensive information about all the branches available in a particular stack in your account."
url: "https://www.contentstack.com/java-management-branch-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all branches" request returns comprehensive information about all the branches available in a particular stack in your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Branch branch = contentstack.stack().branch();
Call<ResponseBody> response = branch.find();
if (response.isSuccessful) { 
    System.out.println("Response" + response)
}
```
