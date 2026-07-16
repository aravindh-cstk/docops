---
title: "findOne"
description: "The `findOne` method retrieves entries that match the query conditions and optionally caches the result to improve performance."
url: "https://www.contentstack.com/android-query-findone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findOne

The `findOne` method retrieves entries that match the query conditions and optionally caches the result to improve performance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callBack | SingleQueryResultCallback | Yes | — | The key as string which needs to be added to the Query |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.findOne(new QueryResultsCallBack() {
Override public void onCompletion(ResponseType responseType, ENTRY entry, Error error) {
}
});
```
