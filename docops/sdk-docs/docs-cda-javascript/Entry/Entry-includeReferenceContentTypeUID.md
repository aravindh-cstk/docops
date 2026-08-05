---
title: "includeReferenceContentTypeUID"
description: "This method also includes the content type UIDs of the referenced entries returned in the response."
url: "https://www.contentstack.com/js-entry-include-reference-contenttype-uid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceContentTypeUID

This method also includes the content type UIDs of the referenced entries returned in the response.

No parameters.

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeReferenceContentTypeUID().toJSON().fetch();
```
