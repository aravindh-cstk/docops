---
title: "fetch"
description: "The `fetch` method retrieves the entry using its UID, and can optionally include query parameters to refine the response."
url: "https://www.contentstack.com/android-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves the entry using its UID, and can optionally include query parameters to refine the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callback | EntryResultCallBack | Yes | — | EntryResultCallBack object to notify the application when the request has completed |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.fetch(new EntryResultCallBack() {
@Override public void onCompletion(ResponseType responseType, Error error) {
}
});}
```
