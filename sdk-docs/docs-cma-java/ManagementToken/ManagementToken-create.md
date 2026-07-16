---
title: "create"
description: "The \"Create management token\" request creates a management token in a stack. This token provides you with read-write access to the content of your stack."
url: "https://www.contentstack.com/java-management-managementtoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The "Create management token" request creates a management token in a stack. This token provides you with read-write access to the content of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | Details of the management token. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ManagementToken managementToken = contentstack.stack().managementToken();
Call<ResponseBody> response = managementToken.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
