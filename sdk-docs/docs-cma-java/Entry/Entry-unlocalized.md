---
title: "unlocalized"
description: "The \"Unlocalize an entry request\" is used to unlocalize an existing entry."
url: "https://www.contentstack.com/java-management-entry-unlocalized"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unlocalized

The "Unlocalize an entry request" is used to unlocalize an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| localeCode | String  | Yes | — | Enter the code of the language to localize the entry of that particular language. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.unLocalize("localeCode").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
