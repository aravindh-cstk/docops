---
title: "import"
description: "The Import an entry call imports an entry into a stack."
url: "https://www.contentstack.com/js-management-entry-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## import

The Import an entry call imports an entry into a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.entry | string | Yes | — | File path to import Entry |
| locale | string | No | — | Enter the code of the language to import the entry of that particular language. |
| overwrite | boolean | No | — | Select 'true' to replace an existing entry with the imported entry file. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = {
 entry: 'path/to/file.json',
}

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry().import(data)
.then((entry) => console.log(entry))
```
