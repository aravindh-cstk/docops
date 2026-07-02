---
title: "update"
description: "The \"Update Content Type\" call is used to update the schema of an existing content type. Note : Whenever you update a content type, it will auto-increment the content type version."
url: "https://www.contentstack.com/java-management-contenttype-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update Content Type" call is used to update the schema of an existing content type.

**Note**: Whenever you update a content type, it will auto-increment the content type version.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body to update the Alias. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
