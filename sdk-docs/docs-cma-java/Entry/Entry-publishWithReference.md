---
title: "publishWithReference"
description: "The \"Publishing an Entry With References\" request allows you to publish an entry with all its references simultaneously."
url: "https://www.contentstack.com/java-management-entry-publishwithreference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## publishWithReference

The "Publishing an Entry With References" request allows you to publish an entry with all its references simultaneously.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject  | Yes | — | The request body in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.publishWithReference(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
