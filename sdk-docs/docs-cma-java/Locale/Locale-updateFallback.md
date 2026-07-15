---
title: "updateFallback"
description: "The \"Update fallback language\" request allows you to update the fallback language for an existing language of your stack. When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account."
url: "https://www.contentstack.com/java-management-locale-updatefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updateFallback

The "Update fallback language" request allows you to update the fallback language for an existing language of your stack.

When executing the API call, under the Header section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.updateFallback(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
