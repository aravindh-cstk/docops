---
title: "import"
description: "The Import a global field call imports a global field into a stack."
url: "https://www.contentstack.com/js-management-globafield-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## import

The Import a global field call imports a global field into a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.global_field | string | Yes | — | File path to import GlobalField |

Returns:
Type
Promise

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = {
 global_field: 'path/to/file.json',
}

client.stack({ api_key: 'api_key'}).globalField().import(data)
.then((globalField) => console.log(globalField))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const data = {
 global_field: 'path/to/file.json',
}
client.stack({ api_key: 'api_key'}).globalField({ api_version: '3.2'}).import(data)
.then((globalField) => console.log(globalField))
```
