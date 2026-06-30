---
title: "locale"
description: "The `locale` method retrieves entries by setting the language based on a specified locale code."
url: "https://www.contentstack.com/android-query-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

The `locale` method retrieves entries by setting the language based on a specified locale code.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | — | language code |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.locale("locale-code");
```
