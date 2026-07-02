---
title: "auditlog"
description: "Audit log displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content."
url: "https://www.contentstack.com/js-management-stack-auditlog"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## auditlog

Audit log displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| logItemUid | String | Yes | — | UID of the log item |

Returns:
Type
AuditLog

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).auditLog().fetchAll()
.then((logs) => console.log(logs))

client.stack({ api_key: 'api_key' }).auditLog('log_item_uid').fetch()
.then((log) => console.log(log))
```
