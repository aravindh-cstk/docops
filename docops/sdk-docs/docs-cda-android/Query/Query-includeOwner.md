---
title: "includeOwner"
description: "The `includeOwner` method retrieves objects by including the owner’s profile information in each object’s data."
url: "https://www.contentstack.com/android-query-includeowner"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeOwner

The `includeOwner` method retrieves objects by including the owner’s profile information in each object’s data.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.<span>includeOwner</span>()
```
