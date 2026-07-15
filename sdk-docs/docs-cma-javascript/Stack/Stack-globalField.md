---
title: "globalField"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack."
url: "https://www.contentstack.com/js-management-stack-globalfield"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## globalField

A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for GlobalField to perform operation on. |

Returns:
Type
GlobalField

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).globalField()
// OR
client.stack({ api_key: 'api_key'}).globalField('uid')
```
