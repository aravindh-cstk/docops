---
title: "fieldVisibilityRule"
description: "The \"Set Field Visibility Rule for Content Type API request\" lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields."
url: "https://www.contentstack.com/java-management-alias-fieldvisibilityrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fieldVisibilityRule

The "Set Field Visibility Rule for Content Type API request" lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ContentType contentType = contentstack.stack().contentType();
Call<ResponseBody> response = contentType.fieldVisibilityRule("requestBody").execute();
if (response.isSuccessful) {
    System.out.println(<"Response"> + response)
}
```
