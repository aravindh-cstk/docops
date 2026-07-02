---
title: "fetch"
description: "The fetch Locale call fetches Locale details."
url: "https://www.contentstack.com/js-management-locale-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch Locale call fetches Locale details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | Int | No | — | UID of the content type of which you want to retrieve the details |

Returns:
Type
Promise.<Locale.Locale>

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).locale('locale_code').fetch()
.then((locale) => console.log(locale))
```
