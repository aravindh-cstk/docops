---
title: "uploadCustomField"
description: "The \"Upload a custom field\" request is used to upload a custom field to Contentstack."
url: "https://www.contentstack.com/java-management-extensions-uploadcustomfield"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## uploadCustomField

The "Upload a custom field" request is used to upload a custom field to Contentstack.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| upload | html | No | — | Select the HTML file of the custom field that you want to upload. |
| title | String | No | — | Enter the title of the custom field that you want to upload. |
| data_type | String | No | — | Enter the data type for the input field of the custom field. |
| tags | String | No | — | Enter the tags that you want to assign to the custom field. |
| multiple | Boolean | No | — | Enter ‘true’ if you want your custom field to store multiple values. |
| type | String | No | — | Enter the type as ‘field’ since this is a custom field extension. |

Returns:
Type
Call

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Extensions extension = contntstack.stack().extensions();
extension.uploadCustomField(body);
```
