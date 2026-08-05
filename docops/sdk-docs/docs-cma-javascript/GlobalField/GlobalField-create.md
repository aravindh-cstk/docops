---
title: "create"
description: "The Create a GlobalField call creates a new globalField in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-globalfield-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a GlobalField call creates a new globalField in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.global_field | object | Yes | — | GlobalField details and schema to create. |

Returns:
Type
Promise

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const global_field = {name: 'My New global field'}

client.stack({ api_key: 'api_key'}).globalField().create({ global_field })
.then((globalField) => console.log(globalField))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const global_field = {name: 'My New global field'}
client.stack({ api_key: 'api_key'}).globalField({ api_version: '3.2'}).create({ global_field })
.then((globalField) => console.log(globalField))
```
