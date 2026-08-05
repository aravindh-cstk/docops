---
title: "export"
description: "This call is used to export a specific content type and its schema. The data is exported in JSON format. However, please note that the entries of the specified content type are not exported through this call. The schema of the content type returned will depend on the version number provided. Note : You must use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-contenttype-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

This call is used to export a specific content type and its schema. The data is exported in JSON format. However, please note that the entries of the specified content type are not exported through this call. The schema of the content type returned will depend on the version number provided.

**Note**: You must use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.export().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
