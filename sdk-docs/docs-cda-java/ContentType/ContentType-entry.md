---
title: "entry"
description: "An Entry is the actual piece of content created using one of the defined content types."
url: "https://www.contentstack.com/java-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

An Entry is the actual piece of content created using one of the defined content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entryUid | String | Yes | — | The entry unique ID of the entry that you want to fetch |

Returns:
Type
Entry

```
import contentstack;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
Call&lt;ResponseBody&gt; response = contentType.entry("entryUid").execute();
if (response.isSuccessful) { 
	System.out.println(&lt;"Response"&gt; + response)
}
```
