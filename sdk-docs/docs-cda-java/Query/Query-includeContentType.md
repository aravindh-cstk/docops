---
title: "includeContentType"
description: "Include Content Type of all returned objects along with objects themselves"
url: "https://www.contentstack.com/java-query-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeContentType

Include Content Type of all returned objects along with objects themselves

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeContentType();
```
