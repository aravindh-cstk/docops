---
title: "update"
description: "The Update Locale call lets you update the name and description of an existing Locale."
url: "https://www.contentstack.com/js-management-locale-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update Locale call lets you update the name and description of an existing Locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | No | — | The request body |

Returns:
Type
Promise.<Locale.Locale>

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).locale('locale_code').fetch()
.then((locale) => {
  locale.fallback_locale = 'en-at'
  return locale.update()
})
.then((locale) => console.log(locale))
```
