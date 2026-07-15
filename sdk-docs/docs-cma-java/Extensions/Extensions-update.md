---
title: "update"
description: "The \"Update Extensions call\" will update the details of a custom field."
url: "https://www.contentstack.com/java-management-extensions-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update Extensions call" will update the details of a custom field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body to update the Extension. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Extensions extension = contentstack.stack().extensions();
Call<ResponseBody> response = extension.update(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
