---
title: "update"
description: "The \"Update management token\" request lets you update the details of a management token. You can change the name and description of the token, update the stack-level permissions assigned to the token, and change the expiry date of the token (if set)."
url: "https://www.contentstack.com/java-management-managementtoken-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update management token" request lets you update the details of a management token. You can change the name and description of the token, update the stack-level permissions assigned to the token, and change the expiry date of the token (if set).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ManagementToken managementToken = contentstack.stack().managementToken();
Call<ResponseBody> response = managementToken.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
