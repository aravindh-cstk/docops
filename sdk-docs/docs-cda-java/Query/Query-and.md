---
title: "and"
description: "Combines all the queries together using AND operator"
url: "https://www.contentstack.com/java-query-and"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## and

Combines all the queries together using AND operator

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryObjects | ArrayList<Query> | Yes | — | List of Query instances on which AND query executes. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
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
