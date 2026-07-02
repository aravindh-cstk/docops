---
title: "update"
description: "The \"Update language\" call will let you update the details (such as display name) and the fallback language of an existing language of your stack. When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-locale-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The "Update language" call will let you update the details (such as display name) and the fallback language of an existing language of your stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | Thee body should be a JSON Object. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Locale locale = contentstack.stack().locale();
Call<ResponseBody> response = locale.update(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
