---
title: "bulkOperation"
description: "Bulk operations such as Publish, Unpublish, and Delete on multiple entries or assets."
url: "https://www.contentstack.com/js-management-stack-bulkoperation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## bulkOperation

Bulk operations such as Publish, Unpublish, and Delete on multiple entries or assets.

No parameters.

Returns:
Type
BulkOperation

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).bulkOperation()
```
