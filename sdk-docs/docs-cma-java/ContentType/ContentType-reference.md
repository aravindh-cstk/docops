---
title: "reference"
description: "The \"Get all references of content type\" call will fetch all the content types in which a specified content type is referenced. Note : You must use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about authentication. You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-contenttype-reference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## reference

The "Get all references of content type" call will fetch all the content types in which a specified content type is referenced.

**Note**: You must use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about authentication. You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| isIncludeGlobalField | Boolean | Yes | — | Include Global Field true/false |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.reference(isIncludeGlobalField).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
