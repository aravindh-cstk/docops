---
title: "find"
description: "The \"Get publish queue\" request returns comprehensive information on activities such as publish, unpublish, and delete performed on entries and/or assets. This request also includes the details of the release deployments in the response body."
url: "https://www.contentstack.com/java-management-publishqueue-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Get publish queue" request returns comprehensive information on activities such as publish, unpublish, and delete performed on entries and/or assets. This request also includes the details of the release deployments in the response body.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
PublishQueue publishQueue = contentstack.stack().publishQueue();
Call<ResponseBody> response = publishQueue.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
