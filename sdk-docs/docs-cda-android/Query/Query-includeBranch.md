---
title: "includeBranch"
description: "The `includeBranch` method retrieves entries by including branch information in the response."
url: "https://www.contentstack.com/android-query-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The `includeBranch` method retrieves entries by including branch information in the response.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
<span>entry.includeBranch();
```
