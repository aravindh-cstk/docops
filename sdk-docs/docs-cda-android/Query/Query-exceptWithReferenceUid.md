---
title: "exceptWithReferenceUid"
description: "The `exceptWithReferenceUid` method retrieves entries by specifying an array of except keys that should be excluded from the response for referenced entries."
url: "https://www.contentstack.com/android-query-exceptwithreferenceuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exceptWithReferenceUid

The `exceptWithReferenceUid` method retrieves entries by specifying an array of except keys that should be excluded from the response for referenced entries.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
ArrayList<String> array = new ArrayList<String>();
array.add("description");
query.exceptWithReferenceUid(array, "for_bug");
```
