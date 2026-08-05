---
title: "create"
description: "The \"Create an entry\" call creates a new entry for the selected content type. When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created."
url: "https://www.contentstack.com/java-management-releaseitem-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The "Create an entry" call creates a new entry for the selected content type.

When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to create/add a single Item. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.create(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
