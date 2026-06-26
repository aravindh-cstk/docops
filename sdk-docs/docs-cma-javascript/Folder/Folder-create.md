---
title: "create"
description: "The Create a Folder call creates a folder into the assets."
url: "https://www.contentstack.com/js-management-foler-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a Folder call creates a folder into the assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.asset | object | Yes | — | Folder details to create. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const asset = {name: 'My New contentType'}

client.stack({ api_key: 'api_key'}).asset().folder().create({ asset })
.then((folder) => console.log(folder))
```
