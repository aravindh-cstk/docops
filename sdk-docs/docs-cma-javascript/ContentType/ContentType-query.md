---
title: "query"
description: "The Query on Content Type will allow to fetch details of all or specific Content Type"
url: "https://www.contentstack.com/js-management-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The Query on Content Type will allow to fetch details of all or specific Content Type

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType().query({ query: { name: 'Content Type Name' } }).find()
.then((contentTypes) => console.log(contentTypes))
```
