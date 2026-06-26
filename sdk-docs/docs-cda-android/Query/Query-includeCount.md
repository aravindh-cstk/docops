---
title: "includeCount"
description: "The `includeCount` method retrieves the count of objects along with the data in the response that match the specified query conditions."
url: "https://www.contentstack.com/android-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeCount

The `includeCount` method retrieves the count of objects along with the data in the response that match the specified query conditions.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeCount();
```
