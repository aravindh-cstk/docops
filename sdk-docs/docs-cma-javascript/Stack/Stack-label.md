---
title: "label"
description: "Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together"
url: "https://www.contentstack.com/js-management-stack-label"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## label

Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for label to perform operation on. |

Returns:
Type
Label

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).label()
// OR
client.stack({ api_key: 'api_key'}).label('label_uid')
```
