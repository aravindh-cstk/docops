---
title: "requestPassword"
description: "The \"Request for a password\" call requests a temporary password to log in to an account if a user has forgotten the login password. Using this temporary password, you can log in to your account and set a new password for your Contentstack account. Provide the user's email address in JSON format"
url: "https://www.contentstack.com/java-management-user-requestpassword"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## requestPassword

The "Request for a password" call requests a temporary password to log in to an account if a user has forgotten the login password.

Using this temporary password, you can log in to your account and set a new password for your Contentstack account.

Provide the user's email address in JSON format

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack= new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack. requestPassword("body").execute();
if (response.isSuccessful){ 
   System.out.println("Response"+ response) 
}
```
