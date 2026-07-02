---
title: "logoutWithAuthtoken"
description: "The \"Log out of your account\" call is used to sign out the user of the Contentstack account."
url: "https://www.contentstack.com/java-management-user-logoutwithauthtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## logoutWithAuthtoken

The "Log out of your account" call is used to sign out the user of the Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authtoken | String | Yes | — | The authtoken of the user. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack= new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.logout("authtoken").execute();
if (response.isSuccessful){ 
   System.out.println("Response"+ response) 
}
```
