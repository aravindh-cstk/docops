---
title: "fetch"
description: "The \"Get a single branch\" request returns information about a specific branch."
url: "https://www.contentstack.com/java-management-branch-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The "Get a single branch" request returns information about a specific branch.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Branch branch = contentstack.stack().branch();
Call<ResponseBody> response = branch.fetch();
if (response.isSuccessful) { 
    System.out.println("Response" + response)
}
```
