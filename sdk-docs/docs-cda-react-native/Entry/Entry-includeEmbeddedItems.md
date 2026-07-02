---
title: "includeEmbeddedItems"
description: "Include Embedded Objects (Entries and Assets) along with entry/entries details."
url: "https://www.contentstack.com/js-entry-include-embeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeEmbeddedItems

Include Embedded Objects (Entries and Assets) along with entry/entries details.

No parameters.

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeEmbeddedItems().toJSON().fetch();
```
