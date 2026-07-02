---
title: "create"
description: "This call is used to create a label. When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-delivery-label-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

This call is used to create a label.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
Call<ResponseBody> response = label.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
