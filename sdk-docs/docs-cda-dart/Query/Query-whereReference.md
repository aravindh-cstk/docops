---
title: "whereReference"
description: "Get entries having values based on referenced fields This query retrieves all entries that satisfy the query conditions made on referenced fields."
url: "https://www.contentstack.com/dart-query-whereReference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## whereReference

Get entries having values based on referenced fields This query retrieves all entries that satisfy the query conditions made on referenced fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceUid | String | Yes | — | The referenced uid |
| reference | QueryReference | Yes | — | It accepts Enum type QueryReference.include() OR QueryReference.NotInclude() and it accepts instance of Query |

Returns:
Type
void

```
import Contentstack
final query = stack.contentType('room').entry().query();
query.referenceSearch('fieldUid', QueryReference.include(query: query));
  await query.find().then((response){
    print(response);
});
```
