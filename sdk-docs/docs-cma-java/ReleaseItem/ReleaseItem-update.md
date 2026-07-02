---
title: "update"
description: "The \"Update Release items to their latest versions\" request let you update all the release items (entries and assets) to their latest versions before deployment Note : You need to use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-releaseitem-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update Release items to their latest versions" request let you update all the release items (entries and assets) to their latest versions before deployment

**Note**: You need to use either the stack's Management Token or the user Authtoken (anyone is mandatory), along with the stack API key, to make a valid Content Management API request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to create/add a single Item. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
Call<ResponseBody> response = releaseItem.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
