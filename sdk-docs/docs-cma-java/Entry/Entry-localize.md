---
title: "localize"
description: "The \"Localize an entry\" request allows you to localize an entry, i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale. Note : This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the Publish an entry request and pass the respective locale code in the locale={locale\\_code} parameter."
url: "https://www.contentstack.com/java-management-entry-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## localize

The "Localize an entry" request allows you to localize an entry, i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.

**Note**: This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the Publish an entry request and pass the respective locale code in the locale={locale_code} parameter.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | String | Yes | — | In the "Body" parameter, you need to provide the content of your entry based on the content type. |
| localeCode | Object | Yes | — | Enter the code of the language to localize the entry of that particular language. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.localize(requestBody, "localeCode").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
