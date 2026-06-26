---
title: "operator"
description: "entries that satisfy at least one of the given conditions provided"
url: "https://www.contentstack.com/dart-query-operator"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## operator

entries that satisfy at least one of the given conditions provided

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| listOfQuery | QueryOperator.and(queryObjects: List<Query>) | Yes | — | QueryOperator using and/or functions that accepts list of queries |

Returns:
Type
void

```
import Contentstack
final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");final query = stack.contentType('contentTypeUid').entry().query();query.operator(QueryOperator.OR);
final stackInstance1 = Credential.stack(); final queryBase1 = stackInstance1.contentType('room').entry().query(); queryBase1.where('title', QueryOperation.equals(value: 'Room 13')); 
final stackInstance2 = Credential.stack(); final queryBase2 = stackInstance2.contentType('room').entry().query(); queryBase2.where('attendee', QueryOperation.equals(value: 20)); 
final List listOfQuery = [queryBase1, queryBase2]; 
query.operator(QueryOperator.or(queryObjects: listOfQuery));
await query.find().then((response)
{ 
  print(response.toString()); 
}).catchError((onError){ 
  print(onError); 
});
```
