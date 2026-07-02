---
title: "findOne"
description: "This Execute a Query and Caches its result (Optional)"
url: "https://www.contentstack.com/java-query-findone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findOne

This Execute a Query and Caches its result (Optional)

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callBack | SingleQueryResultCallback | Yes | — | The key as string which needs to be added to the Query |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.findOne(new QueryResultsCallBack() {
  @Override
  public void onCompletion(ResponseType responseType, <ENTRY> entry, Error error) {
  }
});
```
