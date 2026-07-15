---
title: "includeReferenceContentTypUid"
description: "This method also includes the content type UIDs of the referenced entries returned in the response"
url: "https://www.contentstack.com/java-query-includereferencecontenttypuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceContentTypUid

This method also includes the content type UIDs of the referenced entries returned in the response

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.includeReferenceContentTypUid()
```
