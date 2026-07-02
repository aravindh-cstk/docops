---
title: "delete"
description: "The \"Delete an entry\" request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple localized entries."
url: "https://www.contentstack.com/java-management-entry-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The "Delete an entry" request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple localized entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody |  | No | — | You can delete specific localized entries by passing the locale codes in the Request body using the locales key. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.delete(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
