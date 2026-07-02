---
title: "skip"
description: "The number of objects to skip before returning any."
url: "https://www.contentstack.com/java-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skip

The number of objects to skip before returning any.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | int | Yes | — | Number of objects to skip from returned objects |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.skip(3)
```
