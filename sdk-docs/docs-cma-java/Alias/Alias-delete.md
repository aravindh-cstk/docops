---
title: "delete"
description: "The \"Delete an alias\" request deletes an existing alias. To confirm the deletion of an alias, you need to specify the force=true query parameter. When executing the API call, in the “URL Parameters” section, provide the UID of your alias."
url: "https://www.contentstack.com/java-management-alias-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete an alias" request deletes an existing alias.

To confirm the deletion of an alias, you need to specify the force=true query parameter.

When executing the API call, in the “URL Parameters” section, provide the UID of your alias.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
Call<ResponseBody> response = alias.delete().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
