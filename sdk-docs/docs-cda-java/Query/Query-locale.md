---
title: "locale"
description: "Set Language using locale code."
url: "https://www.contentstack.com/java-query-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

Set Language using locale code.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | — | language code |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.locale("locale-code");
```
