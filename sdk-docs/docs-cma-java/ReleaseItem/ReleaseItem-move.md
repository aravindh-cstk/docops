---
title: "move"
description: "The move method allows you to move multiple items within a specific release."
url: "https://www.contentstack.com/java-management-sdk-releaseitem-move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## move

The `move` method allows you to move multiple items within a specific release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.param | object | Yes | — | The data containing the items to be moved. |
| params.release_version | string | No | — | The release version(2.0) |

Returns:
Type
Promise

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releases("RELEASE_UID").item();
Call<ResponseBody> response = releaseItem.move(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
