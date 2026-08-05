---
title: "includeBranch"
description: "Include the Branch for publish content."
url: "https://www.contentstack.com/js-entry-include-branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

Include the Branch for publish content.

No parameters.

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeBranch().toJSON().fetch();
```
