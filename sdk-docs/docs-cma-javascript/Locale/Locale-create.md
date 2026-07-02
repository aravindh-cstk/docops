---
title: "create"
description: "The Create a content type call creates a new content type in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-locale-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create a content type call creates a new content type in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | No | — | The request body |

Returns:
Type
Promise.<Locale.Locale>

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).locale().create({ locale: { code: 'en-at' } )
.then((locale) => console.log(locale))
```
