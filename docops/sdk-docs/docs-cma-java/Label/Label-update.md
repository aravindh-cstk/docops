---
title: "update"
description: "The \"Update label\" call is used to update an existing label. When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-label-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update label" call is used to update an existing label.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body to update the Label. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
Call<ResponseBody> response = label.update(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
