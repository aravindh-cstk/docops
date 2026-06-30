---
title: "cancelScheduledAction"
description: "The \"Cancel Scheduled Action\" request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and cancel the deployment of releases."
url: "https://www.contentstack.com/java-management-publishqueue-cancelscheduledaction"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## cancelScheduledAction

The "Cancel Scheduled Action" request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and cancel the deployment of releases.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
PublishQueue publishQueue = contentstack.stack().publishQueue();
Call<ResponseBody> response = publishQueue.cancelScheduledAction().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
