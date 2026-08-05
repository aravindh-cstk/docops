---
title: "find"
description: "The \"Get all aliases\" request returns comprehensive information about all the aliases available in a particular stack in your account."
url: "https://www.contentstack.com/java-management-alias-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all aliases" request returns comprehensive information about all the aliases available in a particular stack in your account.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
Call<ResponseBody> response = alias.find().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
