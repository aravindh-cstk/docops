---
title: "create"
description: "This call lets you add a new language to your stack. You can either add a supported language or a custom language of your choice. When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-locale-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

This call lets you add a new language to your stack. You can either add a supported language or a custom language of your choice.

When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.create(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
