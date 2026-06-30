---
title: "fetch"
description: "The fetch AuditLog call fetches AuditLog details."
url: "https://www.contentstack.com/js-management-auditlog-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch AuditLog call fetches AuditLog details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| audit_log_item_uid | string | No | — | UID of the audit log item |

Returns:
Type
Promise.<Branch.Branch>

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).auditLog('audit_log_item_uid').fetch()
.then((log) => console.log(log))
```
