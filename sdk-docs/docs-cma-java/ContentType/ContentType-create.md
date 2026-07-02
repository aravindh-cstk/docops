---
title: "create"
description: "The \"Create a content type\" call creates a new content type in a particular stack of your Contentstack account. In the Body section, you need to provide the complete schema of the content type."
url: "https://www.contentstack.com/java-management-contenttype-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The "Create a content type" call creates a new content type in a particular stack of your Contentstack account.

In the Body section, you need to provide the complete schema of the content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
