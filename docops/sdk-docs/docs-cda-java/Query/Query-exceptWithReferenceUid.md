---
title: "exceptWithReferenceUid"
description: "Specifies an array of except keys that would be excluded in the response."
url: "https://www.contentstack.com/java-query-exceptwithreferenceuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exceptWithReferenceUid

Specifies an array of except keys that would be excluded in the response.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
ArrayList<String> array = new ArrayList<String>();
array.add("description");
query.exceptWithReferenceUid(array, "for_bug");
```
