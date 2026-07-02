---
title: "query"
description: "The Query on extension will allow to fetch details of all or specific extensions."
url: "https://www.contentstack.com/js-management-extension-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on extension will allow to fetch details of all or specific extensions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | Enter 'true' to include the count of extension |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).extension()
.query()
.find()
.then((extensions) => console.log(extensions))
```
