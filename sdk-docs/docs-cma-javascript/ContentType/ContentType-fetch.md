---
title: "fetch"
description: "The fetch ContentType call fetches ContentType details."
url: "https://www.contentstack.com/js-management-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch ContentType call fetches ContentType details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | number | No | — | Version number to fetch specific version of ContentType. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').fetch()
.then((contentType) => console.log(contentType))
```
