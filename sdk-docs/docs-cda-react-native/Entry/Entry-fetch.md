---
title: "fetch"
description: "Fetches a particular entry based on the provided entry UID."
url: "https://www.contentstack.com/js-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetches a particular entry based on the provided entry UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param | object | No | — | Fetch options to fetch particular entry |

Returns:
Type
Promise

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').language('language_code').toJSON().fetch();
```
