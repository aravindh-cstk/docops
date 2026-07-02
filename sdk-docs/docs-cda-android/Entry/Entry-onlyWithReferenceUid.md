---
title: "onlyWithReferenceUid"
description: "The onlyWithReferenceUid method specifies an array of reference UIDs that should be included in the response."
url: "https://www.contentstack.com/android-entry-onlywithreferenceuid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## onlyWithReferenceUid

The `onlyWithReferenceUid` method specifies an array of reference UIDs that should be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | ArrayList<String> | Yes | — | Array of the only reference keys to be included in response. |
| referenceFieldUid | String | Yes | — | Key who has reference to some other class object |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
ArrayList<String> array = new ArrayList<String>();
array.add("description");
array.add("name");
entry.onlyWithReferenceUid(array, "referenceUid");
```
