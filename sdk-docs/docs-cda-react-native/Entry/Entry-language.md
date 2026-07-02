---
title: "language"
description: "Sets the language code of which you want to retrieve data."
url: "https://www.contentstack.com/js-entry-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## language

Sets the language code of which you want to retrieve data.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| language_code | string | No | — | language code. e.g. 'en-us', 'ja-jp', etc. |

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').language('language_code').toJSON().fetch();
```
