---
title: "skip"
description: "The skip method retrieves objects by skipping a specified number of objects before returning the results."
url: "https://www.contentstack.com/android-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skip

The `skip` method retrieves objects by skipping a specified number of objects before returning the results.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | int | Yes | — | Number of objects to skip from returned objects |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.skip(3);
```
