---
title: "count"
description: "The `count` method retrieves the total count along with the data objects that match the query criteria."
url: "https://www.contentstack.com/android-query-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## count

The `count` method retrieves the total count along with the data objects that match the query criteria.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.count();
```
