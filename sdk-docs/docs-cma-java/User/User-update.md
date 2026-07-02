---
title: "update"
description: "The \"Update User\" API Request updates the details of an existing user account. Only the information entered here will be updated; the existing data will remain unaffected. When executing the API call, under the 'Body' section, enter the user's information that you wish to update. This information should be in JSON format."
url: "https://www.contentstack.com/java-management-user-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update User" API Request updates the details of an existing user account. Only the information entered here will be updated; the existing data will remain unaffected.

When executing the API call, under the 'Body' section, enter the user's information that you wish to update. This information should be in JSON format.

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
