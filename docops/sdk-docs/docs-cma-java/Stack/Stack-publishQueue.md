---
title: "publishQueue"
description: "The Publishing Queue displays the historical and current details of activities such as publishing, unpublishing, or deleting that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status."
url: "https://www.contentstack.com/java-management-stack-publishqueue"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## publishQueue

The Publishing Queue displays the historical and current details of activities such as publishing, unpublishing, or deleting that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publishQueueUid | String | No | — | The UID of a specific publish queue activity of which you want to retrieve the details. Execute the Get publish queue API request to retrieve the UID of a particular publish queue activity. |

Returns:
Type
PublishQueue

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.publishQueue("publishQueueUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
