---
title: "contentType"
description: "The ContentType defines the structure or schema of a page or a section of your web or mobile property. To create content for your application, you are required to first create a content type, and then create entries using the content type."
url: "https://www.contentstack.com/java-management-stack-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## contentType

The ContentType defines the structure or schema of a page or a section of your web or mobile property. To create content for your application, you are required to first create a content type, and then create entries using the content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | String | No | — | Enter the unique ID of the content type from which you want to retrieve the details. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack |

Returns:
Type
ContentType

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.contentType("contentTypeUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
