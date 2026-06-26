---
title: "update"
description: "The \"Update role\" request lets you modify an existing role of your stack. However, the pre-existing system roles cannot be modified."
url: "https://www.contentstack.com/java-management-roles-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update role" request lets you modify an existing role of your stack. However, the pre-existing system roles cannot be modified.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The body should be of a JSONObject type. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Roles roles = contentstack.stack().roles();
Call<ResponseBody> response = roles.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
