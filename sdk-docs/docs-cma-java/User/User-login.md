---
title: "login"
description: "The \"login to your account\" request is used to sign in to your Contentstack account and obtain the authtoken."
url: "https://www.contentstack.com/java-management-user-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## login

The "login to your account" request is used to sign in to your Contentstack account and obtain the authtoken.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | String | Yes | — | E mail id for the user. |
| password | String | Yes | — | The password for the user. |
| tfaToken | String | No | — | The tfa token. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack= new Contentstack.Builder().build();
User user = contentstack.user();
Call<ResponseBody> response = user.login("email", "password", "tfaToken").execute()
if (response.isSuccessful){ 
   System.out.println("Response"+ response)
}
```
