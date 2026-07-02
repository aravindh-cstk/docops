---
title: "logout"
description: "The \"Log out of your account\" call is used to sign out the user of the Contentstack account."
url: "https://www.contentstack.com/java-management-user-logout"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## logout

The "Log out of your account" call is used to sign out the user of the Contentstack account.

No parameters.

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack= new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.logout().execute();
if (response.isSuccessful){ 
   System.out.println("Response"+ response) 
}
```
