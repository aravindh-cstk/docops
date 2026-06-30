---
title: "locale"
description: "Locale allows you to create and publish entries in any language."
url: "https://www.contentstack.com/js-management-stack-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

Locale allows you to create and publish entries in any language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for locale to perform operation on. |

Returns:
Type
Locale

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).locale()
// OR
client.stack({ api_key: 'api_key'}).locale('uid')
```
