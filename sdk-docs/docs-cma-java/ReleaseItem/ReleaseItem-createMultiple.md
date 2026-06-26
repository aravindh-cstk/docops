---
title: "createMultiple"
description: "The \"Add multiple items to a Release\" request allows you to add multiple items (entries and/or assets) to a Release. When executing the API request, you need to provide the Release UID."
url: "https://www.contentstack.com/java-management-releaseitem-createmultiple"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## createMultiple

The "Add multiple items to a Release" request allows you to add multiple items (entries and/or assets) to a Release.

When executing the API request, you need to provide the Release UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to create/add a single Item. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
Call<ResponseBody> response = releaseItem.createMultiple(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
