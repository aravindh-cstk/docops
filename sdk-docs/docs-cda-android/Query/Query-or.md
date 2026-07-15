---
title: "or"
description: "The `or` method retrieves all entries that meet any of the specified queries by combining them using the OR operator."
url: "https://www.contentstack.com/android-query-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## or

The `or` method retrieves all entries that meet any of the specified queries by combining them using the OR operator.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryObjects | ArrayList<Query> | Yes | — | the value that provides an upper bound |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.lessThan("due_date", "2013-06-25T00:00:00+05:30");
Query query = projectClass.query();
query.where('username','something');
Query subQuery = projectClass.query();
subQuery.where('email_address','something@email.com');
ArrayList<Query> array = new ArrayList<Query>();
array.add(query);
array.add(subQuery);
query.or(array);
```
