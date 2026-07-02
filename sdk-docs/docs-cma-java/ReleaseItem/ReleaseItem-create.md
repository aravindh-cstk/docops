---
title: "create"
description: "The \"Add a single item to a Release\" request allows you to add an item (entry or asset) to a Release. When executing the API request, you need to provide the Release UID."
url: "https://www.contentstack.com/java-management-releaseitem-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The "Add a single item to a Release" request allows you to add an item (entry or asset) to a Release.

When executing the API request, you need to provide the Release UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The requestBody to create/add a single Item. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
Call<ResponseBody> response = releaseItem.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
