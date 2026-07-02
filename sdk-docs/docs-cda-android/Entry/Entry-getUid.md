---
title: "getUid"
description: "The getUid method retrieves the UID of the entry."
url: "https://www.contentstack.com/android-entry-getuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getUid

The `getUid` method retrieves the UID of the entry.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.getUid()
```
