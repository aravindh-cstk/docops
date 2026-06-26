---
title: "find"
description: "Execute a Query and Caches its result (Optional)"
url: "https://www.contentstack.com/java-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

Execute a Query and Caches its result (Optional)

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callBack | QueryResultsCallBack | Yes | — | QueryResultsCallBack object to notify the application when the request has completed. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.find(new QueryResultsCallBack() {
@Override 
public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {

 }
});
```
