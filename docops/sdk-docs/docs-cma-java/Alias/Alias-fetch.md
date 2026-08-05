---
title: "fetch"
description: "The \"Get a single alias\" request returns information about a specific alias."
url: "https://www.contentstack.com/java-management-alias-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single alias" request returns information about a specific alias.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
Call<ResponseBody> response = alias.fetch().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
