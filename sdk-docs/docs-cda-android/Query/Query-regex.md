---
title: "regex"
description: "The regex method retrieves entries by applying a regular expression constraint that matches string values against the provided pattern, which may result in slower performance for large data sets."
url: "https://www.contentstack.com/android-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## regex

The `regex` method retrieves entries by applying a regular expression constraint that matches string values against the provided pattern, which may result in slower performance for large data sets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained. |
| regex | String | Yes | — | The regular expression pattern to match |
| modifiers |  | No | — | Any of the following supported Regular expression modifiers. - use i for case-insensitive matching. - use m for making dot match newlines. - use x for ignoring whitespace in regex |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.regex("name", "^browser", "i");
```
