---
title: "fetch"
description: "The fetch GlobalField call fetches GlobalField details."
url: "https://www.contentstack.com/js-management-globalfield-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch GlobalField call fetches GlobalField details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | number | No | — | Version number to fetch specific version of GlobalField. |

Returns:
Type
Promise

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).globalField('global_field_uid').fetch()
.then((globalField) => console.log(globalField))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).globalField('global_field_uid', { api_version: '3.2'}).fetch()
.then((globalField) => console.log(globalField))
```
