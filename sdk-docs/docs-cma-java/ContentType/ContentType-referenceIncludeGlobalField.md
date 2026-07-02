---
title: "referenceIncludeGlobalField"
description: "The \"Get all references of content type\" call will fetch all the content types in which a specified content type is referenced. Note : You must use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about authentication. You need to use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request"
url: "https://www.contentstack.com/java-management-contenttype-referenceincludeglobalfield"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceIncludeGlobalField

The "Get all references of content type" call will fetch all the content types in which a specified content type is referenced.

**Note**: You must use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about authentication. You need to use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.referenceIncludeGlobalField().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
