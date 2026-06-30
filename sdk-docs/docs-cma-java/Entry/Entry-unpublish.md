---
title: "unpublish"
description: "The \"Unpublish an entry\" call will unpublish an entry at once and allow you to do so automatically at a later date/time. In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the entry parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically. You also need to mention the master locale and the version number of the entry that you want to publish. In the case of Scheduled Unpublished, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: \"scheduled_at\":\"2016-10-07T12:34:36.000Z\""
url: "https://www.contentstack.com/java-management-entry-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unpublish

The "Unpublish an entry" call will unpublish an entry at once and allow you to do so automatically at a later date/time.

In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the entry parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically.

You also need to mention the master locale and the version number of the entry that you want to publish.

In the case of Scheduled Unpublished, add the scheduled_at key and provide the date/time in the ISO format as its value.

Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.unpublish(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
