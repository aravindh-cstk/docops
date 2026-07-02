---
title: "query_operator"
description: "query_operator Get entries that satisfy all the conditions provided in the '$and' query."
url: "https://www.contentstack.com/python-query-query_operator"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query_operator

query_operator Get entries that satisfy all the conditions provided in the '$and' query.

No parameters.

Returns:
Type
dictionary

```
import contentstack;
from contentstack.basequery import QueryOperation

stack = contentstack.Stack(api_key, delivery_token, environment);
query1 = stack.content_type("content_type_uid_1").query()
query2 = stack.content_type("content_type_uid_2").query()
query3 = stack.content_type("content_type_uid_3").query()
query2 = self.query1.where("price", QueryOperation.IS_LESS_THAN, fields=90)
query3 = self.query2.where("discount", QueryOperation.INCLUDES, fields=[20, 45])
query1 = query1.query_operator(query2, query3)
response = query1.find()
```
