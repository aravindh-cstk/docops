---
title: "fetch"
description: "The \"Get a Single global field\" request lets you fetch comprehensive details of a specific global field. When executing the API call, in the URI Parameters section, provide the unique ID of your global field. Note : You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-globalfield-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a Single global field" request lets you fetch comprehensive details of a specific global field.

When executing the API call, in the URI Parameters section, provide the unique ID of your global field.

**Note**: You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
Call<ResponseBody> response = globalField.fetch().execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```
