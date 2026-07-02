---
title: "resetPassword"
description: "The \"Reset password\" call sends a request for resetting the password of your Contentstack account. When executing the call, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format."
url: "https://www.contentstack.com/java-management-user-resetpassword"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## resetPassword

The "Reset password" call sends a request for resetting the password of your Contentstack account.

When executing the call, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack= new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.resetPassword("body").execute();
if (response.isSuccessful){ 
   System.out.println("Response"+ response) 
}
```
