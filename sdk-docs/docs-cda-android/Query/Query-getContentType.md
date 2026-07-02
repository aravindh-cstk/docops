---
title: "getContentType"
description: "The getContentType method retrieves the content type associated with the request."
url: "https://www.contentstack.com/android-query-getcontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getContentType

The `getContentType` method retrieves the content type associated with the request.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.getContentType()
```
