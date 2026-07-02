---
title: "deleteReleaseItems"
description: "The deleteReleaseItems method removes multiple entries or assets from a specific release in a single request."
url: "https://www.contentstack.com/java-management-sdk-releaseitem-deletereleaseitems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deleteReleaseItems

The `deleteReleaseItems` method removes multiple entries or assets from a specific release in a single request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Data defining the items to be removed |

Returns:
Type
call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releases("RELEASE_UID").item();
Call<ResponseBody> response = releaseItem.deleteReleaseItems(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
