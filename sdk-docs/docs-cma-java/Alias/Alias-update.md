---
title: "update"
description: "The \"Assign an alias\" request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack."
url: "https://www.contentstack.com/java-management-alias-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Assign an alias" request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body to update the Alias. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
Call<ResponseBody> response = alias.update(body).execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
