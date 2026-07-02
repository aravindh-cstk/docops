---
title: "create"
description: "The Create a content type call creates a new content type in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-contenttype-create"
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
| params.content_type | object | Yes | — | ContentType details and schema to create. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const content_type = {name: 'My New contentType'}

client.stack({ api_key: 'api_key'}).contentType().create({ content_type })
.then((contentType) => console.log(contentType))
```
