---
title: "extension"
description: "Extensions let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behaviour."
url: "https://www.contentstack.com/js-management-stack-extension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## extension

Extensions let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behaviour.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for extension to perform operation on. |

Returns:
Type
Extension

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).extension()
// OR
client.stack({ api_key: 'api_key'}).extension('uid')
```
