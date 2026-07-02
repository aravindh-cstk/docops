---
title: "webhook"
description: "A webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account. Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens."
url: "https://www.contentstack.com/java-management-stack-webhook"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## webhook

A webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account. Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhookUid | String | No | — | Enter the unique webhook ID from which you want to retrieve the details. Execute the Get all webhooks call to retrieve the UID of a webhook. |

Returns:
Type
Webhook

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.webhook("webhookUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
