---
title: "imports"
description: "The \"Import global field\" call imports global fields into Stack. Note : You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-globalfield-imports"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imports

The "Import global field" call imports global fields into Stack.

**Note**: You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | Object | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
Call<ResponseBody> response = globalField.imports(body).execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```
