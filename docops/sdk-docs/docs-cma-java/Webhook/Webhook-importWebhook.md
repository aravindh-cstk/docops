---
title: "importWebhook"
description: "The Import Webhook section consists of the following two requests that will help you to import new Webhooks or update existing ones by uploading JSON files."
url: "https://www.contentstack.com/java-management-importwebhook"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## importWebhook

The

Import Webhook

section consists of the following two requests that will help you to import new Webhooks or update existing ones by uploading JSON files.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fileName | String | Yes | — | the file name |
| jsonPath | String | Yes | — | jsonPath like example "/Downloads/import.json" |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.importWebhook("filename","jsonPath").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
