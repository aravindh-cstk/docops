---
title: "publish"
description: "The \"Publish an entry\" request lets you publish an entry either immediately or schedule it for a later date/time. In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the \"Body\", the following actions take place: If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and is published If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a Bulk Publish operation. The locale and environment details should be specified in the entry parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically. Along with the above details, you also need to mention the master locale and the version number of the entry that you want to publish."
url: "https://www.contentstack.com/java-management-entry-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The "Publish an entry" request lets you publish an entry either immediately or schedule it for a later date/time.

In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the "Body", the following actions take place:

If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and is published

If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a Bulk Publish operation.

The locale and environment details should be specified in the entry parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically.

Along with the above details, you also need to mention the master locale and the version number of the entry that you want to publish.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | String | Yes | — | In the "Body" parameter, you need to provide the content of your entry based on the content type. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Entry entry = contentstack.stack().entry();
Call<ResponseBody> response = entry.publish(requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
