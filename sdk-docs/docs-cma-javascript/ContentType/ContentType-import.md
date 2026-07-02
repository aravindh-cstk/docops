---
title: "import"
description: "The Import a content type call imports a content type into a stack."
url: "https://www.contentstack.com/js-management-contenttype-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## import

The Import a content type call imports a content type into a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.content_type | string | Yes | — | File path to import content type |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = {
 content_type: 'path/to/file.json',
}

client.stack({ api_key: 'api_key'}).contentType().import(data)
.then((contentType) => console.log(contentType))
```
