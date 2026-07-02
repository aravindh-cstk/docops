---
title: "GetExecution"
description: "The \"Get executions of a webhook\" request allows you to fetch the execution details of a specific webhook, which includes the execution UID. These details are instrumental in retrieving webhook logs and retrying a failed webhook."
url: "https://www.contentstack.com/java-management-webhook-getexecution"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetExecution

The "Get executions of a webhook" request allows you to fetch the execution details of a specific webhook, which includes the execution UID. These details are instrumental in retrieving webhook logs and retrying a failed webhook.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Webhook webhook = contentstack.stack().webhook();
Call<ResponseBody> response = webhook.getExecutions().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
