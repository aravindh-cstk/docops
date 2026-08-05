---
title: "and"
description: "The `and` method combines multiple queries using the AND operator to retrieve results that meet all specified conditions."
url: "https://www.contentstack.com/android-query-and"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## and

The `and` method combines multiple queries using the AND operator to retrieve results that meet all specified conditions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryObjects | ArrayList<Query> | Yes | — | List of Query instances on which AND query executes. |

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
query.and(array);
```
