---
title: "managementToken"
description: "To authenticate Content Management API (CMA) requests over your stack content, you can use Management Tokens."
url: "https://www.contentstack.com/java-management-tokens-managementtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## managementToken

To authenticate Content Management API (CMA) requests over your stack content, you can use Management Tokens.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| managementTokenUid | String | No | — | The managementTokenUid. |

Returns:
Type
ManagementToken

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ManagementToken managementToken = contentstack.stack();
Call<ResponseBody> response = managementToken.managementToken("managementTokenUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
