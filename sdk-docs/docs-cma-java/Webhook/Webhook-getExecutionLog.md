---
title: "getExecutionLog"
description: "This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle."
url: "https://www.contentstack.com/java-management-webhook-getexecutionlog"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getExecutionLog

This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| executionUid | String | Yes | — | The execution unique ID of the webhook. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.getExecutionLog("executionUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
