---
title: "includeReferenceContentTypUid"
description: "The includeReferenceContentTypeUid method retrieves entries by including the content type UIDs of referenced entries in the response."
url: "https://www.contentstack.com/android-query-includereferencecontenttypuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReferenceContentTypUid

The `includeReferenceContentTypeUid` method retrieves entries by including the content type UIDs of referenced entries in the response.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.includeReferenceContentTypUid()
```
