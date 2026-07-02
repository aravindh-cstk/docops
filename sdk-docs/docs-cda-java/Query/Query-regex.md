---
title: "regex"
description: "Add a regular expression constraint for finding string values that match the provided regular expression. This may be slow for large data sets."
url: "https://www.contentstack.com/java-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## regex

Add a regular expression constraint for finding string values that match the provided regular expression. This may be slow for large data sets.

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

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.regex("name", "^browser", "i");
```
