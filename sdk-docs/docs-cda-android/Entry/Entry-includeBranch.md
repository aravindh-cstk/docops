---
title: "includeBranch"
description: "The `includeBranch` method includes the branch information in the entry response."
url: "https://www.contentstack.com/android-entry-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The `includeBranch` method includes the branch information in the entry response.

No parameters.

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("user").entry("entryUid");
entry.includeBranch();
```
