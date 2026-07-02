---
title: "onlyWithReferenceUid"
description: "The onlyWithReferenceUid method retrieves entries by specifying an array of only keys that should be included in the response for referenced entries."
url: "https://www.contentstack.com/android-query-onlywithreferenceuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## onlyWithReferenceUid

The `onlyWithReferenceUid` method retrieves entries by specifying an array of only keys that should be included in the response for referenced entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | ArrayList<String> | Yes | — | Array of the only reference keys to be included in response |
| referenceFieldUid | String | Yes | — | Key who has reference to some other class object |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
ArrayList<String> array = new ArrayList<String>();
array.add("description");
query.onlyWithReferenceUid(array, "for_bug");
```
