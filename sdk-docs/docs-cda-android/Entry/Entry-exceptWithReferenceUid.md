---
title: "exceptWithReferenceUid()"
description: "The exceptWithReferenceUid method specifies an array of except keys that gets excluded from the response."
url: "https://www.contentstack.com/android-entry-exceptwithreferenceuid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## exceptWithReferenceUid()

The `exceptWithReferenceUid` method specifies an array of except keys that gets excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | ArrayList<String> | Yes | — | Array of the except reference keys to be excluded in response |
| referenceFieldUid | String | Yes | — | Key who has reference to some other class object |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.<span>exceptWithReferenceUid</span>()
ArrayList<String> array = new ArrayList<String>();
<span>array.add("description");</span>
<span>array.add("name");</span>
<span>entry.onlyWithReferenceUid(array, "referenceUid");</span>
```
