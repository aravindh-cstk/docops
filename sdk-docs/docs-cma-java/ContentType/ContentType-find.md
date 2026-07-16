---
title: "find"
description: "The \"Get all content types\" call returns comprehensive information on all the content types available in a particular stack in your account. Note : You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-contenttype-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The "Get all content types" call returns comprehensive information on all the content types available in a particular stack in your account.

**Note**: You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
