---
title: "includeReference"
description: "The includeReference method adds a constraint that requires the details of a specified reference key."
url: "https://www.contentstack.com/android-entry-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

The `includeReference` method adds a constraint that requires the details of a specified reference key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceFields | String[] | Yes | — | referenceFields array key that to be constrained |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.includeReference(new String[]{"referenceUid_A", "referenceUid_B"});
```
