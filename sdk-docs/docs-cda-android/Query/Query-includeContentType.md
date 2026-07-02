---
title: "includeContentType"
description: "The includeContentType method retrieves objects along with the content type details of all returned objects in the response."
url: "https://www.contentstack.com/android-query-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

The `includeContentType` method retrieves objects along with the content type details of all returned objects in the response.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeContentType();
```
