---
title: "FetchActivity"
description: "The \"Get publish queue activity\" request returns comprehensive information on a specific publish, unpublish, or delete action performed on an entry and/or asset. You can also retrieve details of a specific release deployment."
url: "https://www.contentstack.com/java-management-publishqueue-fetchactivity"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FetchActivity

The "Get publish queue activity" request returns comprehensive information on a specific publish, unpublish, or delete action performed on an entry and/or asset. You can also retrieve details of a specific release deployment.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
PublishQueue publishQueue = contentstack.stack().publishQueue();
Call<ResponseBody> response = publishQueue.fetchActivity().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
