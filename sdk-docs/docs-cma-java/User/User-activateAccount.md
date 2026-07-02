---
title: "activateAccount"
description: "The activate\\_token a user account call activates the account of a user after signing up."
url: "https://www.contentstack.com/java-management-user-activateaccount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## activateAccount

The activate_token a user account call activates the account of a user after signing up.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| activationToken | String | Yes | — | The activation token is received at the registered email address. You can find the activation token in the activation URL sent to the email address used while signing up. |
| body | JSONObject | Yes | — | The body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack= new Contentstack.Builder().build();
User user = contentstack.user();
Call<ResponseBody> response = user.activateAccount("activationToken", body).execute()
if (response.isSuccessful){ 
   System.out.println("Response"+ response)
}
```
