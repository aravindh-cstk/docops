---
title: "deleteReleaseItem"
description: "The deleteReleaseItem method removes a single entry or asset from a release."
url: "https://www.contentstack.com/java-management-sdk-releaseitem-deletereleaseitem"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deleteReleaseItem

The `deleteReleaseItem` method removes a single entry or asset from a release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Data defining the item to remove |

Returns:
Type
call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releases("RELEASE_UID").item();
Call<ResponseBody> response = releaseItem.deleteReleaseItem(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
